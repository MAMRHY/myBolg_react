import styles from './index.module.scss'
import img from '../../assets/image/2021.png'
import { getListApi } from '../../server/articles'
import { useState,useEffect } from 'react'
import ArticlesList from '../../components/articlesList'

export default function Life(){
    const [list, setList] = useState([])
    const [page] = useState(1)

    useEffect(()=>{
        initData()
    },[])
    function initData(){ //生活的id = 1
        getListApi(1).then(res=>{
            console.log(res);
            if(res.code === 200){
                setList(res.data)
            }
        })
    }

    return(<div>
        <h2 className={styles.h2}>About me life</h2>
        <div className={styles.hrBox}> <span></span> <img src={img} alt="" /></div>
        <ArticlesList list={list} page={page}></ArticlesList>
    </div>)
}