import style from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import {Block} from "./Block/Block";

export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Bashtarov Said-Muhammad</h2>
                <div className={style.block}>
                    <Block title={'Facebook'} classNameBlock={style.blockItem}/>
                    <Block title={'VK'} classNameBlock={style.blockItem}/>
                    <Block title={'Instagram'} classNameBlock={style.blockItem}/>
                    <Block title={'Twitter'} classNameBlock={style.blockItem}/>
                    <Block title={'Linkedin'} classNameBlock={style.blockItem}/>
                </div>
                <div className={style.info}>
                    <h3 className={style.titleH3}> &#169; 2022 Все права защищены</h3>
                </div>
            </div>
        </div>
    );
};