import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";
import {Title} from "../common/components/title/Title";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={'HTML'}
                           urlImg={'https://cdn-icons-png.flaticon.com/512/2535/2535518.png'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}
                    />
                    <Skill title={'JS'}
                           urlImg={'https://cdn-icons-png.flaticon.com/512/5968/5968292.png'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}/>
                    <Skill title={"CSS"}
                           urlImg={'https://cdn-icons.flaticon.com/png/512/5486/premium/5486331.png?token=exp=1657987822~hmac=ec604246e57a97f8c919d8ac939ade77'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}/>
                    <Skill urlImg={'https://cdn-icons-png.flaticon.com/512/753/753244.png'}
                        title={'React'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}/>
                    <Skill urlImg={"https://images.velog.io/images/dev-mish-mash/post/1dca7b40-8e73-4981-9916-160d3fc12040/react-redux.png"}
                        title={'Redux'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}/>
                    <Skill urlImg={'https://cdn-icons-png.flaticon.com/512/5968/5968381.png'}
                        title={'TypeScript'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}/>

                </div>
            </div>
        </div>
    );
};