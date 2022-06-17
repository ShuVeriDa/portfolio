import style from './MyWorks.module.css';
import styleContainer from '../common/styles/Container.module.css'
import {MyWork} from "./MyWork/MyWork";


export const MyWorks = () => {
    return (
        <div className={style.MyWorksBlock}>
            <div className= {`${styleContainer.container} ${style.MyWorksContainer}`}>
                <div className={style.title}>
                    <h2 >Мои работы 54 минута</h2>
                </div>
                <div className={style.MyWorks}>
                    <MyWork />
                    <MyWork />
                </div>
            </div>
        </div>
    );
};