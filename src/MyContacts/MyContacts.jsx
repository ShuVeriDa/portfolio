import style from './MyContacts.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import btn from '../common/styles/Button.module.scss'
import {Title} from "../common/components/title/Title";

export const MyContacts = () => {
    return (
        <div className={style.myContants}>
           <div className={`${styleContainer.container} ${style.myContactsContainer}`}>
               <Title text={"Contact"}/>
               <form className={style.Contacts}>
                   <input className={style.input} type="text" placeholder="Name"/>
                   <input className={style.input} type="text" placeholder='Email'/>
                   <textarea className={style.textarea} placeholder='Your message' rows={7}/>
               </form>
               <div className={style.btn}>
                   <button className={btn.button}>SEND MESSAGE</button>
               </div>
           </div>
        </div>
    );
};