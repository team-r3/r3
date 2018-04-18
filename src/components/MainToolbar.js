import PropTypes            from 'prop-types'
import React, { Component } from 'react';
import SearchableToolbar    from './SearchableToolbar'

/**
 * Generic toolbar component for the main screens.
 * 
 * Provides a menu button on the left, and takes title/subtitle as well as the
 * search configuration from props. Additional buttons for the right area can
 * be added via children.
 */
class MainToolbar extends Component {
  render() {
    return (
      <SearchableToolbar
        left={{
          icon:    'menu',
          onPress: () => this.props.navigation.navigate("DrawerOpen")
        }}
        {...this.props}
      >
        {this.props.children}
      </SearchableToolbar>
    )
  }
}

// Required props and corresponding shapes
MainToolbar.propTypes = {
  title:    PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  search:   PropTypes.shape({
    placeholder: PropTypes.string.isRequired,
    onClose:     PropTypes.func.isRequired,
    onChange:    PropTypes.func,
    onSubmit:    PropTypes.func,
  }).isRequired
};

export default MainToolbar;
