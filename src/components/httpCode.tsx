import React from 'react';
import clsx from 'clsx'; 
//import styles from './HttpCode.module.css';
import styles from "@site/src/components/httpCode.module.css";

// See https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status
// for detailed information

const codeColors = {
    // Informational responses
    100: "http_blue",               // Continue
    101: "http_blue",               // Switching Protocols
    102: "http_blue",               // Processing
    103: "http_blue",               // Early Hints

    // Successful responses
    200: "http_green",              // OK
    201: "http_green",              // Created
    202: "http_green",              // Accepted
    203: "http_green",              // Non-Authoritative Information
    204: "http_green",              // No Content
    205: "http_green",              // Reset Content
    206: "http_green",              // Partial Content
    207: "http_green",              // Multi-Status
    208: "http_green",              // Already Reported
    226: "http_green",              // IM Used

    // Redirection messages
    300: "http_gray",               // Multiple Choices
    301: "http_gray",               // Moved Permanently
    302: "http_gray",               // Found
    303: "http_gray",               // See Other
    304: "http_gray",               // Not Modified
    305: "http_gray",               // Used Proxy
    306: "http_gray",               // ------------------------- Unused
    307: "http_gray",               // Temporary Redirect
    308: "http_gray",               // Permanent Redirect

    // Client error responses
    400: "http_red",                // Bad Request
    401: "http_red",                // Unauthorised
    402: "http_red",                // Payment Required
    403: "http_red",                // Forbidden
    404: "http_red",                // Not Found
    405: "http_red",                // Method Not Allowed
    406: "http_red",                // Not Acceptable
    407: "http_red",                // Proxy Authentication Required
    408: "http_red",                // Request Timeout
    409: "http_red",                // Conflict
    410: "http_red",                // Gone
    411: "http_red",                // Length Required
    412: "http_red",                // Precondition Failed
    413: "http_red",                // Content Too Large
    414: "http_red",                // URI Too Long
    415: "http_red",                // Unsupported Media Type
    416: "http_red",                // Range Not Satisfiable
    417: "http_red",                // Expectation Failed
    418: "http_red",                // I'm a teapot                             - When the server refuses to brew coffee with a teapot
    421: "http_red",                // Misdirected Request
    422: "http_red",                // Unrpcoessable Content
    423: "http_red",                // Locked
    424: "http_red",                // Failed Dependency
    425: "http_red",                // Too Early                                - Experimantal, may change later, look at docs
    426: "http_red",                // Upgrade Required
    428: "http_red",                // Precondition Required
    429: "http_red",                // Too Many Requests
    431: "http_red",                // Request Header Fields Too Large
    451: "http_red",                // Unavailable For Legal Reasons

    500: "http_orange",             // Internal Server Error
    501: "http_orange",             // Not Implemented
    502: "http_orange",             // Bad Gateway
    503: "http_orange",             // Service Unavailable
    504: "http_orange",             // Gateway Timeout
    505: "http_orange",             // HTTP Version Not Supported
    506: "http_orange",             // Variant Also Negotiates
    507: "http_orange",             // Insufficient Storage
    508: "http_orange",             // Loop Detected
    510: "http_orange",             // Not Extended
    511: "http_orange",             // Network Authentication Required

    // Unused, ignore
    1: "http_blue",
    2: "http_green",
    3: "http_yellow",
    4: "http_red",
    5: "http_orange"
};
function HttpCode({ code }) {
    const n = parseInt(code);
    const colorClass = codeColors[n] || 'default';
    return (
        <span className={clsx(styles.httpCode, styles[colorClass])}>
            {code}
        </span>
    );
}
export default HttpCode;