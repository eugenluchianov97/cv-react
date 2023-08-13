import config from './../config/config.js'
import translate from './../config/translate.js'
import constant from './../config/const.js'

import LangContext from "./../contexts/langContext";
import {useContext, useEffect} from "react";
export default  () => {

    const {lang,setLanguage} = useContext(LangContext);

    const style = {
        headerImg:{
            backgroundPosition:"center center",
            backgroundSize:"cover",
            backgroundImage:'url("images/me.jpg")',
            height:"200px",
            width:"200px"
        },
        ro:{
            backgroundPosition:"center center",
            backgroundSize:"cover",
            backgroundImage:'url("images/lang/ro.png")',
            height:"20px",
            width:"32px"
        },
        ru:{
            backgroundPosition:"center center",
            backgroundSize:"cover",
            backgroundImage:'url("images/lang/ru.png")',
            height:"20px",
            width:"32px"
        },
        en:{
            backgroundPosition:"center center",
            backgroundSize:"cover",
            backgroundImage:'url("images/lang/en.png")',
            height:"20px",
            width:"32px"
        }
    }
    const changeLanguage = (lang) => {
        setLanguage(lang)
        localStorage.setItem("LANG",lang)
    }
    return (
        <section className="o-section o-section--header  t-section  t-section--header">
            <div className="lang-container d-flex">
                {config.langs.map((language,idx) => {
                    return (
                        <div key={idx} onClick={() => {changeLanguage(language)}} className={"lang " + (lang === language ? "active" : "" )} style={style[language]}></div>
                    )
                })}

            </div>

            <div className="c-header">

                <div className="o-container">
                    <div className="o-section__container">

                        <header className="o-section__header  c-header__header  t-section__header">
                            <div className="c-header__inner-header">

                                <div className="c-header__avatar">
                                    <div className="a-header  c-avatar in-view" data-sr-id="2">
                                        <div className="c-avatar__img dense-image dense-ready" style={style.headerImg}></div>
                                    </div>
                                </div>

                            </div>
                        </header>

                        <div className="o-section__content  c-header__content  t-section__content">
                            <div className="c-header__inner-content">

                                <div className="c-header__top">

                                    <div className="c-header__brand">

                                        <div className="c-brand">
                                            <h1 className="c-brand__title  t-title">
                                                    <span className="c-brand__sizer">
                                                        <span className="a-header  c-brand__first-word  t-title__first-word in-view">
                                                            {translate[lang].name}
                                                        </span>
                                                        <span className="a-header  c-brand__second-word  t-title__second-word in-view">
                                                            {translate[lang].surname}
                                                        </span>
                                                    </span>
                                            </h1>
                                            <h2 className="a-header  c-brand__sub-title  t-sub-title in-view" data-sr-id="5">
                                                    <span className="c-brand__sizer">
                                                       {translate[lang].occupation}
                                                    </span>
                                            </h2>
                                        </div>

                                    </div>

                                </div>

                                <div className="c-header__contact">

                                    <hr className="a-header  c-header__contact-divider in-view" data-sr-id="9"/>

                                    <div className="o-grid">

                                        <div className="o-grid__col-md-4  o-grid__col-sm-6">
                                            <div className="a-header  o-content in-view" data-sr-id="10">
                                                <div className="o-content__body">
                                                    <h4>{translate[lang].location}</h4>
                                                    <address>
                                                        {translate[lang].location_value}

                                                    </address>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="o-grid__col-md-4  o-grid__col-sm-6">
                                            <div className="a-header  o-content in-view" data-sr-id="11">
                                                <div className="o-content__body">
                                                    <h4>{translate[lang].phone}</h4>
                                                    <p>
                                                        <a href={"tel:"+constant.phone}>{constant.phone}</a>

                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="o-grid__col-md-4  o-grid__col-sm-6">
                                            <div className="a-header  o-content in-view" data-sr-id="13">
                                                <div className="o-content__body">
                                                    <span className="t-link-container">
                                                        <h4>{translate[lang].email}</h4>
                                                        <p>
                                                           <span className="t-link-container__item--blended">
                                                               <a href={"mailto:"+constant.email}>{constant.email}</a>
                                                           </span>
                                                        </p>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}