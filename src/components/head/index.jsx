import { useState, useEffect } from 'react';
import styles from './index.module.scss';
import { HashRouter as Router,Link } from 'react-router-dom';

import life from '../../assets/image/life.png'
import durk from '../../assets/image/durk.png'
import about from '../../assets/image/about.png'
import sum from '../../assets/image/sum.png'
import moon from '../../assets/image/moon.png'


export default function Head(){
    const [show,setShow] = useState(false)
    const [theme,setTheme] = useState('light')  //白天 light， 黑夜 dark

    useEffect(() => {
        let html = document.getElementsByTagName('html')[0]
        if(theme === 'light'){
            html.setAttribute('data-theme', '')
        }else{
            html.setAttribute('data-theme', 'dark')
        }
      });

    function handleClick(){
        setShow(!show)
    }
    function changeTheme(){
        let currentTheme = theme==='light'?'dark':'light'


        setTheme(currentTheme)
        
        
    } 

    return (<Router><div>
        <div className={`${styles.head} ${theme==='light'?styles.lbg:styles.dbg}`}>
            <div className={styles.headCont}>
                <p className={styles.title}>title</p>
                <div className={styles.right} onClick={handleClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            {/* <div className={styles.popups} > */}
            <div className={`${styles.popups} ${show?styles.open:styles.hidden} ${theme==='light'?styles.lbg:styles.dbg}`} >
                <ul className={`${styles.gridBox} ${show?styles.open1:styles.hidden}`}>
                {/* <ul className={styles.gridBox}> */}
                    <Link to='/life'><li onClick={handleClick}> 
                        <img src={life} alt="" />
                        <p>生活</p> 
                    </li></Link> 
                    <Link to='/tech'><li onClick={handleClick}> 
                        <img src={durk} alt="" />
                        <p>技术</p>
                    </li></Link> 
                    <Link to='/about'><li onClick={handleClick}> 
                        <img src={about} alt="" />
                        <p>关于</p>
                    </li></Link> 
                    <li onClick={changeTheme}> 
                        <img src={theme==='light'?sum:moon} alt="" />
                        <p>{theme==='light'?"明亮":"酷黑"}</p> 
                    </li>
                </ul>
            </div>
        </div>
        <div className={show?styles.mask:''} onClick={handleClick}></div>
    </div></Router>)
}