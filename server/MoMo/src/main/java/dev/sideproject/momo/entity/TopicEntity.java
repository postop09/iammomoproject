package dev.sideproject.momo.entity;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table(name = "topic")
public class TopicEntity extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;


    @OneToMany(
            fetch = FetchType.LAZY,
            targetEntity = PostEntity.class,
            mappedBy = "topicEntity"
    )
    private List<PostEntity> postEntityList = new ArrayList<>();

    public TopicEntity() {
        this.id = id;
        this.title = title;
    }

    //    @LastModifiedDate // 조회한  Entity 값을 변경할 때 시간이 자동 저장
//    private LocalDateTime modifiedDate;


    public List<PostEntity> getPostEntityList() {
        return postEntityList;
    }

    public void setPostEntityList(List<PostEntity> postEntityList) {
        this.postEntityList = postEntityList;
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
}
