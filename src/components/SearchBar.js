import { Button, Header, Icon, Input, Item } from 'native-base';
import PropTypes                             from 'prop-types'
import React, { Component }                  from 'react';

/**
 * Base search bar component with back/close button, placeholder and optional
 * submit button.
 */
class SearchBar extends Component {
  render() {
    return (
      <Header searchBar rounded>
        <Item>
          <Button transparent rounded onPress={() => this.props.onClose()}>
            <Icon name='arrow-back' />
          </Button>
          <Input
            autoFocus={true}
            placeholder={this.props.placeholder}
            onChangeText={
              this.props.onChange
                ? (text) => this.props.onChange(text)
                : undefined
            }
          />
          {this.props.onSubmit ? (
            <Button transparent rounded onPress={() => this.props.onSubmit()}>
              <Icon name='search' />
            </Button>
          ) : null}
        </Item>
      </Header>
    );
  }
}

// Required props and corresponding shapes
SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onClose:     PropTypes.func.isRequired,
  onChange:    PropTypes.func,
  onSubmit:    PropTypes.func,
};

export default SearchBar;
