import { useEffect, useState } from "react"
import { getArticleInfoApi } from "../../server/articles"
import { Result } from 'antd';
import style from './index.module.scss';
import ReactMarkdown from 'react-markdown'

export default function Articles({match},props){
    const [info, setInfo] = useState({})
    const [errshow, setShow] = useState(false)

    useEffect(()=>{

        getArticleInfoApi(match.params.id).then(res=>{
            if(res.code === 200){
                setInfo(res.data)
            }else{
                // 出错提示
                setShow(true)
            }
        })

    },[match])

    // const filter = (time)=>{
    //     return time.split('T')[0]
    // }

    return ( <div>
        <div style={{display: errshow?'block':'none'}} >
            <Result
                status="500"
                title="500"
                subTitle="Sorry, something went wrong."
            />
        </div>
        <div className={style.content} style={{display: errshow?'none':'block'}}>
            <p className={style.title}>{info.title}</p>
            <p className={style.time}>作者©{info.name}  | </p>
            {/* TODO {filter(info.add_time)} 时间没显示出来，报错 */}
            <hr />
            <div className={style.mdBox}><ReactMarkdown>{info.md_content}</ReactMarkdown></div>
        </div>
    </div> )

}
