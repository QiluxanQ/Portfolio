import * as React from "react";
import Head from "./componets/Header/Head.tsx";
import store from "./store/store.ts";
import Body from "./componets/MainBlock/Body.tsx";
import {useRef, useState} from "react";
import A from './app.module.css'
import HambyrgerMenu from "./componets/HamburgerMenu/HambyrgerMenu.tsx";
import Leangviges from "./componets/languageg/Leangviges.tsx";
import BlocksAbout from "./componets/BlocksAbout/BlocksAbout.tsx";
import AboutMe from "./componets/AboutMe/AboutMe.tsx";
import Progects from "./componets/Progects/Progects.tsx";
import Social from "./componets/Socials/Social.tsx";
import arrowUp from './assets/arrowUp.png'

import {useMenu} from "./componets/hoocks/useMenu.ts";
import {useClickOutside} from "./componets/hoocks/useClickOutside.ts";
import {useScrollToTop} from "./componets/hoocks/useScrollToTop.ts";

const App: React.FC = () => {
    const [curentLanguage, setCurentLanguage] = useState<'en' | 'ru'>("en");
    const appRef = useRef<HTMLDivElement>(null);

    const {isOpen, hideMenu, closeMenu,toggleMenu} = useMenu();
    const scrollToTop = useScrollToTop(appRef)
    useClickOutside(isOpen,closeMenu,`${A.menu}`)

    return (
        <div className={A.App} ref={appRef}>
            <div className={`${A.hamburger} ${!hideMenu ? A.visible : ""}`}>
                <HambyrgerMenu menu={store[curentLanguage].menu} onclose={closeMenu} />
            </div>
            <div className={A.head}>
                <Leangviges curentLanguage={curentLanguage} setCurentLanguage={setCurentLanguage}/>
                <div className={A.blockVisit}>
                    <div className={`${A.menu} ${isOpen ? A.open : ''}`} onClick={toggleMenu}>
                        <span className={A.menuLine}/>
                    </div>
                </div>
                <section id='home' className={A.section}>
                    <Body {...store[curentLanguage].skills.blockSkils} />
                </section>
            </div>

            <div className={A.body}>
                <section id='about'>
                    <Head topic={store[curentLanguage].header.topic}
                          title={store[curentLanguage].header.title}
                          smile={store[curentLanguage].header.smile}
                    />
                    <BlocksAbout description={store[curentLanguage].blocks.technologiesBlock}
                                 width={store[curentLanguage].blocks.width}
                                 height={store[curentLanguage].blocks.height}/>

                    <AboutMe info={store[curentLanguage].aboutMe} img={store[curentLanguage].aboutMePhoto.img}/>
                </section>
                <img className={A.arrow}
                    src={arrowUp}
                    alt='Наверх'
                    style={{
                        width: '40px',
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        cursor: 'pointer',
                        transition: 'opacity 0.3s',
                        opacity: 0.7
                    }}
                    onClick={scrollToTop}
                />
                <section id='progects'>
                    <Progects topic={store[curentLanguage].progects.topic.topic}
                              progects={store[curentLanguage].progects.blockProgects}
                              width={store[curentLanguage].progects.width}/>
                </section>
                    <section id='social'>
                        <Social info={store[curentLanguage].socialc.media} width={store[curentLanguage].socialc.width}/>
                    </section>
            </div>

            <div>
            </div>
        </div>
    )
}

export default App
