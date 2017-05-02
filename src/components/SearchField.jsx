import React, { PropTypes } from 'react';
import Autosuggest from 'react-autosuggest';
import theme from '../../public/stylesheets/search-field.css';

const getSuggestions = ({ value, items }) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : items.filter(item =>
    item.title.toLowerCase().slice(0, inputLength) === inputValue ||
    item.registrarId.toLowerCase().slice(0, inputLength) === inputValue);
};

const getSuggestionValue = suggestion => suggestion.title;

const renderSuggestion = suggestion => (
  <div>
    {suggestion.title}
  </div>
);

const SearchField = ({ suggestions, val, courses, onChange, onUpdateSuggestions, onCourseAdd }) => (
  <Autosuggest
    theme={theme}
    suggestions={suggestions}
    onSuggestionsFetchRequested={({ value }) =>
      onUpdateSuggestions(getSuggestions({ value, items: courses }))
    }
    onSuggestionsClearRequested={() =>
      onUpdateSuggestions([])
    }
    getSuggestionValue={getSuggestionValue}
    renderSuggestion={renderSuggestion}
    onSuggestionSelected={(e, { suggestion }) => {
      onCourseAdd(suggestion);
      onChange(e, { newValue: '' });
    }}
    inputProps={{ placeholder: 'Search', value: val, onChange }}
  />
);

SearchField.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.shape({
    registrarId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  val: PropTypes.string.isRequired,
  courses: PropTypes.arrayOf(PropTypes.shape({
    registrarId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onChange: PropTypes.func.isRequired,
  onUpdateSuggestions: PropTypes.func.isRequired,
  onCourseAdd: PropTypes.func.isRequired,
};

export default SearchField;
