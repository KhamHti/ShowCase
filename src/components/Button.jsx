import React from 'react';
import styles from '../styles/Global';

const Button = ({assetsUrl, Link}) => {
  return (
    <div className={`${styles.btnBlack}`} onClick={() => window.open(Link, "_blank")}>
      <img src={assetsUrl} alt="expo_icon" className={`${styles.btnIcon}`}/>
      <div className='ml-4 flex flex-col justify-start'>
        <p className={`${styles.btnText} font-normal text-xs`}>View it on</p>
        <p className={`${styles.btnText} font-bold text-s`}>Expo Store</p>
      </div>
    </div>
  )
}

export default Button