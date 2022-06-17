import style from './MyWork.module.scss';
import btn from '../../common/styles/Button.module.scss'

export const MyWork = (props) => {
    return (
        <div className={style.MyWork}>
            <div className={style.img} style={props.style}>
                <a className={btn.button}>Смотреть</a>
            </div>
            <div className={style.info}>
                <h3 className={style.MyWorkTitle}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
};