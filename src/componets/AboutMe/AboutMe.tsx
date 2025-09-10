import {type FC} from 'react';
import type {IAboutMe} from "./About.ts";
import A from './about.module.css'

const AboutMe: FC<IAboutMe> = ({info, img}) => {
    console.log(img)
    return (
        <div className={A.main}>
            <div className={A.aling}>
                <img src={img} alt='' style={{width: '25%',marginTop:'15%',borderRadius:'40px'}}/>
                <div className={A.block}>
                    {info.map(name => (
                        <div key={name.topic} className={A.blockAbout}>
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