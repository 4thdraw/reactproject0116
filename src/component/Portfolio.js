import React, { useState } from 'react';
import Portfolioin from './Portfolioin';


function Portfolio(props) {
    const [ worknm, worknmupdate ] = useState(['리액트','reactid']); 
    const btnupdate = (e) => {
        
        const newworknm =  e.target.getAttribute('datasrc').split(','); 
        //e.target.getAttribute('datasrc') -> array 데이터로 인식 못함 / '리액트,reactid'
        //,를 기준으로 정렬로 데이터타입변환하는 메서드 split
        //dataset 메서드     
        //아쉽다!!   data-옵션      
        worknmupdate(newworknm);

    }
    return (
        <div>
         <div className="d-flex justify-content-center">
            <button onClick={ btnupdate } datasrc={['리액트','reactid']}>PWA 리액트</button>
            <button onClick={ btnupdate } datasrc={['EC 쇼핑몰','ecid']}>EC 쇼핑몰</button>
            <button onClick={ btnupdate } datasrc={['CMS 그누보드','cmsid']}>CMS 그누보드</button>
            <button onClick={ btnupdate } datasrc={['Design 피그마','figmaid']}>Design 피그마</button>
         </div>
         <Portfolioin dbobjkey={worknm[0]} portfolioId={worknm[1]}></Portfolioin>            
        </div>
    );
}

export default Portfolio;