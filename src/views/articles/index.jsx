import { useEffect, useState } from "react"
import { getArticleInfoApi } from "../../server/articles"
import { Result, Comment, Avatar, Form, Button, List, Input ,Tooltip } from 'antd';
import style from './index.module.scss';
import ReactMarkdown from 'react-markdown'

import moment from 'moment';

const { TextArea } = Input;
const CommentList = ({ comments }) => (
    <List
      dataSource={comments}
      header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
      itemLayout="horizontal"
      renderItem={props => <Comment {...props} />}
    />
  );
  
  const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
      <Form.Item>
        <TextArea rows={4} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
          Add Comment
        </Button>
      </Form.Item>
    </>
  );

export default function Articles({match},props){
    const [info, setInfo] = useState({})
    const [errshow, setShow] = useState(false)
    const [comments,setComments] = useState([])
    const [submitting,setSubmitting] = useState(false)
    const [value,setValue] = useState('')


    useEffect(()=>{
        setComments([{
            actions: [<span key="comment-list-reply-to-0">Reply to</span>],
            author: 'Han Solo',
            avatar: 'https://joeschmoe.io/api/v1/random',
            content: (
              <p>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure), to help people create their product prototypes beautifully and
                efficiently.
              </p>
            ),
            datetime: (
              <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                <span>{moment().subtract(1, 'days').fromNow()}</span>
              </Tooltip>
            ),
          }])

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

    const handleSubmit = ()=>{}
 
    const handleChange = e => {
      this.setState({
        value: e.target.value,
      });
    };



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
            <div className={style.mdBox}>
                <ReactMarkdown>{info.md_content}</ReactMarkdown>
            </div>
            <hr />

            {comments.length > 0 && <CommentList comments={comments} />}
            <Comment
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
            content={
                <Editor
                onChange={handleChange}
                onSubmit={handleSubmit}
                submitting={submitting}
                value={value}
                />
            }
            />

        </div>

    </div> )

}
