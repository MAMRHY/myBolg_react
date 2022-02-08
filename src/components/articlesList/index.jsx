import { useEffect } from 'react'
import  styles from './index.module.scss'

function ArticlesList(props){
   

    useEffect(()=>{
        console.log('zujianprops',props)
    },[props])

    const filter = (time)=>{
        return time.split('T')[0]
    }


    return (<div>
        <div className={styles.cont1} >
            {props.list.map((item,index)=>{
                return ( <div className={styles.contDiv} key={index} >
                    <p className={styles.pLeft}> <span className={styles.dot}></span> {item.title}</p>
                    <p className={styles.pRight}>{filter(item.add_time)}</p>
                </div>)
            })}
        </div>

    </div>)

}

export default ArticlesList