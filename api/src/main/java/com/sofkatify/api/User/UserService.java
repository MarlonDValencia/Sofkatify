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
                .map(item -> new PlaylistModel(item.getId(), item.getName(), item.getDescription(), id))
                .collect(Collectors.toSet());
    }

    public Set<UserModel> getAllUsers(){
        return StreamSupport
                .stream(userRepository.findAll().spliterator(), false)
                .map(user -> {
                    var listPlaylist = user.getPlaylists()
                            .stream()
                            .map(item -> new PlaylistModel(item.getId(), item.getName(), item.getDescription(), user.getId()))
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

        if(playlist.getName().isEmpty() || playlist.getName().length() < 3){
            throw new com.sofkatify.api.Playlist.ToDoBusinessException("Entrada no válida para el título de una playlist");
        }

        //Adición de la nueva playlist
        listUser.getPlaylists().add(playlist);
        var listUpdated = userRepository.save(listUser);
        //ultimo ítem
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
            }
        }

        userRepository.save(listUser);

        return aPlaylistModel;
    }

    public UserModel newUser(UserModel aUserModel) {
        var listUser = new User();
        listUser.setUsername(Objects.requireNonNull(aUserModel.getUsername()));
        if(listUser.getUsername().isEmpty() || listUser.getUsername().length() < 3){
            throw new ToDoBusinessException("No es una entrada válida para el nombre de usuario");
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
