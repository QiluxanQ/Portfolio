import type {FC} from "react";
import type {IHeader} from "./Header.ts";
import H from "./Head.module.css";

const Head:FC<IHeader> = ({title,topic}) => {

    return (
       <>
           <div className={H.mainBlock}>
               <img src="https://github-readme-stats.vercel.app/api/top-langs?username=QiluxanQ&repo=React&show_icons=true&theme=default&hide_rank=false"/>
               <h2 >{title}</h2>
               <h2>{topic}</h2>
           </div>
       </>
    );
};

export default Head;