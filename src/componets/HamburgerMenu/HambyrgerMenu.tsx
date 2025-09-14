import type {FC} from "react";
import type {IMenu} from "./Menu.ts";
import H from './hamburger.module.css'


const   HambyrgerMenu:FC<IMenu> = ({menu,onclose}) => {

    const handlerClick = (sectionId:string) => {
        const element= document.getElementById(sectionId)
        if (element){

            element.scrollIntoView({
                behavior:'smooth',
                block:'start',
                inline:'nearest'
            })
        }


        if (onclose) {
            onclose()
        }
    }

    return (
        <div className={H.menu} >
            <nav>
                <a href='#home' onClick={(e) => {
                    e.preventDefault();
                    handlerClick('home')
                }}>{menu.title}</a>

                <a href='#about' onClick={(e) => {
                    e.preventDefault();
                    handlerClick('about')
                }}>{menu.about}</a>

                <a href='#progects' onClick={(e) => {
                    e.preventDefault();handlerClick('progects')
                }}>{menu.info}</a>

                <a href='#social' onClick={(e) => {
                    e.preventDefault();handlerClick('social')
                }}>{menu.social}</a>
            </nav>



        </div>
    );
};



export default HambyrgerMenu;