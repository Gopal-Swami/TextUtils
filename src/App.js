import "./styles.css";
import Navbar from "./Components/Navbar.jsx";
import TextForm from "./Components/TextForm.jsx";
import AboutTextUtils from "./Components/AboutTextUtils";
import { useState } from "react";


export default function App() {
  const [mode, setMode] = useState('light');

  const setDarkMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#343a40';
    }else{
      setMode('light');
      document.body.style.backgroundColor='#ffffff';
    }
  }
   return (
    <>
      <Navbar title="TextUtils" mode={mode} setDarkMode={setDarkMode}/>
      <TextForm mode={mode}/>
      {/* <AboutTextUtils/> */}
    </>
  );
}
