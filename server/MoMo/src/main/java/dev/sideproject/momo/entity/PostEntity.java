package dev.sideproject.momo.entity;


import javax.persistence.*;

@Entity
@Table(name = "post")
public class PostEntity extends BaseEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String content;

    @ManyToOne(
            fetch = FetchType.LAZY,
            targetEntity = TopicEntity.class
    )
    @JoinColumn(name = "topic_id")
    private TopicEntity topicEntity;

    //user
    @ManyToOne(
            fetch = FetchType.LAZY,
            targetEntity = UserEntity.class
    )
    @JoinColumn(name = "user_id")
    private UserEntity writer;

    public PostEntity() {
    }

    public PostEntity(Long id, String content, TopicEntity topicEntity, UserEntity writer) {
        this.id = id;
        this.content = content;
        this.topicEntity = topicEntity;
        this.writer = writer;
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

    public TopicEntity getTopicEntity() {
        return topicEntity;
    }

    public void setTopicEntity(TopicEntity topicEntity) {
        this.topicEntity = topicEntity;
    }

    public UserEntity getWriter() {
        return writer;
    }

    public void setWriter(UserEntity writer) {
        this.writer = writer;
    }

    @Override
    public String toString() {
        return "PostEntity{" +
                "id=" + id +
                ", content='" + content + '\'' +
                ", topicEntity=" + topicEntity +
                ", writer=" + writer +
                '}';
    }
}
