import style from './DistantWork.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import btn from '../common/styles/Button.module.scss'
import {Title} from "../common/components/title/Title";

export const DistantWork = () => {
    return (
        <div className={style.DistantWork}>
           <div className={`${styleContainer.container} ${style.DistantWorkContainer}`}>
               <Title classNameTitle={style.title} text={"Рассматриваю варианты удаленной работы"}/>
                <div className={style.btn}>
                    <button className={btn.button}>Нанять меня</button>
                </div>

           </div>
        </div>
    );
};