import React, {useState} from "react";
import butter from './butterflygif.gif';


const App = ()=>{

  const [position,setPosition]=useState({x:300,y:300});

  function handleMouseOver(){
    const newX= Math.random(1,10)*(window.innerWidth-50)
    const newY= Math.random(1,10)*(window.innerHeight-50)
    setPosition({x : newX,y : newY})
  }
  
const boxStyle={
  backgroundImage:`url(${butter})`,
  width:'250px',
  height:'250px',
  backgroundSize:'cover',
  position: 'absolute',
  left:`${position.x}px`,
  top:`${position.y}px`,
  transition: "all 1s"

};
return(
  <div style={{width:'100vw', height:'100vh'}}>
      <div
        style={boxStyle}
      
        onMouseOver={handleMouseOver}>

      </div>
    
    </div>
)
}
export default App;