# 🟤MOMO Project

![image](https://user-images.githubusercontent.com/73453283/164159577-6fe902f8-7b33-4177-98d0-7bc8ca8a8b6d.png)


## 1. MoMo 란
IamMOMOproject

- 본격 '일상 공감' 프로젝트입니다.
- 모든 글은 '모모'라는 닉네임을 사용하며 가벼운 일상에서 부터 진솔한 감정까지 다양한 이야기로 서로의 삶을 공유하는 서비스입니다.
- 무슨 글을 써야 할지 모를때는 다양한 예시 질문을 보고 선택해서 글을 시작해 보세요 :)

> **프로젝트 개발기간** : 2022-04-16 ~ 2022-04-27

<br>

### 배포 링크
*서버 닫혀있음

https://iammomoproject.netlify.app/

<br>

## 2. Project Member
* Planner : Team Iam ground 
* Backend : 김남주, 신동금
* Frontend : 강수영, 조윤식

<br>


## 3. Project Architecture

![](/server/momo_arch.png)

<br>

---

# Front-End(React)
## Usage(자세한 실행 방법)

1. git clone

```
https://github.com/Sideproject-momoProject/iammomoproject.git
```

2. iammomoproject 폴더를 인터프린터나 컴파일러로 열기
3. client 폴더로 이동 및 필요한 라이브러리 설치

```
cd client
npm install
```

4. 실행

```
npm run start
```

*사용 기술*

- react.js
- styled-components
- axios
- swiper.js

## 구현 페이지 및 기능
### 회원가입/로그인
![로그인:회원가입](https://user-images.githubusercontent.com/93017923/165521424-e1b6a034-a5ba-4a08-b34c-6d301935bd66.gif)
- 이름/이메일/비밀번호/비밀번호 확인
- 이메일 형식 유효성 검사
- 비밀번호 형식 유효성 검사
- 비밀번호 재확인
- 약관 동의 체크리스트
- 이메일/비밀번호 로그인

### 로그아웃
![로그아웃](https://user-images.githubusercontent.com/93017923/165523959-8979dcae-013c-4da1-90a1-c4c31361eb12.gif)

### 랜딩 페이지(메인 페이지)
처음 접속하면 보이게 되는 페이지. 모모 프로젝트에 대한 전반적인 소개와 글 작성이 이루어짐.

![미로그인 랜딩페이지](https://user-images.githubusercontent.com/93017923/165521977-b8fb69e4-334a-4f9f-b7e2-e0976165f0e8.gif)
- 카드 슬라이드
- 카드 선택 시 질문 무작위 출력
- 영역 외 클릭 시 닫기
- 카드 닫기 및 글 저장 재확인
- 글 작성

|로그인|미로그인|글 작성|
|---|---|---|
|![로그인시 카드선택](https://user-images.githubusercontent.com/93017923/165521948-504aef2c-dec7-449c-a28e-b75ac7d18eb4.gif)|![미로그인 카드선택](https://user-images.githubusercontent.com/93017923/165522417-287beb33-d973-48dd-a11f-fdf600950b38.gif)|![글작성](https://user-images.githubusercontent.com/93017923/165524139-c096497b-398f-4792-b97b-e4e719586096.gif)|
|카드 이하 전문 공백|모모 프로젝트 설명글 및 카드 선택 안내|입력창이 공란인 경우 버튼 비활성화|
|카드 선택 후 글 작성 활성화|카드 선택 후 글 작성란 클릭 시, 로그인 안내|글 작성 후 버튼 변경|

### MOMO 되기 페이지
각 페이지 개요를 설명하고 링크 제시.

<img src="https://user-images.githubusercontent.com/93017923/165525006-d4813af0-3591-4776-b36b-17daac6c2649.png" width="380" />

*MOMO 규칙*

<img src="https://user-images.githubusercontent.com/93017923/165525125-bea211c8-e637-4b87-93cd-270687662b03.png" width="380" />

### 나의 MOMO 페이지
본인관련 정보가 표시되는 페이지. 본인이 질문을 만들 수 있으며, 내가 작성한 글에 대해 보여줌.

|질문 작성|글 수정|글 삭제|
|---|---|---|
|![질문만들기](https://user-images.githubusercontent.com/93017923/165523051-05ecaec4-6031-46f8-97bc-844e9cdffc3e.gif)|![나의 모모:수정](https://user-images.githubusercontent.com/93017923/165523079-cd18d6f4-c92b-413d-aece-3bf9419b0938.gif)|![삭제하기](https://user-images.githubusercontent.com/93017923/165523455-56a9f3c4-7b87-4410-bff4-c792ad791fa6.gif)|
- 내가 작성한 글 목록 보기
- 내가 작성한 글의 질문 목록 제시
- 질문 선택 시, 질문과 일치하는 내 글 목록 출력
- 내가 작성한 글 상세보기
- 내가 작성한 글 수정
- 내가 작성한 글 삭제
- 질문 만들기

### MOMO 글모음
다른 모든 모모가 작성한 글의 목록이 제시되는 페이지

![모모 글모음](https://user-images.githubusercontent.com/93017923/165523324-d11b8a3c-36de-4030-af46-11714d7d76d1.gif)
- 당일에 작성된 글 목록 출력
- 모든 글 목록 출력
- 모든 질문 목록 제시
- 선택한 질문에 해당하는 글 목록 출력
- 글 선택 시, 자세히 보기 모달창

### Aboutus 페이지
모모 프로젝트 기획팀 소개 페이지

<img src="https://user-images.githubusercontent.com/93017923/165525869-6c733f5a-31cb-4097-985d-c3d83fd955f1.png" width="380" />

### Contactus 페이지
건의사항, 오류 피드백 작성 페이지

![컨택](https://user-images.githubusercontent.com/93017923/165523636-64f9b1cb-60d4-43db-af18-0aca6cdf637d.gif)
- 입력창 유효성 검사
- 미입력 시 버튼 비활성화

---

## Back-end(Java, SpringBoot)

### Tech Stack
* SpringBoot
* AWS, RDS (MySql)
* Spring Security (JWT)
* JPA
* PostMan
* [Swagger](#swagger)

<br>

### Function Implementation
* 로그인, 회원가입
* 게시글 주제 (Topic) CRUD
* 게시글 답변 (Post) CRUD
* 내가 작성한 게시글 조회

<br>

### Swagger
![image](https://user-images.githubusercontent.com/73453283/165444788-2f5b7840-b4af-4ed1-be4d-7663ed5e1201.png)
![image](https://user-images.githubusercontent.com/73453283/165444889-f5607e87-eee8-44df-97c1-cd3936bd2de7.png)
![image](https://user-images.githubusercontent.com/73453283/165444933-79d1659d-5185-4523-a6e7-2f1bcf6298cd.png)


### demo(시연화면)

### 회원가입 & 로그인
![siginin](https://user-images.githubusercontent.com/73453283/165477392-e7c6d852-9dbd-49fd-9ac9-19ec251d4f61.gif)

<br>

### 질문
* 유저가 바로 이용가능 하도록 서버 실행시 sql로 질문 리스트 데이터 삽입

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

<br>

---


## 4. 개발일정

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


## 🟤배운점/ 느낀점
### 힘들었던/어려웠던 점
백엔드 개발자와의 첫 협업! 서로 사용하는 용어도 다르고, 서버에 대한 지식이 전무하니 대화하기가 정말 힘들었다. 같은 의미로 얘기하더라도 서버측에서 사용하는 언어를 정확히 파악하고 있지 못하다 보니, 한참을 헤매면서 이해해 나갔다. 처음에는 내가 프론트엔드 개발자로서 어떤걸 요구해야 하는지도 감이 안 잡혔다. 백엔드 개발자분들 얘기해 주시는 것도 이해가 안되는 경우가 대부분이었다. 그럴 때는 죄송하지만 정중히 설명을 부탁드렸다...

그렇게 하루, 이틀 협업기간이 지나면서 서로 헷갈리지 않기위한 변수명을 `질문은 topic, 글은 post`와 같이 통일하고, 
API호출 과정에서 프론트에서 할 수 있는 부분에 대해 설명하고, 호출로직에 대한 수정도 부탁하며, 서로 개선해나갔다.

```
기존 : api/user/{userId}/{topic}/post
개선 : api/post
```
최종 마감 직전에는 에러 해결과정... 지속적인 피드백까지 서버 개발자분들과의 적극적인 상호 협력을 하는 과정이 정말 재미있었다.
```
나 : '나의 게시글' 부분은 전체글 api로 프론트에서도 처리할 수 있습니다! 우선 급한쪽부터 구현하시죠!
서버 개발자 : 네! 그럼 이것만 먼저 마치고, '나의 게시글' 부분 준비할게요!
```

- 용어가 이렇게나 다르다니...! 프론트만 안다고해서 협업이 되는게 아니구나.
- 로컬 작업 중 발생한 CORS 에러: 프록시 서버 이용해 보았으나 완벽히 해결되지 않아, 서버단에서 로컬 주소를 허용주소 목록에 추가하여 해결!
- 페이지 배포 후 발생한 Mixed contents : api호출을 http주소로 하다보니 mixed contents 이슈가 떴다. ssl인증을 받은 서버를 이용하는 것이 일반적?!

### 느낀점
기획팀분들로부터의 초안은 대부분의 디자인이 잡혀있지 않은 상태였다.

사실 기능 구현은 걱정하지 않았으나, 그 부분이 가장 힘든 부분이었다. 그것을 극복하기 위해 내가 생각한 것은 최대한 자주 진행상황을 공유하고 자주 피드백을 받는 것이 좋다고 생각했다.
그래서 디스코드를 통해 기획팀과 지속적으로 진행상황과 피드백을 공유하며 기획팀이 원하는 디자인을 갖추기 위해 노력했다. (때로는 적절한 의견을 제시하기도 했다...!)

왜 프론트엔드 개발자가 커뮤니케이션 능력이 필요하다고 강조하는지 이해가 가는 부분이었다.ㅎㅎ
![image](https://user-images.githubusercontent.com/93017923/165743145-886fb35e-9349-49b2-b119-cd029b966e3b.png)
![image](https://user-images.githubusercontent.com/93017923/165743213-95d69f4c-9672-4265-8dd7-89e2d35165d6.png)

구현해야 하는 기간이 짧게 느껴지기도 했으나, 함께 새벽까지 호흡을 맞추고, 기간 안에 최대한을 뽑아내기 위해 노력했던 경험이었다. 많이 배웠고, 많이 React.js에 익숙해질 수 있었고, 그리고 매우매우매우 재미있는 경험이었다!!!
