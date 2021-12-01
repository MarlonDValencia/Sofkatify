package com.sofkatify.api.User;

import com.sofkatify.api.Playlist.PlaylistModel;

import java.util.HashSet;
import java.util.Set;

public class UserModel {

    private Long id;
    private String username;
    private String password;
    private String email;
    private Set<PlaylistModel> items = new HashSet<>();

    public UserModel() {
        super();
    }

    public UserModel(Long id, String username, String password, String email, Set<PlaylistModel> items) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.items = items;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Set<PlaylistModel> getItems() {
        return items;
    }

    public void setItems(Set<PlaylistModel> items) {
        this.items = items;
    }
}
