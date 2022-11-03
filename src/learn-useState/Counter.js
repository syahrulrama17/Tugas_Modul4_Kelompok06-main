import React, { useState, useContext } from "react";
import logo from "../logo.svg";
import "./Counter.css";
import  {prediction}  from "../learn-useContext/index.js";



const PredictionContext = React.createContext(prediction.syahrul);

export default function Counter() {
    const [showImage, setShowImage] = useState(true);
    const [count, setCount] = useState(0);
    const [teks, setTeks] = useState('');  
    //buat useContext
    const [prediksi, setPrediksi] = useState(prediction.syahrul);
    
    
    


    const countUp = () => {
        setCount(count + 1);
        changePrediction();
    };  
    const countDown = () => {
        setCount(count - 1);
        changePrediction();
        
    };
    const hideImage = () => {
        setShowImage(!showImage);
    };

    const handleChange = event => {
        setTeks(event.target.value);
        
    }

    const changePrediction = () => {
        if (count %4 === 3 ){
            setPrediksi(prediction.ishaq);
            console.log("ishaq");
        }

        if (count %4 === 2 ){
            setPrediksi(prediction.seto);
            console.log("seto");
        }

        if (count %4 === 1 ){
            setPrediksi(prediction.farras);
            console.log("farras");
        }

        if (count %4 === 0 ){
            setPrediksi(prediction.syahrul);
            console.log("syahrul");
        }

    }

    


    

    

    return (
        <div className="Main">
            <p className="Text">Counter with useState</p>
            <p>KELOMPOK 06</p>

            
            <form>
                
                    
                    <input type="text" name="name" border="red" placeholder="Masukkan Teks" onChange={handleChange} value={teks}/>
                
            
            </form>

            <h2>{teks}</h2>

            <div className="ViewImage">
                <div className="ViewImage1">
                    <img className="App-logo"
                        style={{
                            display: showImage === true ? "flex" :
                                "none"
                        }}
                        src={logo}
                        alt="logo" />
                </div>
                <button className="Button" onClick={hideImage}>
                    {showImage !== true ? "show" : "hide"}
                </button>
            </div>
            <p className="Text">{count}</p>

        <PredictionContext.Provider value={{ prediksi, changePrediction }}>
            <div className="predict">

<p>Nama-Nama anggota kelompok 06</p>
                
                <PredictedCard />

                

            </div>
        </PredictionContext.Provider>


            <div className="ViewButton">
                <div className="ViewButton2">
                    <button className="Button" onClick={countUp}>
                        Up
                    </button>
                </div>
                <div className="ViewButton1">
                    <button className="Button" onClick={countDown}>
                        Down
                    </button>
                </div>
            </div>

            

        </div>
    );
}



function PredictedCard() {
    const { prediksi, changePrediction } = useContext(PredictionContext);
    return (
        <div style={{border: `2px solid ${prediksi.color}`}}>
            <h2 style={{textAlign:"center", color: prediksi.color}}>{prediksi.lambang}</h2>
        </div>

    )

}