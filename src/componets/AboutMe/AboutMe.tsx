import {type FC} from 'react';
import type {IAboutMe} from "./About.ts";
import A from './about.module.css'
import {useInView} from "react-intersection-observer";

const AboutMe: FC<IAboutMe> = ({info, img,head}) => {

    const [ref,inView]  = useInView({
        triggerOnce:true,
        threshold:0.1
    })

    return (
        <div ref={ref} className={`${A.main} ${inView ? A.visible : ''}`}>
            <div className={A.aling}>
                {head}
                <img  className={`${A.image} ${inView ? A.imageVisible : ''}`} src={img} alt='' style={{width: '25%',marginTop:'15%',borderRadius:'40px'}}/>
                <div className={A.block}>
                    {info.map((name,index) => (
                        <div key={name.topic} className={`${A.blockAbout} ${inView ? A.itemVisible : ''}`} style={{ transitionDelay: `${index * 0.1}s` }}>
                            <div className={A.topic}>
                                <h2>{name.topic}</h2>
                                <p>{name.date}</p>
                            </div>
                            <p>{name.description}</p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default AboutMe;