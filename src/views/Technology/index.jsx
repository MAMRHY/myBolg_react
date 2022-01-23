import styles from './index.module.scss'
import img from '../../assets/image/2021.png'

export default function Life(){
    return(<div>
        <h2 className={styles.h2}>Technology</h2>
        <div className={styles.hrBox}> <span></span> <img src={img} alt="" /></div>
        <div className={styles.cont1}>
            <div className={styles.contDiv}>
                <p className={styles.pLeft}> <span className={styles.dot}></span> webpack打包配置文档发发发发发发付付付付付付</p>
                <p className={styles.pRight}>2020-12-16</p>
            </div>
            <div className={styles.contDiv}>
                <p className={styles.pLeft}> <span className={styles.dot}></span> webpack打包配置文档</p>
                <p className={styles.pRight}>2020-12-16</p>
            </div>
        </div>
    </div>)
}