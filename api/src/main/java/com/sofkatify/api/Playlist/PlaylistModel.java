package com.sofkatify.api.Playlist;

import com.sofkatify.api.Track.TrackModel;
import java.util.HashSet;
import java.util.Set;

public class PlaylistModel {

    private long id;
    private long userId;
    private String name;

    public PlaylistModel(){
        super();
    }

    public PlaylistModel(long id, String name, long userId){
        this.id = id;
        this.name = name;
        this.userId = userId;
    }

    public PlaylistModel(long id, String name){
        this.id = id;
        this.name = name;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
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
}
