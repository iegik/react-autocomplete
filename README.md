# react-autocomplete
Select container with autocomplete list and `search` method

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
