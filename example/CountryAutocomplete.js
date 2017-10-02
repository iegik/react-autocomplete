import React from 'react';
import AutocompleteSelect from '../src/Select';
import AutocompleteList from '../src/List';
import AutocompleteListItem from '../src/ListItem';
import AutocompleteInput from '../Input';

// FIXME: Returns Promise with object `{suggestions: [{value: String}]}`
import {getCountrySuggestions} from '../../api/ddata-api';

class CountryAutocomplete extends AutocompleteSelect {
    renderInput = AutocompleteInput;

    renderAutocomplete = AutocompleteList;

    renderAutocompleteItem = AutocompleteListItem;

    search = text => getCountrySuggestions(text).then(({suggestions}) => suggestions);

    getSuggestionValue = item => item.value;
}
export default CountryAutocomplete;
