import style from './Nav.module.scss';

export const Nav = () => {
    return (
        <div className={style.nav}>
            <a href="">Home</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contact</a>
        </div>
    );
};