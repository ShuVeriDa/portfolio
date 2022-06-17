import style from './MyWorks.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import {MyWork} from "./MyWork/MyWork";
import {Title} from "../common/components/title/Title";
import todoImage from './../assets/image/todoimage.png'
import socialImage from './../assets/image/socialNetwork.png'


export const MyWorks = () => {
    const social = {
        backgroundImage: `url(${socialImage})`
    }
    const todolist = {
        backgroundImage: `url(${todoImage})`
    }
    return (
        <div className={style.MyWorksBlock}>
            <div className= {`${styleContainer.container} ${style.MyWorksContainer}`}>
                <Title text={"Projects"}/>
                <div className={style.MyWorks}>
                    <MyWork style={social} title={'Social Network'} description={'Short description'}/>
                    <MyWork style={todolist} title={'Todo list'} description={'Short description'}/>
                </div>
            </div>
        </div>
    );
};