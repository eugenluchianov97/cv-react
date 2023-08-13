
import translate from './../config/translate.js'

import {useContext} from "react";
import LangContext from "../contexts/langContext";


export default () => {

    const {lang,setLanguage} = useContext(LangContext);

    const expirience = [
        {
            dateStart:'01.06.2023' ,
            dateEnd:translate[lang].experience.present ,
            companyName:'Customagic.md',
            position:translate[lang].experience.fullDev,
            location:translate[lang].location_value,
            shortDescription:translate[lang].experience.customagic
        },
        {
            dateStart:'01.01.2023' ,
            dateEnd:'31.05.2023' ,
            companyName:'RTS.md',
            position:translate[lang].experience.laravelDev,
            location:translate[lang].location_value,
            shortDescription:translate[lang].experience.rts
        },
        {
            dateStart:'01.07.2022' ,
            dateEnd:'31.12.2023' ,
            companyName:'Moldtelecom.md',
            position:translate[lang].experience.laravelDev,
            location:translate[lang].location_value,
            shortDescription:translate[lang].experience.moldtelecom
        },
        {
            dateStart:translate[lang].experience.december + ' 2020' ,
            dateEnd:translate[lang].experience.june + ' 2022',
            companyName:'BPro.md',
            position:translate[lang].experience.webDev,
            location:translate[lang].location_value,
            shortDescription:translate[lang].experience.bpro
        },
        {
            dateStart:translate[lang].experience.february + ' 2019' ,
            dateEnd:translate[lang].experience.december + ' 2020' ,
            companyName:'ProPlus.md',
            position:translate[lang].experience.frontendDev,
            location:translate[lang].location_value,
            shortDescription:translate[lang].experience.proplus
        }

    ];

    return (
        <section className="o-section  t-section  ">

            <div className="o-container">
                <div className="o-section__container">

                    <header className="o-section__header  t-section__header">
                        <div className="o-content">
                            <h2 className="o-section__heading">
                                {translate[lang].experience.title}
                            </h2>
                            <div className="o-content__body  o-section__description">
                                {translate[lang].experience.subtitle}

                            </div>
                        </div>
                    </header>

                    <div className="o-section__content  t-section__content  u-pb-0">

                        <div className="a-experience-timeline  c-timeline  t-border-color in-view">
                            {expirience.map((item,idx) =>{
                                return (
                                    <div className="c-timeline__item" key={idx}>
                                        <div className="c-timeline__point  t-timeline__point  t-primary-bg"></div>
                                        <div className="o-content">
                                            <div className="o-grid">
                                                <div className="o-grid__col-md-5">
                                                    <div className="c-work__timeframe">
                                                        {item.dateStart} - {item.dateEnd}
                                                    </div>
                                                    <h3 className="c-work__heading">
                                                        {item.companyName}
                                                    </h3>
                                                    <h4 className="c-work__title">
                                                        {item.position}
                                                    </h4>
                                                    <div className="c-work__location">
                                                        {item.location}
                                                    </div>
                                                </div>
                                                <div className="o-grid__col-md-7" >
                                                       <p dangerouslySetInnerHTML={{__html:item.shortDescription}}>

                                                       </p>
                                                </div>
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