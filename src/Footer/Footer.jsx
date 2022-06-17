import style from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import {Block} from "./Block/Block";

export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Иван Иванов</h2>
                <div className={style.block}>
                    <Block classNameBlock={`${style.blockGray} ${style.blockColor}`}/>
                    <Block classNameBlock={`${style.blockGray} ${style.blockColor}`}/>
                    <Block classNameBlock={`${style.blockGray} ${style.blockColor}`}/>
                    <Block classNameBlock={`${style.blockGray} ${style.blockColor}`}/>
                </div>
                <div className={style.info}>
                    <h3 className={style.title}> &#169; 2022 Все права защищены</h3>
                </div>
            </div>
        </div>
    );
};