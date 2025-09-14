import type {IProgects} from "./Progect.ts";
import {type FC, useState} from "react";
import P from './progres.module.css'

const Progects: FC<IProgects> = ({topic, progects, width}) => {

    const [isActiv,setActiv] = useState<number | null>(null)

    const onHendler = (id:number) => {
        setActiv(prevId => prevId === id ? null : id)
    }

    return (
        <div className={P.main}>
            <div className={P.blockTopic}>
                <h2 className={P.topic}>{topic}</h2>
            </div>
            <div className={P.block}>
                {progects.map(info => (
                    <div key={info.id} className={P.blockInfo} onClick={() => onHendler(info.id)}>
                        <h2>{info.name}</h2>
                        <img className={P.images} src={info.images} style={{width: `${width}px`}} alt=''/>

                        <div className={P.modal}>
                            {isActiv === info.id && (
                                <div>
                                    {info.screenshots.map(url => (
                                        <div className={P.i}>
                                            <img className={P.imageModal} src={url}  alt=''/>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                    </div>
                ))}
            </div>



        </div>
    );
};

export default Progects;