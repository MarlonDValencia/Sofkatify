package com.sofkatify.api.User;


import com.sofkatify.api.Playlist.Playlist;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    Iterable<Playlist> findAllPlaylistsById(Long id);
}
