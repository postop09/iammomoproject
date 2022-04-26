import React, { useEffect } from "react";
import axios from 'axios';
// import questionData from '../../database/questionData.json';

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
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        onClick={handleClick}
      >
        {/* <SwiperSlide>
          <img src={require('../../assets/img/img_card4.jpeg')} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={require('../../assets/img/img_card7.jpeg')} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={require('../../assets/img/img_card6.jpeg')} alt=''/>
        </SwiperSlide> */}
        <SwiperSlide>
        <img src={require('../../assets/img/img_back.jpg')} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../../assets/img/img_back.jpg')} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../../assets/img/img_back.jpg')} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('../../assets/img/img_back.jpg')} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={require('../../assets/img/img_back.jpg')} alt=''/>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}