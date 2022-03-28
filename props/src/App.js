
import './App.css';
import './Components/Style.css'
import img from './Components/img.jpg';
import Func from './Components/Func';
function App() {
  let age =23
  let handleClick =() =>{}
  
  return (
    <div className="App">
     <h1 style= {{color:"purple"}}> this is my profile</h1>
      
      
  <Func name="thouraya ounissi" 
      adress="beja"
      age = {age}
       src={img} 
      handleClick = {handleClick}/>
    </div>
  
  );
}

export default App;
