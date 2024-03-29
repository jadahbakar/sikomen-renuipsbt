import React, { Component } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.node
}

const defaultProps = {}

class DefaultFooter extends Component {
  render () {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <>
        <span>
          {' '}
          &copy; 2020 sikomen-renuipsbt.
        </span>
        <span className='ml-auto'>
          Powered by
          {' '}
          <a href='/#'>sikomen-renuipsbt</a>
        </span>
      </>
    )
  }
}

DefaultFooter.propTypes = propTypes
DefaultFooter.defaultProps = defaultProps

export default DefaultFooter
