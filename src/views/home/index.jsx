import style from './index.module.scss';
import React from 'react';
import { Form, Input, Modal } from 'antd';
// import { QuestionCircleOutlined } from '@ant-design/icons';

export default function Home(){
    const [visible, setVisible] = React.useState(false);
    const [formVisible, setFormVisible] = React.useState(false);
    // const [confirmLoading, setConfirmLoading] = React.useState(false);

    const [htmlText, setHtmlText] = React.useState('登录')  //默认是登录，登录之后是用户名
    const [username, setUName] = React.useState('')
    const [password, setPsw] = React.useState('')

  
    const openLogin = ()=>{
        // 判断在pc还是移动端
        if(window.innerWidth <= 414){  //移动端
            setFormVisible(true)
        }else{ //pc
            setVisible(true)
        }
    }
    const handleOk = ()=>{

    }
  
 

    return (
        <div className={style.home}>
            <div className={style.cont}>
                <p>黑暗中</p>
                <p>渴望一束光的关怀</p>
                <p>在白天</p>
                <p>却更渴望黑洞的吞噬</p>
                <p>因为好奇心，想看看黑暗中有什么</p>
                <p>(・ˍ・)</p>
                <p onClick={htmlText=='登录'?openLogin:''} style={{cursor: 'pointer'}}>{htmlText}</p>
            </div>
            <div className={style.footer}>
                <p>©2019 - 2021 | yangchuting</p>
            </div>
            {/* 弹出框-登录-移动端*/}
            <div className={style.mask} style={{display:formVisible?'':'none'}} onClick={()=>setFormVisible(false)}></div>
            <div className={style.popup}  style={{display:formVisible?'':'none'}}>
                <div className={style.top}>
                    <p onClick={()=>setFormVisible(false)} >取消</p>
                    <p style={{color: '#4190f7'}}>登录</p>
                </div>
                <div className={style.content}>
                    <form name='iphone_login_form'>
                        <p> <span>昵 称:</span> <input type="text" value={username} onChange={(e)=>{setUName(e.target.value)}} /> </p>
                        <p> <span>密 码:</span> <input type="password"  value={password} onChange={(e)=>{setPsw(e.target.value)}} /> </p>
                    </form>
                </div>
            </div>
            {/* 弹出层-登录-pc */}
            <Modal
                title="Login in"
                style={{top: 200}}
                visible={visible}
                onOk={handleOk}
                onCancel={()=>setVisible(false)}
            >
               <Form
                name="basic"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 16 }}
                >
                    <Form.Item
                        label="昵称"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                </Form>
            </Modal>
            
        </div>
    )
}