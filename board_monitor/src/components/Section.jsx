import React from "react";
import  styles from  "./Section.module.css"


const Section = ({ title, children}) => {
    return (
        <div className={styles.section}>
            <h2 className={styles.sectionTitle}> {title}</h2>
            <div className={styles.sectionContent}>{children}</div>
        </div>
    );
};

export default Section;