package dev.sideproject.momo.controller;


import dev.sideproject.momo.model.UserDto;
import dev.sideproject.momo.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("api/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<UserDto> createUser
            (@RequestBody UserDto userDto){
        UserDto result = this.userService.create(userDto);
        return  ResponseEntity.ok(result);
    }

    @GetMapping
    public ResponseEntity<Collection<UserDto>> readUserAll(){
        Collection<UserDto> userDtoList = userService.readAll();
        if (userDtoList == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(userDtoList);
    }

    @GetMapping("{id}")
    public ResponseEntity<UserDto> readUser(
            @PathVariable Long id){
        return ResponseEntity.ok(this.userService.read(id));
    }

    @PutMapping("{id}")
    public ResponseEntity<?> updateUser(
            @RequestBody UserDto dto,
            @PathVariable Long id){
        this.userService.update(dto, id);
        return ResponseEntity.ok().build();
    }


    @DeleteMapping("{id}")
    public ResponseEntity<?> deleteUser(@PathVariable("id") Long id){
        this.userService.delete(id);
        return ResponseEntity.ok().build();
    }


}
