import styles from './index.module.scss';
import imgmie from '../../assets/image/mie.png'
import { Space, Image } from 'antd';
import { SmileTwoTone, HeartTwoTone } from '@ant-design/icons';

export default function About(){
    return(<div>
        <div className={styles.box}>
            <div className={styles.iconBox} style={{fontSize: '20px'}}>
                <Space>
                    <HeartTwoTone twoToneColor="#eb2f96" /> &nbsp;
                    <SmileTwoTone  rotate={-45}/>
                    <SmileTwoTone twoToneColor="orange" />
                    <SmileTwoTone twoToneColor="gold" rotate={90}/>
                    <SmileTwoTone twoToneColor="lime" rotate={180}/>
                    <SmileTwoTone twoToneColor="cyan" rotate={270}/>
                    <SmileTwoTone twoToneColor="purple" rotate={45}/> &nbsp;
                    <HeartTwoTone twoToneColor="#eb2f96"/>
                </Space>
            </div>
            <p> <span className={styles.big}> 本</span> 站创建于2020年11月</p>
            <p>现在已有<span className={styles.big}> 1300 </span>余博客咩~</p>
            <p>文章数突破 <span className={styles.big}>1w </span>+</p>
            <div className={styles.imgBox}>
                
                    <img className={styles.img} src={imgmie} alt="" />
        
            </div>
        </div> 
    </div>)
}