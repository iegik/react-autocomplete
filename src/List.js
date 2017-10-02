import React from 'react';
import map from './map';

export default ({
    items = [],
    selectedIndex = -1,
    getItemText = i => i,
    renderItem = i => i,
    onSelect = () => {},
    ...rest,
}) => (
    <div {...{...rest, className: 'react-dadata__suggestions'}}>
        {items.length ? map(items, (item, key) =>
            renderItem({
                key,
                onMouseDown: () => onSelect(item),
                selectedIndex,
                value: getItemText(item),
            })
        ) : (
            renderItem()
        )}
    </div>
);
