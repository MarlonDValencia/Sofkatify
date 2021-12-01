package com.sofkatify.api.Playlist;

import com.sofkatify.api.Track.TrackModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = {"${settings.cors_origin}"})
public class PlaylistController {

    private PlaylistService playlistService;

    @Autowired
    public PlaylistController(PlaylistService playlistService) {
        this.playlistService = playlistService;
    }

    @GetMapping(value = "api/{playlistId}/tracks")
    public Iterable<TrackModel> getTracksByPlaylistId(@PathVariable("playlistId") Long playlistId){
        return playlistService.getTracksByPlaylistId(playlistId);
    }

    @GetMapping(value = "api/playlists")
    public Iterable<PlaylistModel> getAllPlaylists(){
        return playlistService.getAllPlaylists();
    }

    @DeleteMapping(value = "api/playlist/{id}")
    public void deletePlaylistById(@PathVariable("id") Long id){
        playlistService.deletePlaylistById(id);
    }

    @PostMapping(value = "api/{playlistId}/track")
    public TrackModel addNewTrackByPlaylistId(@PathVariable("playlistId") Long playlistId, @RequestBody TrackModel track){
        return playlistService.addNewTrackByPlaylistId(playlistId, track);
    }

    @DeleteMapping(value = "api/track/{id}")
    public void deleteATrackById(@PathVariable("id")Long id){
        playlistService.deleteATrackById(id);
    }
}
