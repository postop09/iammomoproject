import React, { useEffect } from "react";
import styled from 'styled-components';
// import questionData from '../../database/questionData.json';
import axios from 'axios';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";
import { EffectCoverflow, Pagination } from "swiper";

export default function CardList({setIsClicked, setQuestion, topic, setTopic, url}) {
  const handleClick = () => {
    setIsClicked((prev) => !prev);
    // 서버 API 호출
    let randomPick = parseInt(Math.random() * topic.length);
    setQuestion(topic[randomPick].title);
    
    // 로컬 데이터베이스
    // let questionNum = parseInt(Math.random() * questionData.length)
    // setQuestion(questionData[questionNum].topic);
  }
  const fetchGETtopic = async() => {
    const res = await axios.get(`${url}/topic`);
    res.data.map((topic) => {
      setTopic((prev) => [...prev, topic])
    })
  }

  useEffect(() => {
    fetchGETtopic();
  }, []);
  

  return (
      <section>
      <Swiper
        effect={"coverflow"}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 500,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        onClick={handleClick}
      >
        <SwiperSlide>
          <img src={require('../../assets/img/img_card4.jpeg')} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={require('../../assets/img/img_card7.jpeg')} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={require('../../assets/img/img_card6.jpeg')} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={require('../../assets/img/img_card3.jpeg')} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={require('../../assets/img/img_card8.jpeg')} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={require('../../assets/img/img_card5.jpeg')} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={require('../../assets/img/img_card2.jpeg')} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={require('../../assets/img/img_back.jpg')} alt=''/>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

// const ListCards = styled.ul`
//   display: flex;
//   overflow-x: scroll;
//   column-gap: 2vw;
//   margin: 60px 10px 0px;
//   padding: 10px 0;
//   &::-webkit-scrollbar {
//     display: none;
//   }
// `