import React from 'react';
import '../../css/main.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { Link } from 'react-router';

// 20220720 스크립트 전부 수정
var settings_main = {
  arrows:true,
  infinite:true,
  dots:true,
  autoplay:true,
  autoplaySpeed:2000,
  swipe:true,
  touchMove:true,
  touchThreshold:1,
  responsive: [
    {
      breakpoint: 768,
      settings : {
        arrows:true,
        infinite:true,
        dots:true,
        autoplay:true,
        autoplaySpeed:2000,
        variableWidth:true
      }
    }
  ]
};
var settings_artist = {
  arrows:true,
  infinite:true,
  slidesToShow: 8,
  dots:false,
  autoplay:true,
  autoplaySpeed:1500,
  swipe:true,
  touchMove:true,
  touchThreshold:8,
  responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 4,
        }
      }
  ]
};

function Main () {
  const [state, setState] = React.useState({
    adList: [],
    portfolioList: []
  });
  
  React.useEffect(()=>{
    axios({
        url:process.env.PUBLIC_URL+'/json/main-data.json',
        method:'GET'
    })
    .then((res)=>{
      console.log(res)
        setState({
            ...state,
            adList: res.data.adList,
            portfolioList: res.data.portfolioList
        });
    })
    .catch((err)=>{
        console.log(err);
    });
  },[]);

  return (
    <div className="container">
      <div className="feature f01">
        <div className="f01_list_wrap">
          <div className="swiper-container">
            <Slider {...settings_main} >
              {
                state.adList.map((item, idx)=>{
                  let moimgUrl = item.moimg
                  let pcimgUrl = item.pcimg
                  return (
                    <div className="swiper-slide">
                      <img
                        src={`${process.env.PUBLIC_URL}${moimgUrl}`}
                        className="mo_on"
                        alt={item.name}
                      />
                      <img
                        src={`${process.env.PUBLIC_URL}${pcimgUrl}`}
                        className="pc_on"
                        alt={item.name}
                      />
                      <Link
                        to={item.link}
                        target="_blank"
                        role="button"
                        alt={item.name} rel="noreferrer"
                      />
                    </div>
                  )
                })
              }
            </Slider>
          </div>
        </div>
        <div className="artist_list_wrap">
          <ul className="artist_list">
            <Slider {...settings_artist}>
              {
                state.portfolioList.map((item, idx)=>{
                  let imgUrl = item.img
                  return (
                    <li>
                      <Link
                        to={item.link}
                        target="_blank"
                        role="button"
                        alt={item.name}
                      >
                        <div className="obj">
                          <img src={`${process.env.PUBLIC_URL}${imgUrl}`} alt={item.name}/>
                        </div>
                        <div className="txt">{item.name}</div>
                      </Link>
                    </li>
                  )
                })
              }
            </Slider>
          </ul>
        </div>
      </div>

      <div className="feature f02">
        <ul className="cf">
          <li>
            <Link to="#">
              <div className="obj">
                <img src="../img/common/digital_shop_01_m.png" className="" alt=""/>
              </div>
              <div className="txt">
                <h3>장점 하나,책임감</h3>
                <p>
                  'complete tasks'라는 공통된 목표를 가지고<br />
                  책임감있게 업무를 수행합니다!
                </p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="#">
              <div className="obj">
                <img src="../img/common/digital_shop_02_m.png" className="" alt=""/>
              </div>
              <div className="txt">
                <h3>장점 둘,끈기</h3>
                <p>부족한 부분이 있다면 끈기와 노력으로<br />채우겠습니다!</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
     )
}
export default Main;