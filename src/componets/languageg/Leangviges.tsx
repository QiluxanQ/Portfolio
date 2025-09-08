import type {FC} from "react";
import A from './../../app.module.css'
import type {ILanguag} from "./Languag.ts";


const Leangviges:FC<ILanguag> = ({curentLanguage,setCurentLanguage}) => {

    const handlerLangvige = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCurentLanguage(event.target.value as "en" | "ru")
    }
    return (
        <div>
            <select className={A.select} value={curentLanguage} onChange={handlerLangvige}>
                <option value="en">En</option>
                <option value="ru">Ru</option>
            </select>
        </div>
    );
};

export default Leangviges;