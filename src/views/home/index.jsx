import style from './index.module.scss';
import React, { useEffect } from 'react';
import { Form, Input, Modal, message } from 'antd';
// import { QuestionCircleOutlined } from '@ant-design/icons';
import {loginApi, registerApi} from '../../server/users'
import {setToken, getToken, isLogin} from '../../utils/auth'

const loginFormRef = React.createRef()

export default function Home(){
    const [visible, setVisible] = React.useState(false);
    const [formVisible, setFormVisible] = React.useState(false);
    // const [confirmLoading, setConfirmLoading] = React.useState(false);

    const [htmlText, setHtmlText] = React.useState('登录')  //默认是登录，登录之后是用户名
    const [username, setUName] = React.useState('')   //移动端的值
    const [password, setPsw] = React.useState('')  //移动端的值

    useEffect(()=>{
        // 判断有没登陆
        console.log(1111);
        if(isLogin()){
            console.log(getToken('token'));
            const name = getToken('token').name
            setHtmlText(`欢迎回来，${name}`)  
        }
    },[])
  
    const openLogin = ()=>{
        // 判断在pc还是移动端
        if(window.innerWidth <= 414){  //移动端
            setFormVisible(true)
        }else{ //pc
            setVisible(true)
        }
    }
    const empty = ()=>{}
    const handleOk = ()=>{  
        let name,psw;
        if(window.innerWidth <= 414){
            name = username
            psw = password
        }else{
            name = loginFormRef.current.getFieldsValue()['username']
            psw = loginFormRef.current.getFieldsValue()['password']
        }
        if(name === '' && psw === ''){
            message.warning('请输入昵称和密码！')
            return
        }
        loginApi(name,psw).then(res=>{
            console.log(res);
            if(res.code === 200){
                setHtmlText(`欢迎回来，${res.name}`)
                setToken({id:res.id,name: res.name})
                message.success('登录成功！')
                setVisible(false) 
                // 移动端的
                setFormVisible(false)
                setUName('')
                setPsw('')
            }else{
                setToken('')
                message.error(`登录失败，${res.message}`)
            }
        })
    }

    const addUser = ()=>{

        if(username === '' && password === ''){
            message.warning('请输入昵称和密码！')
            return
        }
        registerApi(username, password).then(res=>{
            if(res.code === 200){
                message.success('注册成功，快去登录吧！')
            }else{
                setToken('')
                message.error('注册失败，请稍后再试')
            }
        })
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
                <p onClick={htmlText==='登录'?openLogin: empty} style={{cursor: 'pointer'}}>{htmlText}</p>
            </div>
            <div className={style.footer}>
                <p>©2019 - 2021 | yangchuting</p>
            </div>
            {/* 弹出框-登录-移动端*/}
            <div className={style.mask} style={{display:formVisible?'':'none'}} onClick={()=>setFormVisible(false)}></div>
            <div className={style.popup}  style={{display:formVisible?'':'none'}}>
                <div className={style.top}>
                    <p onClick={()=>setFormVisible(false)} >取消</p>
                    <p style={{color: '#4190f7'}} onClick={addUser}>注册</p>
                    <p style={{color: '#4190f7'}} onClick={handleOk}>登录</p>
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
                name="loginForm"
                ref={loginFormRef}
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
                <p className='tip'>如果没有账号，则默认注册为新账号！</p>
            </Modal>
            
        </div>
    )
}