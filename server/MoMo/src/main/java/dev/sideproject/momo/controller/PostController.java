package dev.sideproject.momo.controller;

import dev.sideproject.momo.model.PostDto;
import dev.sideproject.momo.service.PostService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("api/topic/{topicId}/post")
public class PostController {

    private final PostService postService;


    public PostController(PostService postService) {
        this.postService = postService;
    }

    @PostMapping()
    public ResponseEntity<PostDto> createPost(
            @PathVariable("topicId") Long topicId,
            @RequestBody PostDto dto){
        PostDto result = this.postService.create(topicId, dto);
        return ResponseEntity.ok(result);
    }

    @GetMapping()
    public ResponseEntity<Collection<PostDto>> readPostAll(
            @PathVariable("topicId") Long topicId){
        Collection<PostDto> postList = this.postService.readAll(topicId);
        if (postList == null)
            return ResponseEntity.notFound().build();
        else
            return ResponseEntity.ok(postList);
    }

    @GetMapping("{postId}")
    public ResponseEntity<PostDto> readPost(
            @PathVariable("topicId") Long topicId,
            @RequestParam("postId") Long postId){
        PostDto postDto = this.postService.read(topicId, postId);
        if (postDto == null)
            return ResponseEntity.notFound().build();
        else
            return ResponseEntity.ok(postDto);
    }

    @PutMapping("{postId}")
    public ResponseEntity<?> updatePost(
            @PathVariable("topicId") Long topicId,
            @RequestBody PostDto dto,
            @PathVariable("postId") Long postId
           ){
        if (!postService.update(topicId,dto, postId))
            return ResponseEntity.notFound().build();
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("{postId}")
    public ResponseEntity<?> deletePost(
            @PathVariable("topicId") Long topicId,
            @PathVariable("postId") Long postId){
        if (!postService.delete(topicId, postId))
            return ResponseEntity.notFound().build();
        return ResponseEntity.noContent().build();
    }





}
