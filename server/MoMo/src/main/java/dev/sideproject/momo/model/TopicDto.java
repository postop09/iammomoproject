package dev.sideproject.momo.model;

import java.time.Instant;


public class TopicDto {
    private Long id;
    private String title;
    private Instant createAt;

    public TopicDto() {
    }

    public TopicDto(Long id, String title, Instant createAt) {
        this.id = id;
        this.title = title;
        this.createAt = createAt;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Instant getCreateAt() {
        return createAt;
    }

    public void setCreateAt(Instant createAt) {
        this.createAt = createAt;
    }

    @Override
    public String toString() {
        return "TopicDto{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", createAt=" + createAt +
                '}';
    }
}
