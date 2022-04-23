package dev.sideproject.momo.model;

import java.time.Instant;

public interface UserPostInterface {

    String getTopic();
    String getContent();
    Instant getCreate_At();

}
