import style from './MyContacts.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import btn from '../common/styles/Button.module.scss'

export const MyContacts = () => {
    return (
        <div className={style.myContants}>
           <div className={`${styleContainer.container} ${style.myContactsContainer}`}>
                <h2 className={style.title}>Контакты</h2>
               <form className={style.Contacts}>
                   <input className={style.input} type="text"/>
                   <input className={style.input} type="text"/>
                   <textarea />
               </form>
               <div className={style.btn}>
                   <button className={btn.button}>Отправить</button>
               </div>
           </div>
        </div>
    );
};