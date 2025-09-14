import  {type FC} from 'react';
import type {ISocial} from "./Social.ts";
import S from "./social.module.css";

const Social:FC<ISocial> = ({info,width}) => {
    return (
        <div className={S.main}>

            <p className={S.line}></p>
            <div className={S.block}  >

                {info.map(name => (
                    <div key={name.logo}  >
                        <a href={name.links} target='_blank' > <img src={name.logo} width={width} alt=''/></a>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Social