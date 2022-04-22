package dev.sideproject.momo.repository;

import dev.sideproject.momo.entity.UserEntity;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository <UserEntity, Long> {
}
