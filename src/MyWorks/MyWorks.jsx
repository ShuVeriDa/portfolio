import style from './MyWorks.module.css';
import styleContainer from '../common/styles/Container.module.css'
import {MyWork} from "./MyWork/MyWork";
import {Title} from "../common/components/title/Title";


export const MyWorks = () => {
    return (
        <div className={style.MyWorksBlock}>
            <div className= {`${styleContainer.container} ${style.MyWorksContainer}`}>
                <Title text={"Projects"}/>
                <div className={style.MyWorks}>
                    <MyWork title={'Social Network'}/>
                    <MyWork title={'Todo list'}/>

                </div>
            </div>
        </div>
    );
};