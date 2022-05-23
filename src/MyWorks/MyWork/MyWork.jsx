import style from './MyWork.module.css';
import btn from '../../common/styles/Button.module.css'

export const MyWork = (props) => {
    return (
        <div className={style.MyWork}>
            <div className={style.img}>
                <button className={btn.button}>Смотреть</button>
            </div>
            <div className={style.info}>
                <h5>Название проекта</h5>
                <p className={style.description}>Краткое описание</p>
            </div>
        </div>
    );
};