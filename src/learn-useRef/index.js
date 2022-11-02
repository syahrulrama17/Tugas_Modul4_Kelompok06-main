import { useState, useEffect, useRef } from "react";
import "./index.css";


export default function Index(){
    const [inputValue, setInputValue] = useState("");
    const [warna, setWarna] =useState('navy');
    const [message, setMessage]=useState('Silahkan diklik');

    
    
