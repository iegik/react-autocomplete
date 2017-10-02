# react-autocomplete
Select container with autocomplete list and `search` method

### Install

```
npm install eact-autocomplete-field
```

### Usage

```javascript
import React from 'react';
import {Select, List, ListItem, TextInput} from 'react-autocomplete-field';
import {getCountrySuggestions} from '../../api/ddata-api';

class CountryAutocomplete extends Select {
    renderInput = TextInput;

    renderAutocomplete = List;

    renderAutocompleteItem = ListItem;

    // This will fill `items` property while typing
    search = text => getCountrySuggestions(text).then(({suggestions}) => suggestions);

    // This is for getting values from each suggestion
    getSuggestionValue = item => item.value;
}
export default CountryAutocomplete;
```

*Props*

* `value` - as in usual input
* `onSelect` - fires when value was chosen from list
* `onChange` - fires while value changes, as you type
* `onError` - fires when error was thrown in `search` method
