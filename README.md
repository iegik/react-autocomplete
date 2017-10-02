# react-autocomplete
Select container with autocomplete list and `search` method

```
import React from 'react';
import AutocompleteSelect from './Select';
import AutocompleteList from './List';
import AutocompleteListItem from './ListItem';
import AutocompleteInput from './Input';
import {getCountrySuggestions} from '../../api/ddata-api';

class CountryAutocomplete extends AutocompleteSelect {
    renderInput = AutocompleteInput;

    renderAutocomplete = AutocompleteList;

    renderAutocompleteItem = AutocompleteListItem;

    // This will fill `items` property while typing
    search = text => getCountrySuggestions(text).then(({suggestions}) => suggestions);

    getSuggestionValue = item => item.value;
}
export default CountryAutocomplete;
```
