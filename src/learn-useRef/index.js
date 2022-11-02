import { useState, useEffect, useRef } from "react";
import "./index.css";


export default function Index(){
    const [inputValue, setInputValue] = useState("");
    const [warna, setWarna] =useState('black');
    const [message, setMessage]=useState('Silahkan diklik');

    
    
const count = useRef(0);
  

  const ubahWarna = () => {
    if (warna==="black") {
        setWarna('white');
    }
    else {
        setWarna('black');
    }
};
   


  useEffect(() => {
    count.current = count.current + 1;
  });

  useEffect(() => {
    if (count.current<5){
        setMessage("1")
    }

    else if (count.current<10){
        setMessage("2")
    }
    else if (count.current<15){
        setMessage("3")
    }

    else {
        setMessage("Go")
    }

  });
 
   

  return (
    <div className="Main">

      

        
      <button 
      style={{height:'100px', width:'120px', backgroundColor:`${warna}`, color:"red"}} onClick={ubahWarna}>Klik</button>
      
      <h1>{message}</h1>
     
    </div>
  );
}

    
    
