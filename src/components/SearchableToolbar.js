import BasicToolbar         from './BasicToolbar'
import { Button, Icon }     from 'native-base';
import PropTypes            from 'prop-types'
import React, { Component } from 'react';
import SearchBar            from './SearchBar'

/**
 * Toolbar component with left, center and right areas, including a working
 * search button, for building more complex toolbars.
 * 
 * Takes left button, title/subtitle and search configurations from props, but
 * leaves the remaining right area after the search button to be built via
 * children, for greaterflexibility.
 */

class SearchableToolbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isActive: false
    }
  }

  render() {
    return this.state.isActive ? (
      <SearchBar
        {...this.props.search}
        onClose={() => {
          this.setState({ isActive: false });
          this.props.search.onClose();
        }}
      />
    ) : (
      <BasicToolbar {...this.props}>
        <Button transparent rounded onPress={() => this.setState({ isActive: true })}>
          <Icon name="search" />
        </Button>
        {this.props.children}
      </BasicToolbar>
    )
  }
}

// Required props and corresponding shapes
SearchableToolbar.propTypes = {
  left: PropTypes.shape({
    icon:    PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
  }).isRequired,
  title:    PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  search:   PropTypes.shape({
    placeholder: PropTypes.string.isRequired,
    onClose:     PropTypes.func.isRequired,
    onChange:    PropTypes.func,
    onSubmit:    PropTypes.func,
  }).isRequired
};

export default SearchableToolbar;
