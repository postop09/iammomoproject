package dev.sideproject.momo.model;

import java.time.Instant;

public class PostDto {

    private Long id;
    private String content;

    private Long userId;
    private Long topicId;
    private String topicTitle;
    private Instant createAt;
//    private Instant updateAt;

    public PostDto() {
    }

    public PostDto(Long id, String content, Long userId, Long topicId, String topicTitle, Instant createAt) {
        this.id = id;
        this.content = content;
        this.userId = userId;
        this.topicId = topicId;
        this.topicTitle = topicTitle;
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

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getTopicId() {
        return topicId;
    }

    public void setTopicId(Long topicId) {
        this.topicId = topicId;
    }

    public String getTopicTitle() {
        return topicTitle;
    }

    public void setTopicTitle(String topicTitle) {
        this.topicTitle = topicTitle;
    }

    public Instant getCreateAt() {
        return createAt;
    }

    public void setCreateAt(Instant createAt) {
        this.createAt = createAt;
    }
}
