import {useEffect} from "react";
import A from "../../app.module.css";

export const useClickOutside = (isOpen:boolean,onClose: () => void,menuClass:string) => {
    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            const isBurgerButton = (event.target as Element).closest(`.${A.menu}`);
            if (isOpen && !isBurgerButton) {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener('click', handleClick);
        }
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [isOpen, onClose, menuClass]);
}