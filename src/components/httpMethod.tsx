/* Credits: https://blog.logrocket.com/api-documentation-guide/ */

import React from 'react';
import clsx from 'clsx'; 
import styles from './HttpMethod.module.css';

const methodColors = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    PATCH: 'patch',
    DELETE: 'delete',
};
function HttpMethod({ method }) {
    const upperMethod = method.toUpperCase();
    const colorClass = methodColors[upperMethod] || 'default'; 
    return (
        <span className={clsx(styles.httpMethod, styles[colorClass])}>
            {upperMethod}
        </span>
    );
}
export default HttpMethod;