import React, {Component} from 'react';

class Select extends Component {

    state = {
        items: [],
        value: this.props.value,
        selectedIndex: -1,
        isAutocompleteOpen: false,
    };

    search = text => new Promise(resolve => resolve([text]));
    getSuggestionText = item => item;
    getSuggestionValue = item => item;

    _showAC = () => this.setState({isAutocompleteOpen: true});
    _hideAC = () => this.setState({isAutocompleteOpen: false});
    _select = item => {
        this.setState({value: this.getSuggestionText(item), isAutocompleteOpen: false});
        this.props.onSelect(this.getSuggestionValue(item))
    };

    render() {
        let {onFocus, onBlur, onChange, onKeyDown, onMouseDown, onError, onSelect, ...rest} = this.props;
        let {items, value, selectedIndex, isAutocompleteOpen} = this.state;
        return (
            <div>
                {this.renderInput({
                    ...rest,
                    value,
                    onFocus: e => {
                        this.search(e.target.value)
                            .then(items => this.setState({items}))
                            .catch(onError);
                        this._showAC();
                        onFocus(e);
                    },
                    onBlur: e => {
                        this._hideAC();
                        onBlur(e);
                    },
                    onChange: e => {
                        this.setState({value: e.target.value});
                        this.search(e.target.value)
                            .then(items => this.setState({items}))
                            .catch(onError);
                        onChange(e)
                    },
                    onKeyDown: e => {
                        let currentItem;
                        if (!isAutocompleteOpen) {
                            this._showAC();
                        }

                        // Arrow down
                        if (e.which === 40) {
                            if (selectedIndex < items.length - 1) {
                                e.preventDefault();
                                this.setState({selectedIndex: selectedIndex + 1});
                            }
                        }

                        // Arrow up
                        if (e.which === 38) {
                            if (selectedIndex > 0) {
                                e.preventDefault();
                                this.setState({selectedIndex: selectedIndex - 1});
                            }
                            if (selectedIndex < 0) {
                                e.preventDefault();
                                this.setState({selectedIndex: items.length - 1});
                            }
                        }

                        // Enter
                        if (e.which === 13) {
                            if (selectedIndex >= 0 || selectedIndex < items.length) {
                                currentItem = items[selectedIndex];
                                this._select(currentItem)
                            }
                        }

                        // Escape
                        if (e.which === 27) {
                            this._hideAC();
                        }

                        onKeyDown(e);
                    },
                    onMouseDown: e => {
                        if (!isAutocompleteOpen) {
                            this._showAC();
                        }
                        onMouseDown(e);
                    },
                })}
                {isAutocompleteOpen ? this.renderAutocomplete({
                    items,
                    selectedIndex,
                    renderItem: this.renderAutocompleteItem,
                    value,
                    getItemText: this.getSuggestionText,
                    onSelect: this._select,
                }) : null}
            </div>
        );
    }
}
Select.defaultProps = {
    value: '',
    onSelect: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onChange: () => {},
    onKeyDown: () => {},
    onMouseDown: () => {},
    onError: () => {},
};
export default Select;
