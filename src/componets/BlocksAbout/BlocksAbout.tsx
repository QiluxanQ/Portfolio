import {type FC} from 'react';
import type {IBlock} from "./Blocks.ts";
import B from "./blockAbout.module.css";


const BlocksAbout: FC<IBlock> = ({description, width, height}) => {



    return (
        <div className={B.main}>
            <div className={B.block}>
                {description.map(item => (
                    <div className={B.rootate} key={item.name}>
                        <div className={B.front}  style={{
                            backgroundImage: `url(${item.image})`,
                            width: `${width}px`,
                            height: `${height}px`,
                            backgroundSize: 'contain',
                            backgroundRepeat:'no-repeat',

                        }}></div>
                        <div className={B.back}>
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}



            </div>
            <div style={{display:'flex',justifyContent:'center'}}>
                <img  src="https://github-readme-stats.vercel.app/api/top-langs/?username=QiluxanQ&hide=html&layout=compact&theme=dark&langs_count=6" alt='stats'/>
            </div>

        </div>
    );
};

export default BlocksAbout;