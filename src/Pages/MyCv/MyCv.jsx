import React from 'react';
import MyCvNavbar from '../../Components/MyHeader/MyCvNavbar';
import Footer from '../../Components/MyFooter/Footer';
import CV from '../../Images/CV.jpeg';
import styles from './MyCv.module.css';

function MyCv() {
  return (
    <div className={styles['cv-page-container']}>
      <MyCvNavbar />
      <h1 className={styles['cv-title']}>My CV</h1>
      <div className={styles['cv-image-wrapper']}>
        <img src={CV} alt="My CV" className={styles['cv-image']} />
      </div>
    
    </div>
  );
}

export default MyCv;
