import * as React from "react";
import Head from "./componets/Header/Head.tsx";
import store from "./store/store.ts";
import Body from "./componets/MainBlock/Body.tsx";
import { useState} from "react";
import A from './app.module.css'
import HambyrgerMenu from "./componets/HamburgerMenu/HambyrgerMenu.tsx";
import Leangviges from "./componets/languageg/Leangviges.tsx";
import BlocksAbout from "./componets/BlocksAbout/BlocksAbout.tsx";


const App: React.FC = () => {
    const [curentLanguage, setCurentLanguage] = useState<'en' | 'ru'>("en");
    const [hideMenu, setHideMenu] = useState<boolean>(true);
    const [isOpen, setIsOpen] = useState<boolean>(false)

    // const [minSize, setMinSize] = useState<boolean>(window.innerWidth < 768);
    //
    // useEffect(() => {
    //     const handleResize = () => {
    //         const newWidth = window.innerWidth;
    //         setMinSize(newWidth < 768);
    //     };
    //     window.addEventListener('resize', handleResize);
    //     return () => window.removeEventListener('resize', handleResize);
    // }, []);




    return (
        <>
            <div className={`${A.hamburger} ${!hideMenu ? A.visible : ""}`}>
                <HambyrgerMenu {...store[curentLanguage].menu} />
                <Leangviges curentLanguage={curentLanguage} setCurentLanguage={setCurentLanguage}/>
            </div>
            <div className={A.head}>
                <div className={A.blockVisit}>
                    <div className={`${A.menu} ${isOpen ? A.open : ''}`} onClick={() => {
                        setHideMenu(!hideMenu)
                        setIsOpen(!isOpen)
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
            </div>
            <div>
            </div>
        </>
    )
}

export default App
