import React from 'react';
import styles from './About.module.css';

interface AboutProps {}

const About: React.FC<AboutProps> = () => <div className={styles.about}>About</div>;

export default About;
