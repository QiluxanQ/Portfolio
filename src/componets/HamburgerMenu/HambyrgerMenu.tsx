import type {FC} from "react";
import type {IMenu} from "./Menu.ts";
import H from './hamburger.module.css'


const HambyrgerMenu:FC<IMenu> = ({title,about,info}) => {
    return (
        <div className={H.menu} >
             <h2>  {title}</h2>
            <h2> {about}</h2>
            <h2>{info}</h2>

        </div>
    );
};



export default HambyrgerMenu;