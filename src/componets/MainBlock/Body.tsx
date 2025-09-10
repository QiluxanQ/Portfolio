import {type FC} from "react";
import type {ISkill} from "./MainBlock.ts";
import B from './main.module.css'


const Body:FC<ISkill>  = ({technologies,title,width}) => {

    return (
        <div className={B.main} >
            <div className={B.blockTechnologies}>
                <h1> {title}</h1>
                <div className={B.aling}>
                    {technologies.map((name,index) => (
                        <div key={index} className={B.bigHover} >
                            <p className={B.textName}>{name.name}</p>
                            <img src={name.image} width={width} style={{padding:'10px'} } alt=''/>
                        </div>
                    ))}
                </div>
                <div className={B.imgBlock}>

                </div>

            </div>
        </div>
    );
};

export default Body;