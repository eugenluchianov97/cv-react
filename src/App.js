
import './App.css';

import Header from "./sections/Header";
import Intro from "./sections/Intro";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Footer from "./sections/Footer";
import Hobby from "./sections/Hobby";
import {useEffect,useState} from "react";

import config from "./config/config.js"

import LangContext from "./contexts/langContext";




function App() {

    const [lang, setLang] = useState(localStorage.getItem("LANG"));
    const setLanguage = (lang) => {
        setLang(lang)
    }
    useEffect(() => {
        if(!lang && config.langs.includes(lang)) {
            localStorage.setItem("LANG",config.lang)
        }
    })


  return (
      <LangContext.Provider value={{lang,setLanguage}}>
          <div className="c-main-container  js-main-container d-block">
              <Header/>
              <Intro/>
              <Experience/>
              <Skills/>

              <Hobby/>
              {/*<Footer/>*/}
              {/*PROFILES*/}
              {/*FOOTER*/}

          </div>
      </LangContext.Provider>


);
}

export default App;
