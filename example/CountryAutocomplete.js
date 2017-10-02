import React from 'react';
import AutocompleteSelect from '../Select';
import AutocompleteList from '../List';
import AutocompleteListItem from '../ListItem';
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
