import React, {useState} from 'react';

function Contact(props) {

        //폼 데이터 수집변수
        const [values, setValues] = useState({
          email: "",
          password: "",
          userName: '',
          userGender: ''

        })
        //버튼상태변수선언
        const [ statue, updateStatue] = useState(false);
      
        //input 타이핑칠때마다 추가적으로 값 변경
        //input name과 폼테이더 수집변수가 동일하게 했으므로 아래의 식으로 한번에 처리
        //잘만들어진 함수 이전값에 변화값이 적용되도록 처리 중요!!!
        const handleChange = e => {
          setValues({
            ...values,
            [e.target.name]: e.target.value,
          })
        }

        const sendform = async (e) => {
            //폼태그는 기본적으로 새로고침한다.
            //폼태그가 중복 실행되지않도록 막아야한다.
            updateStatue(true); //버튼막아
            e = e || window.event;
            e.preventDefault(); //싱글페이지니깐 새로고침하지마
            await new Promise( (r) => setTimeout(
                function(){
                alert(JSON.stringify(values, null, 10))
                }
                , 1000))
              
           //세번째인자는 공백개수     
            updateStatue(false); // 다시버튼기능돌려줘
        }
      
       
      
    return (
        <div id="contact" className='col-6 mx-auto py-5'>
                    <form onSubmit={sendform}>
                        <ul>
                            <li className='py-3 d-flex'>
                                <strong className='d-block col-3'>이름</strong>
                                <input
                                    placeholder='이름을 입력하세요'
                                    type="text"
                                    name="userName"
                                    value={values.userName}
                                    onChange={handleChange}
                                    />   
                            </li>
                            
                            <li className='py-3 d-flex'>
                                <strong className='d-block col-3'>이메일</strong>
                                <input
                                type="text"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                />
                            </li>
                            <li className='py-3  d-flex'>
                                <strong className='col-3 d-block'>패스워드</strong>
                                <input
                                        type="password"
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange}
                                />
                            </li>
                            <li className='py-3 d-flex'>
                                <strong className='d-block col-3'>성별</strong>

                            </li>
                        </ul>
                        <button type="submit" disabled={statue} className='d-block w-100 bg-dark text-white my-3'>로그인</button>
                    </form>  
        </div>
    );
}

export default Contact;