import style from './Skill.module.scss';

export const Skill = (props) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}>
                <img className={style.iconImg} src={props.urlImg} alt=""/>
            </div>
            <h3 className={style.titleH3}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
};