import {useCallback} from 'react';
import * as React from "react";

export const useScrollToTop = (ref:React.RefObject<HTMLDivElement | null>) => {
    const scrollToTop = useCallback(() => {
        if (ref.current) {
            ref.current.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }, [ref]);
    return scrollToTop;
}