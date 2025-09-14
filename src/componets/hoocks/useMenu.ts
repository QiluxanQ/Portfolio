import {useState, useEffect, useCallback} from "react";
export const useMenu = () => {
    const [hideMenu, setHideMenu] = useState<boolean>(true);
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const closeMenu = useCallback(() => {
        setHideMenu(true);
        setIsOpen(false);
    }, []);


    const toggleMenu = useCallback(() => {
        setHideMenu(prev => !prev);
        setIsOpen(prev => !prev);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "unset";
        }
        return () => { document.body.style.overflowY = "unset"; };
    }, [isOpen]);

    return {
        isOpen,
        closeMenu,
        hideMenu,
        toggleMenu,
    };

}