package com.sofkatify.api.Playlist;

import com.sofkatify.api.Track.Track;
import com.sofkatify.api.Track.TrackModel;
import com.sofkatify.api.Track.TrackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;


@Service
public class PlaylistService {

    public static final String NO_FAULT_ID = "No existe el id de la Playlist";
    private PlaylistRepository playlistRepository;
    private TrackRepository trackRepository;

    @Autowired
    public PlaylistService(PlaylistRepository playlistRepository, TrackRepository trackRepository) {
        this.playlistRepository = playlistRepository;
        this.trackRepository = trackRepository;
    }

    public Set<TrackModel> getTracksByPlaylistId(long id){
        return playlistRepository.findById(id)
                .orElseThrow(() -> new NotFoundIdException(NO_FAULT_ID))
                .getTracks().stream()
                .map(item -> new TrackModel(item.getId(), item.getTitle(), item.getArtist(), item.getAlbum(), item.getDuration(), id))
                .collect(Collectors.toSet());
    }

    public Set<PlaylistModel> getAllPlaylists() {
        return StreamSupport
                .stream(playlistRepository.findAll().spliterator(), false)
                .map(playlist -> {
                    var listTrack = playlist.getTracks()
                            .stream()
                            .map(item -> new TrackModel(item.getId(), item.getTitle(), item.getArtist(), item.getAlbum(), item.getDuration(), playlist.getId()))
                            .collect(Collectors.toSet());
                    return new PlaylistModel(playlist.getId(), playlist.getName(), playlist.getDescription());
                })
                .collect(Collectors.toSet());
    }

    public TrackModel addNewTrackByPlaylistId(Long playlistId, TrackModel aTrackModel){
        var listTrack = playlistRepository.findById(playlistId)
                .orElseThrow(() -> new NotFoundIdException(NO_FAULT_ID));
        var track = new Track();

        track.setId(aTrackModel.getId());
        track.setTitle(aTrackModel.getTitle());
        track.setArtist(aTrackModel.getArtist());
        track.setAlbum(aTrackModel.getAlbum());
        track.setDuration(aTrackModel.getDuration());

        if(track.getTitle().isEmpty() || track.getTitle().length() < 3){
            throw new ToDoBusinessException("Entrada no válida para el título de una canción");
        }

        //Adición de la nueva canción
        listTrack.getTracks().add(track);
        var listUpdated = playlistRepository.save(listTrack);
        //ultimo ítem
        //---------Corregir last track porque el id es aleatorio para este caso-------------------------------
        var lastTrack = listUpdated.getTracks()
                .stream()
                .max(Comparator.comparingInt(item -> (int) item.getId()))
                .orElseThrow();
        aTrackModel.setId(lastTrack.getId());
        aTrackModel.setPlaylistId(playlistId);
        return aTrackModel;
    }

    public void deletePlaylistById(Long playlistId){
        var listTracks = playlistRepository.findById(playlistId)
                .orElseThrow(() -> new NotFoundIdException(NO_FAULT_ID));
        playlistRepository.delete(listTracks);
    }

    public void deleteATrackById(Long id) {
        var track = trackRepository.findById(id).orElseThrow();
        trackRepository.delete(track);
    }
}