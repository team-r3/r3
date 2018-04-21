import {
  Body,
  Button,
  Header,
  Icon,
  Left,
  Right,
  Subtitle,
  Title
} from 'native-base'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

/**
 * Basic toolbar component with left, center and right areas, for building more
 * complex toolbars.
 *
 * Takes left button and title/subtitle configurations from props, but leaves
 * the whole right area to be built via children, for greater flexibility.
 */
class BasicToolbar extends Component {
  render () {
    return (
      <Header hasSubtitle={!!this.props.subtitle}>
        <Left>
          <Button transparent rounded onPress={() => this.props.left.onPress}>
            <Icon name={this.props.left.icon} />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
          {this.props.subtitle ? (
            <Subtitle>{this.props.subtitle}</Subtitle>
          ) : null}
        </Body>
        <Right>
          {this.props.children}
        </Right>
      </Header>
    )
  }
}

// Required props and corresponding shapes
BasicToolbar.propTypes = {
  left: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
  }).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

export default BasicToolbar
