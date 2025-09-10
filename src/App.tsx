import * as React from "react";
import Head from "./componets/Header/Head.tsx";
import store from "./store/store.ts";
import Body from "./componets/MainBlock/Body.tsx";
import {useEffect, useState} from "react";
import A from './app.module.css'
import HambyrgerMenu from "./componets/HamburgerMenu/HambyrgerMenu.tsx";
import Leangviges from "./componets/languageg/Leangviges.tsx";
import BlocksAbout from "./componets/BlocksAbout/BlocksAbout.tsx";
import AboutMe from "./componets/AboutMe/AboutMe.tsx";
import Progects from "./componets/Progects/Progects.tsx";


const App: React.FC = () => {
    const [curentLanguage, setCurentLanguage] = useState<'en' | 'ru'>("en");
    const [hideMenu, setHideMenu] = useState<boolean>(true);
    const [isOpen, setIsOpen] = useState<boolean>(false)

    useEffect(() => {
        if (isOpen){
            document.body.style.overflowY = "hidden";
        }else{
            document.body.style.overflowY = "unset";
        }
        return () => {
            document.body.style.overflowY = "unset";
        }
    },[isOpen]);

    return (
        <>
            <div className={`${A.hamburger} ${!hideMenu ? A.visible : ""}`}>
                <HambyrgerMenu {...store[curentLanguage].menu} />
                <Leangviges curentLanguage={curentLanguage} setCurentLanguage={setCurentLanguage}/>
            </div>
            <div className={A.head}>
                <div className={A.blockVisit}>
                    <div className={`${A.menu} ${isOpen ? A.open : ''}`} onClick={() => {
                        if (isOpen === false ){
                            setHideMenu(!hideMenu)
                            setIsOpen(!isOpen)
                        }else {
                            setHideMenu(!hideMenu)
                            setIsOpen(!isOpen)
                        }

                    }}>
                        <span className={A.menuLine}/>
                    </div>
                </div>
                <Body {...store[curentLanguage].skills.blockSkils} />
            </div>
            <div className={A.body}>
                <Head topic={store[curentLanguage].header.topic}
                      title={store[curentLanguage].header.title}
                        smile={store[curentLanguage].header.smile}
                />
                <BlocksAbout description={store[curentLanguage].blocks.technologiesBlock}
                             width={store[curentLanguage].blocks.width}
                             height={store[curentLanguage].blocks.height} />
                <AboutMe info={store[curentLanguage].aboutMe} img={store[curentLanguage].aboutMePhoto.img}/>

                <Progects topic={store[curentLanguage].progects.topic.topic} progects={store[curentLanguage].progects.blockProgects} width={store[curentLanguage].progects.width} />
            </div>

            <div>
            </div>
        </>
    )
}

export default App
