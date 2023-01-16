import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './component/Navi';
import Process from './component/Process';
import './App.css';

function App() {
  return (
    <div>
      <Navi></Navi>
      <section style={{ height: '100vh'}} id=""></section>
      <Process id="precss" title="개발자연혁"></Process>
      <section style={{ height: '100vh'}} id="portfolio" className='border-top bg-light'></section>
      <section style={{ height: '100vh'}} id="contact" className='border-top'></section>
    </div>
  );
}

export default App;
