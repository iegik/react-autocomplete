import React from 'react';
import map from './map';

export default ({
    items = [],
    selectedIndex = -1,
    getItemValue = i => i,
    renderItem = i => i,
    onSelect = () => {},
    ...rest,
}) => (
    <div {...{...rest, className: 'react-dadata__suggestions'}}>
        {items.length ? map(items, (item, key) =>
            renderItem({
                key,
                onMouseDown: () => onSelect(getItemValue(item), key),
                item,
                selectedIndex,
                value: getItemValue(item),
            })
        ) : (
            renderItem()
        )}
    </div>
);
