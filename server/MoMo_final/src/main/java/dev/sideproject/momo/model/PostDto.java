package dev.sideproject.momo.model;

import java.time.Instant;

public class PostDto {

    private Long id;
    private String content;
    private String topic;

    private Long userId;
    private Instant createAt;
//    private Instant updateAt;

    public PostDto() {
    }

    public PostDto(Long id, String content, String topic, Long userId, Instant createAt) {
        this.id = id;
        this.content = content;
        this.topic = topic;
        this.userId = userId;
        this.createAt = createAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Instant getCreateAt() {
        return createAt;
    }

    public void setCreateAt(Instant createAt) {
        this.createAt = createAt;
    }
}
