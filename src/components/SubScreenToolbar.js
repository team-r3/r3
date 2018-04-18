import BasicToolbar         from './BasicToolbar'
import PropTypes            from 'prop-types'
import React, { Component } from 'react';

/**
 * Generic toolbar component for secondary/sub screens.
 * 
 * Provides a back button on the left, and takes title/subtitle configuration
 * from props. Additional buttons for the right area can be added via children.
 */
class SubScreenToolbar extends Component {
  render() {
    return (
      <BasicToolbar
        left={{
          icon:    'arrow-back',
          onPress: () => this.props.navigation.goBack()
        }}
        {...this.props}
      >
      </BasicToolbar>
    )
  }
}

// Required props and corresponding shapes
SubScreenToolbar.propTypes = {
  title:    PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

export default SubScreenToolbar;
