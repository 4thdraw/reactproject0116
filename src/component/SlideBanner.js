import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Link } from 'react-router-dom';
import { Pagination ,  Autoplay } from 'swiper';

function SlideBanner(props) {
    let swiperdb = [
        {   title : ["큰글자","작은설명"],
            cls : ["boot","bootbg"],
             href : "부트스트랩링크값",
             bg :"red"
        },
        {   title : ["단기제작의 힘!! 부트스트랩","작은설명"],
            cls : ["react","reactbg"],
            href : "리액트포폴링크값",
            bg:"green"
        },
        {   title : ["h2태그로 처리","p태그로 처리해줄것"],
            cls : ["ec","mallbg"],
            href : "쇼핑몰링크값",
            bg:"yellow"
        },         
        {   title :["자랑하기","작은설명들"],
            cls : ["ec","mallbg"],
            href : "쇼핑몰링크값",
            bg:"orange"
        },         
        {   title :["자랑하기","작은설명들"],
            cls : ["ec","mallbg"],
            href : "쇼핑몰링크값" ,
            bg :"black"
        }
        ,
        {   title :["자랑하기","작은설명들"],
            cls : ["ec","mallbg"],
            href : "쇼핑몰링크값",
            bg:"white"
        }
    ]
    return (
        <Swiper

        modules={[Pagination, Autoplay]}       
        spaceBetween={0}
        slidesPerView={1.5}
        centeredSlides
        loop
        autoplay = {{
            delay: 3000,
            pauseOnMouseEnter :true
           }
        }

     
      
       >
        {
            swiperdb.map((item, idx) => {
                const myclass = item.cls.join("  ");
                   return (
                   <SwiperSlide className={myclass} style={{height : 600, backgroundColor : item.bg}} >
                    <Link to={item.href} className='d-flex justify-content-center align-items-center  flex-column h-100' >
                        <div>
                            <h2>{item.title[0]}</h2>
                            <p>{item.title[1]}</p>
                        </div>
                    </Link>                   
                    </SwiperSlide>
                   )
            })
          
        }
        
     
       </Swiper>
    );
}

export default SlideBanner;