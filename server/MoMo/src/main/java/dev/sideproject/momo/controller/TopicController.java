package dev.sideproject.momo.controller;

import dev.sideproject.momo.entity.TopicEntity;
import dev.sideproject.momo.model.TopicDto;
import dev.sideproject.momo.service.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.GeneratedValue;
import java.util.Collection;

@RestController
@RequestMapping("api/topic")
public class TopicController {

    private final TopicService topicService;


    public TopicController(
            @Autowired TopicService topicService) {
        this.topicService = topicService;
    }

    @PostMapping
    public ResponseEntity<TopicDto> createTopic
            (@RequestBody TopicDto dto){
        return ResponseEntity.ok(topicService.create(dto));
    }

    @GetMapping
    public ResponseEntity<Collection<TopicDto>> readTopicAll(){
        return ResponseEntity.ok(topicService.readAll());
    }

    @GetMapping("{topicId}")
    public ResponseEntity<TopicDto> readTopic
            (@PathVariable("topicId") Long id){

        TopicDto dto = topicService.read(id);

        if (dto == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(dto);
    }

    @PutMapping("{topicId}")
    public ResponseEntity<?> updateTopic
            (@PathVariable("topicId") Long id,
            @RequestBody TopicDto dto){

        if (!topicService.update(id, dto))
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("{topicId}")
    public ResponseEntity<?> deleteTopic
            (@PathVariable("topicId") Long id){
        if (!topicService.delete(id))
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok().build();
    }




}
