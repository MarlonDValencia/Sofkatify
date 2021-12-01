package com.sofkatify.api.Playlist;

import com.sofkatify.api.Track.Track;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlaylistRepository extends CrudRepository<Playlist, Long> {
    Iterable<Track> findAllTracksById(Long id);
}
