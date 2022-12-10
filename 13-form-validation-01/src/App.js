
import './App.css';
import Img from './img/photo.svg';
import { Signup } from './components/Signup';

function App() {
  return (
    <div className="container vw-100 vh-100 d-flex align-items-center  ">
      <div className="row w-100 d-flex justify-content-between ">
        <div className="col-md-5">
          <Signup />
        </div>
        <div className="d-none d-md-block col-md-7 d-md-flex justify-content-center">
          <img className="w-50" src={Img} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default App;