import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './component/Navi';
import SlideBanner from './component/SlideBanner'
import Process from './component/Process';
import Portfolio from './component/Portfolio';
import './App.css';



function App() {
  return (
    <div>
      <Navi></Navi>
      <SlideBanner></SlideBanner>      

      <Process id="precss" title="개발자연혁"></Process>            
      <Portfolio dbobjkey="react"></Portfolio>
     
      <section style={{ height: '100vh'}} id="contact" className='border-top'></section>
    </div>
  );
}

export default App;
