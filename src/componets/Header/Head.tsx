import type {FC} from "react";
import type {IHeader} from "./Header.ts";
import H from "./Head.module.css";

const Head:FC<IHeader> = ({title,topic,smile}) => {

    return (
       <>
           <div className={H.mainBlock}>
               <div className={H.title}>
                   <div className={H.block}>
                       <h2> {title} </h2>
                       <h2 className={H.welcome}>{smile}</h2>
                   </div>
               </div>
               <div className={H.blockTopic}>
                   <h2 className={H.topic}>
                       {topic.map(name => (
                       <div key={name.info}>
                           <h4>{name.info}</h4>
                       </div>
                   ))}</h2>
               </div>

           </div>
       </>
    );
};

export default Head;