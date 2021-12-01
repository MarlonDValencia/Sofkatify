package com.sofkatify.api.User;

import com.sofkatify.api.Playlist.PlaylistModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = {"${settings.cors_origin}"})
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }


    @GetMapping(value = "api/{userId}/playlist")
    public Iterable<PlaylistModel> getPlaylistByUserId(@PathVariable("userId") Long userId){
        return userService.getPlaylistByUserId(userId);
    }

    @GetMapping(value = "api/users")
    public Iterable<UserModel> getAllUsers(){
        return userService.getAllUsers();
    }

    @PostMapping(value = "api/{userId}/playlist")
    public PlaylistModel addNewPlaylistByUserId(@PathVariable("userId") Long userId, @RequestBody PlaylistModel playlist){
        return userService.addNewPlaylistByUserId(userId, playlist);
    }

    @DeleteMapping(value = "api/user/{id}")
    public void deleteUserById(@PathVariable("id") Long id){
        userService.deleteUserById(id);
    }

    @PutMapping(value = "api/user/{userId}")
    public UserModel updateUser(@PathVariable("userId") Long userId, @RequestBody UserModel userModel){
        if(userModel.getId() != null){
            return userService.updateUser(userId, userModel);
        }
        throw new NotFoundIdException("No existe el id para actualizar el usuario");
    }

    @PostMapping(value = "api/user")
    public UserModel newUser(@RequestBody UserModel user){
        return userService.newUser(user);
    }
}
