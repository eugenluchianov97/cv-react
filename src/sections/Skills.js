

import {useContext, useEffect, useRef} from "react";
import LangContext from "../contexts/langContext";
import translate from "../config/translate";

export default  () => {

    const skills = [
        {
            title:"PHP (Laravel + Native)",
            percent:80
        },
        {
            title:"Java Script (Native, JQuery)",
            percent:80
        },
        {
            title:"React.js",
            percent:70
        },
        {
            title:"Vue.js",
            percent:70
        },
        {
            title:"Node.js (Express)",
            percent:50
        },
        {
            title:"Databases (MySQL,SQLite,Mongo)",
            percent:70
        },
        {
            title:"HTML (Bootstrap)",
            percent:70
        },
        {
            title:"CSS (Bootstrap, Tailwind)",
            percent:70
        }
    ];

    const refSection = useRef();

    useEffect(()=> {
        // document.onscroll = function(){
        //     console.log(refSection.current.getBoundingClientRect());
        //     console.log(window.innerHeight)
        //
        // }
    })

    const {lang,setLanguage} = useContext(LangContext);
    return(
        <section className="o-section  t-section  " ref={refSection}>

            <div className="o-section__header-bg  t-section__header"></div>
            <div className="o-section__content-bg  t-section__content"></div>

            <div className="o-container">
                <div className="o-section__container">

                    <header className="o-section__header  t-section__header">
                        <div className="o-content">
                            <h2 className="o-section__heading">
                                {translate[lang].skills.title}
                            </h2>
                            <div className="o-content__body  o-section__description">
                                {translate[lang].skills.subtitle}
                            </div>
                        </div>
                    </header>

                    <div className="o-section__content  t-section__content  ">
                        <div className="o-grid">
                            {skills.map((item,key) => {
                                return(
                                    <div key={key} className="o-grid__col-sm-6">
                                        <div className="o-content">
                                            <div className="o-media  o-media--block in-view">
                                                <div className="o-media__figure">
                                                    <div className="c-number  t-primary-color">
                                                        {item.percent}<small>%</small>
                                                    </div>
                                                </div>
                                                <div className="o-media__body">
                                                    <h3>{item.title}</h3>
                                                </div>
                                            </div>
                                            <div className="c-progress-bar  o-content__body  t-border-color-bg  u-mt-text">
                                                <div className="a-progress-bar  c-progress-bar__filler  t-primary-bg in-view"  style={{width:item.percent+'%'}}></div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}



                        </div>

                    </div>

                </div>
            </div>

        </section>
    )
}