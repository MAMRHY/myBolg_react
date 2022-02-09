import { useEffect } from 'react'
import  styles from './index.module.scss'
import { withRouter } from 'react-router-dom'

function ArticlesList(props){
   

    useEffect(()=>{
        console.log('zujianprops',props)
    },[props])

    const filter = (time)=>{
        return time.split('T')[0]
    }

    const toSee = (id)=>{  //文章id
        props.history.push(`/article/${id}`)
    }

    return (<div>
        <div className={styles.cont1} >
            {props.list.map((item,index)=>{
                return ( <div className={styles.contDiv} key={index} onClick={()=>{toSee(item.id)}}>
                    <p className={styles.pLeft}> <span className={styles.dot}></span> {item.title}</p>
                    <p className={styles.pRight}>{filter(item.add_time)}</p>
                </div>)
            })}
        </div>

    </div>)

}

export default withRouter(ArticlesList)