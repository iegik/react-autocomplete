import React from 'react';

export default (props = {}) => {
    let {
        value = '',
        key = null,
        selectedIndex = -1,
        ...rest,
    } = props;
    return (
        <div {...{
            key,
            ...rest,
            className: `
                    react-dadata__suggestion ${selectedIndex ? '' : 'react-dadata__suggestion--first'}
                    ${key !== selectedIndex ? '' : 'react-dadata__suggestion--current'}
                `,
        }} >
            {value}
        </div>
    );
};
