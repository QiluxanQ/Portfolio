import type {IProgects} from "./Progect.ts";
import type {FC} from "react";
import P from './progres.module.css'

const Progects: FC<IProgects> = ({topic, progects, width}) => {
    return (
        <div className={P.main}>
            <div className={P.blockTopic}>
                <h2 className={P.topic}>{topic}</h2>
            </div>
            <div className={P.block}>
                {progects.map(info => (
                    <div className={P.blockInfo}>
                        <h2>{info.name}</h2>
                        <img src={info.images} style={{width: `${width}px`}} alt=''/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Progects;