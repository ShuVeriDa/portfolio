import style from './MyWorks.module.css';
import styleContainer from '../common/styles/Container.module.css'
import {MyWork} from "./MyWork/MyWork";


export const MyWorks = () => {
    return (
        <div className={style.MyWorksBlock}>
            <div className= {`${styleContainer.container} ${style.MyWorksContainer}`}>
                <h2 className={style.title}>Мои работы</h2>
                <div className={style.MyWorks}>
                    <MyWork />
                    <MyWork />
                </div>
            </div>
        </div>
    );
};