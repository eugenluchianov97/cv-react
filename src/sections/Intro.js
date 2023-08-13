import translate from './../config/translate.js'

import {useContext} from "react";
import LangContext from "../contexts/langContext";

export default  () => {

    const {lang,setLanguage} = useContext(LangContext);

    return (
        <section className="o-section  t-section  ">
            <div className="o-container">
                <div className="o-section__container">

                    <header className="o-section__header  t-section__header">
                        <div className="o-content">
                            <h2 className="o-section__heading">
                                {translate[lang].intro.title}
                            </h2>
                            <div className="o-content__body  o-section__description">
                                {translate[lang].intro.about_me}
                            </div>
                        </div>
                    </header>

                    <div className="o-section__content  t-section__content  ">

                        <div className="o-content">
                            <div className="c-intro">
                                <div className="o-content__body" dangerouslySetInnerHTML={{__html: translate[lang].intro.about_me_value}}>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}