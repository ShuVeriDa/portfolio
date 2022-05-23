import style from './DistantWork.module.css';
import styleContainer from '../common/styles/Container.module.css'
import btn from '../common/styles/Button.module.css'

export const DistantWork = () => {
    return (
        <div className={style.DistantWork}>
           <div className={`${styleContainer.container} ${style.DistantWorkContainer}`}>
                <h2 className={style.title}>Рассматриваю варианты удаленной работы</h2>
                <div className={style.btn}>
                    <button className={btn.button}>Нанять меня</button>
                </div>

           </div>
        </div>
    );
};