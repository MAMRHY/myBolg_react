import style from './index.module.scss';

export default function Home(){
    return (
        <div className={style.home}>
            <div className={style.cont}>
                <p>黑暗中</p>
                <p>渴望一束光的关怀</p>
                <p>在白天</p>
                <p>却更渴望黑洞的吞噬</p>
                <p>因为好奇心，想看看黑暗中有什么</p>
            </div>
            <div className={style.footer}>
                <p>©2019 - 2021 | yangchuting</p>
            </div>
        </div>
    )
}