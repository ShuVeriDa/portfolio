import style from './MyWork.module.css';
import btn from '../../common/styles/Button.module.css'

export const MyWork = (props) => {
    return (
        <div className={style.MyWork}>
            <div className={style.img}>
                <a className={btn.button}>Смотреть</a>
            </div>
            <div className={style.info}>
                <h3 className={style.MyWorkTitle}>{props.title}</h3>
                <span className={style.description}>Short description</span>
            </div>
        </div>
    );
};