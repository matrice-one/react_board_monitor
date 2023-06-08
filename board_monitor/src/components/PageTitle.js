import React from "react";
import  styles from  "./PageTitle.module.css"
import baseStyles from "./CommonStyles.module.css"

const PageTile = ({ title}) => {
    return (
        // <div className={baseStyles.root}>
            <div className={styles.companyBoardMemberConnections}>{title}</div>
        // </div>
// 
    );
};

export default PageTile;