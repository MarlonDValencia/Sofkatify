package com.sofkatify.api.Playlist;

import com.sofkatify.api.Track.TrackModel;
import java.util.HashSet;
import java.util.Set;

public class PlaylistModel {

    private Long id;
    private long userId;
    private String name;
    private String description;

    public PlaylistModel(){
        super();
    }

    public PlaylistModel(long id, String name, String description, long userId){
        this.id = id;
        this.name = name;
        this.userId = userId;
    }

    public PlaylistModel(long id, String name, String description){
        this.id = id;
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
