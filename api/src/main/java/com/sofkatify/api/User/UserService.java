package com.sofkatify.api.User;

import com.sofkatify.api.Playlist.NotFoundIdException;
import com.sofkatify.api.Playlist.Playlist;
import com.sofkatify.api.Playlist.PlaylistModel;
import com.sofkatify.api.Playlist.PlaylistRepository;
import com.sofkatify.api.Track.Track;
import com.sofkatify.api.Track.TrackModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;


@Service
public class UserService {

    public static final String NO_FAULT_ID = "No existe el id del usuario";
    private UserRepository userRepository;
    private PlaylistRepository playlistRepository;

    @Autowired
    public UserService(UserRepository userRepository, PlaylistRepository playlistRepository) {
        this.userRepository = userRepository;
        this.playlistRepository = playlistRepository;
    }


    public Set<PlaylistModel> getPlaylistByUserId(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new NotFoundIdException(NO_FAULT_ID))
                .getPlaylists().stream()
                .map(playlist -> {
                    var listTrack = playlist.getTracks()
                            .stream()
                            .map(item -> new TrackModel(item.getId(), item.getTitle(), item.getArtist(), item.getAlbum(), item.getDuration(), playlist.getId()))
                            .collect(Collectors.toSet());
                    return new PlaylistModel(playlist.getId(), playlist.getName(), playlist.getDescription(), listTrack, id);
                })
                .collect(Collectors.toSet());
    }

    public Set<UserModel> getAllUsers(){
        return StreamSupport
                .stream(userRepository.findAll().spliterator(), false)
                .map(user -> {
                    var listPlaylist = user.getPlaylists()
                            .stream()
                            .map(playlist -> {
                                var listTrack = playlist.getTracks()
                                        .stream()
                                        .map(item -> new TrackModel(item.getId(), item.getTitle(), item.getArtist(), item.getAlbum(), item.getDuration(), playlist.getId()))
                                        .collect(Collectors.toSet());
                                return new PlaylistModel(playlist.getId(), playlist.getName(), playlist.getDescription(), listTrack, user.getId());
                            })
                            .collect(Collectors.toSet());
                    return new UserModel(user.getId(), user.getUsername(), user.getPassword(), user.getEmail(), listPlaylist);
                })
                .collect(Collectors.toSet());
    }

    public PlaylistModel addNewPlaylistByUserId(Long userId, PlaylistModel aPlaylistModel){
        var listUser = userRepository.findById(userId)
                .orElseThrow(() -> new NotFoundIdException(NO_FAULT_ID));
        var playlist = new Playlist();

        playlist.setId(aPlaylistModel.getId());
        playlist.setName(aPlaylistModel.getName());
        playlist.setDescription(aPlaylistModel.getDescription());


        if(playlist.getName().isEmpty() || playlist.getName().length() < 3){
            throw new com.sofkatify.api.Playlist.ToDoBusinessException("Entrada no v??lida para el t??tulo de una playlist");
        }

        //Adici??n de la nueva playlist
        listUser.getPlaylists().add(playlist);
        var listUpdated = userRepository.save(listUser);
        //ultimo ??tem
        var lastTrack = listUpdated.getPlaylists()
                .stream()
                .max(Comparator.comparingInt(item -> item.getId().intValue()))
                .orElseThrow();
        aPlaylistModel.setId(lastTrack.getId());
        aPlaylistModel.setUserId(userId);
        return aPlaylistModel;
    }

    public PlaylistModel updateAPlaylistByUserId(Long userId, PlaylistModel aPlaylistModel) {
        var listUser = userRepository.findById(userId)
                .orElseThrow(() -> new NotFoundIdException(NO_FAULT_ID));

        //Editar Playlist
        for(var item : listUser.getPlaylists()){
            if(item.getId().equals(aPlaylistModel.getId())){
                item.setName(Objects.requireNonNull(aPlaylistModel.getName()));
                item.setId(Objects.requireNonNull(aPlaylistModel.getId()));
                item.setDescription(Objects.requireNonNull(aPlaylistModel.getDescription()));
            }
        }

        userRepository.save(listUser);

        return aPlaylistModel;
    }

    public UserModel newUser(UserModel aUserModel) {
        var listUser = new User();
        listUser.setUsername(Objects.requireNonNull(aUserModel.getUsername()));
        listUser.setPassword(Objects.requireNonNull(aUserModel.getPassword()));
        listUser.setEmail(Objects.requireNonNull(aUserModel.getEmail()));
        if(listUser.getUsername().isEmpty() || listUser.getUsername().length() < 3){
            throw new ToDoBusinessException("No es una entrada v??lida para el nombre de usuario");
        }
        var id = userRepository.save(listUser).getId();
        aUserModel.setId(id);
        return aUserModel;
    }

    public UserModel updateUser(Long userId, UserModel aUserModel) {
        var listUser = userRepository.findById(userId)
                .orElseThrow(() -> new NotFoundIdException(NO_FAULT_ID));

        listUser.setUsername(Objects.requireNonNull(aUserModel.getUsername()));
        listUser.setEmail(Objects.requireNonNull(aUserModel.getEmail()));
        listUser.setPassword(Objects.requireNonNull(aUserModel.getPassword()));

        userRepository.save(listUser);
        return aUserModel;
    }

    public void deleteUserById(Long userId){
        var listUser = userRepository.findById(userId)
                .orElseThrow(() -> new NotFoundIdException(NO_FAULT_ID));
        userRepository.delete(listUser);
    }
}
