import React from 'react';
import clsx from 'clsx'; 
import styles from './HttpCode.module.css';

const codeColors = {
    200: "http_200"
};
function HttpCode({ code }) {
    const colorClass = codeColors[code] || 'default'; 
    console.log(styles[colorClass]);
    return (
        <span className={clsx(styles.httpCode, styles[colorClass])}>
            {code}
        </span>
    );
}
export default HttpCode;