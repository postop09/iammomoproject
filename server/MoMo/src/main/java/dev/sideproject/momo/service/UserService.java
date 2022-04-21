package dev.sideproject.momo.service;

import dev.sideproject.momo.model.UserDto;

import java.util.Collection;

public interface UserService {

    UserDto create(UserDto dto);
    Collection<UserDto> readAll();
    UserDto read(Long id);
    boolean update(UserDto dto, Long id);
    boolean delete(Long id);

}
