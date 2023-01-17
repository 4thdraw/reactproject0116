import React, { useState } from 'react';
import navicss from '../css/navi.module.css';
import { Link } from "react-router-dom";
import Scrollspy from "react-scrollspy";

function Navi(props) {
    const [ naivText, updateText ] = useState(true);
    // json -> map
    const naviDBfile = {
         naviDATA : [
            {
                d1 : {
                    naviText : "취준생! 인사드립니다.",
                    type : "",
                    href : "/about",
                    cls :  ["px-3", "font141618"]
                }
                
            },
            {
                d1 : {
                    naviText : "개발성장과정",
                    type : "a",
                    href : "#precss",
                    cls :  ["px-3", "font141618"]
                }
                
            },
            {
                d1 : {
                    naviText : "결과물",
                    type : "a",
                    href : "#portfolio",
                    cls :  ["px-3", "font141618"]
                }
                
            },
            {
                d1 : {
                    naviText : "연락주세요!",
                    type : "a",
                    href : "#contact",
                    cls :  ["px-3", "font141618"]
                }
                
            }
         ],
         sns : []
    }

    return (
        <div className={`${navicss.hd}  border-bottom  py-2  fixed-top`}>
            <header id="hd" className='container-lg d-lg-flex flex-wrap justify-content-between align-items-center'>
                <h1>
                    <Link to="/">svg</Link>
                </h1>
                <Scrollspy id="gnb" className='d-flex'>                
                    {
                        naviDBfile.naviDATA.map((item, idx)=>{
                            const myclass = item.d1.cls.join(" ");
                        //     if(item.d1.type){
                        //         return (
                        //                 <li key={ 'navi'+idx } className={myclass}>
                        //                 <a href={item.d1.href} >
                        //                 {item.d1.naviText}
                        //                 </a>
                        //                 </li>
                        //                 )
                        //    }else{
                        //         return (
                        //             <li key={ 'navi'+idx } className={myclass}>
                        //             <Link to={item.d1.href} >
                        //             {item.d1.naviText}
                        //             </Link>
                        //             </li>
                        //         )
                        //    }

                           return (
                            item.d1.type == !"a" ?
                            (<li key={'navi'+idx}><Link to={item.d1.href} className={myclass}>{item.d1.naviText}</Link></li>) : 
                            (<li key={'navi'+idx}><a href={item.d1.href} className={myclass}>{item.d1.naviText}</a></li>)
                           )
                            
                        })
                    }
                </Scrollspy>
                <ul id="sns" className='d-flex'>
                    <li><a href="" target="_blank">깃</a></li>
                    <li><a href="" target="_blank">노션</a></li>
                    <li><a href="" target="_blank">기획</a></li>
                </ul>
            </header>
            
        </div>
    );
}

export default Navi;