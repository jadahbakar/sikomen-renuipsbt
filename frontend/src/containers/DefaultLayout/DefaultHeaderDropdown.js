import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'

const propTypes = {
  notif: PropTypes.bool,
  accnt: PropTypes.bool,
  tasks: PropTypes.bool,
  mssgs: PropTypes.bool
}
const defaultProps = {
  notif: false,
  accnt: false,
  tasks: false,
  mssgs: false
}

const DefaultHeaderDropdown = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggle = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const dropAccnt = () => {
    return (
      <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle nav>
          <img src='assets/img/avatars/avatar-generic.jpg' className='img-avatar' alt='admin' />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem header tag='div' className='text-center'>
            <strong>Account</strong>
          </DropdownItem>

          <DropdownItem onClick={props.onReset}>
            <i className='fa fa-key' /> Reset Password
          </DropdownItem>

          <DropdownItem onClick={props.onLogout}>
            <i className='fa fa-lock' /> Logout
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  }

  const { accnt } = props
  return accnt ? dropAccnt() : null
}

DefaultHeaderDropdown.propTypes = propTypes
DefaultHeaderDropdown.defaultProps = defaultProps

export default DefaultHeaderDropdown
