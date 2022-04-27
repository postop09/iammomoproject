
# MOMO Project  _SERVER
## Iam MoMo Project 
개발 기간: 2022-04-18 ~ 2022-04-27
* 본격 '일상 공감' 프로젝트입니다.
* 모든 글은 '모모'라는 닉네임을 사용하며 가벼운 일상에서 부터 진솔한 감정까지 다양한 이야기로 서로의 삶을 공유하는 서비스입니다.
* 무슨 글을 써야 할지 모를때는 다양한 예시 질문을 보고 선택해서 글을 시작해 보세요 :)


## Project Member
* Planner : Team Iam ground 
* Backend : 김남주, 신동금
* Frontend : 강수영, 조윤식


## Tech Stack
* SpringBoot
* AWS, RDS (MySql)
* Spring Security (JWT)
* JPA
* PostMan
* [Swagger](#swagger)

<br>

![image](https://user-images.githubusercontent.com/73453283/164159577-6fe902f8-7b33-4177-98d0-7bc8ca8a8b6d.png)


---

<br>

## Function Implementation
* 로그인, 회원가입
* 게시글 주제 (Topic) CRUD
* 게시글 답변 (Post) CRUD
* 내가 작성한 게시글 조회

<br>


## Swagger
![image](https://user-images.githubusercontent.com/73453283/165444788-2f5b7840-b4af-4ed1-be4d-7663ed5e1201.png)
![image](https://user-images.githubusercontent.com/73453283/165444889-f5607e87-eee8-44df-97c1-cd3936bd2de7.png)
![image](https://user-images.githubusercontent.com/73453283/165444933-79d1659d-5185-4523-a6e7-2f1bcf6298cd.png)


<br>

### 회원가입 & 로그인
![siginin](https://user-images.githubusercontent.com/73453283/165477392-e7c6d852-9dbd-49fd-9ac9-19ec251d4f61.gif)

<br>

### 질문
* 기본 질문을 유저가 바로 이용가능 하도록 sql을 사용

![main1](https://user-images.githubusercontent.com/73453283/165477152-22b730d0-aa6e-4947-88b7-b06e866a48bd.gif)

<br>

### 질문에 대한 답변 작성  
![main2_write](https://user-images.githubusercontent.com/73453283/165477303-88a46a23-68e7-4a80-a46a-6208f1ef9709.gif)

<br>

### 전체 질문 조회

![main3_select](https://user-images.githubusercontent.com/73453283/165477323-25903b99-f053-44f7-a55a-560bb38fde3f.gif)


<br>

### 나의 페이지 
![main4_myQ](https://user-images.githubusercontent.com/73453283/165477350-a3a5ca98-7384-4e2b-ae1e-542e61752193.gif)


<br>

### 내가 작성한 답변 수정 
![main5_edit](https://user-images.githubusercontent.com/73453283/165477364-0f78a9e9-b01d-4736-8a00-2fc937ed6e38.gif)


<br>

### 내가 작성한 답변 조회 & 질문 생성
* native 쿼리를 사용하여 작성한 답변 조회 가능

![main6_mypage](https://user-images.githubusercontent.com/73453283/165477378-f5c4a9de-61bf-4e8c-b636-ca2529a967bc.gif)



---
### 2022-04-18 개발상황
* API 명세서 제작
* [기능 구현 정리](https://docs.google.com/spreadsheets/d/1N9hlroYr8jF329h9Pk4APd2NBekYUOnbyEw2vAlHXUM/edit?usp=sharing) 

### 2022-04-19 개발상황
* AWS 서버 구축 Nginx 설치
* Topic CRUD API 생성
* 프론트님과 API 구동 테스트 

### 2022-04-20 개발상황
* CORS 에러 해결 
* Topic Entity CreateAt 추가 (프론트님 요구사항) 
* Topic CRUD 서버 업데이트

### 2022-04-21 개발상황
* User CRUD API 생성
* Post CRUD API 생성
* Swagger 적용
* POST CRUD 수정 + DB변경 (프론트님 요구사항)

### 2022-04-22 개발상황
* CORS 에러 해결 2 (시큐리티)
* 로그인 API 테스트

### 2022-04-23 개발상황
* 나의 게시글 확인 기능 API 생성

### 2022-04-24 개발상황
* swagger 명세서 업데이트
* 데이터베이스 초기 데이터 삽입 (기획자님 요구사항)
* JWT 토큰 로그인 회원가입 구현

### 2022-04-25 진행상황
* 회원가입, 로그인 오류 수정

### 2022-04-26 진행상황
* 기획자님과 미팅 (최종 피드백)

### 2022-04-27 FinalDay
* 시큐리티를 적용한 페이지와 메인 페이지를 병합 
* ReactApp과 서버 최종 테스트 



---
