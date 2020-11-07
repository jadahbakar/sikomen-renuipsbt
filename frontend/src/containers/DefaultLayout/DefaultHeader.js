import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap'
import PropTypes from 'prop-types'

import { AppNavbarBrand, AppSidebarToggler } from '@coreui/react'
import DefaultHeaderDropdown from './DefaultHeaderDropdown'

import logo from '../../assets/img/brand/logo_pln.svg'
import sygnet from '../../assets/img/brand/logo_pln_small.svg'

const propTypes = {
  children: PropTypes.node
}

const defaultProps = {}

class DefaultHeader extends Component {
  render () {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    const full = {
      src: logo,
      width: 119,
      height: 51,
      alt: 'pln Logo'
    }

    const mini = {
      src: sygnet,
      width: 50,
      height: 50,
      alt: 'pln Logo small'
    }

    return (
      <>
        <AppSidebarToggler className='d-lg-none' display='md' mobile />
        <AppNavbarBrand full={full} minimized={mini} />
        <AppSidebarToggler className='d-md-down-none' display='lg' />
        <Nav className='d-md-down-none' navbar>
          <NavItem className='px-3'>
            <NavLink to='/dashboard' className='nav-link'>
              Dashboard
            </NavLink>
          </NavItem>
        </Nav>
        <Nav className='ml-auto' navbar>
          <DefaultHeaderDropdown onLogout={this.props.onLogout} accnt onReset={this.props.onReset} />
        </Nav>
      </>
    )
  }
}

DefaultHeader.propTypes = propTypes
DefaultHeader.defaultProps = defaultProps

export default DefaultHeader
