/* eslint-disable no-unused-vars */
/* global sessionStorage */
import React, { useState, useEffect, useContext } from 'react'
import { Button, Card, Input, CardHeader, CardBody, CardFooter, Col, Container, Row, Label, Form, FormGroup } from 'reactstrap'
import { Inputan, InputanPassword, InputanSelect, useHttp2, useHttp } from 'component'
import Swal from 'sweetalert2'
import PropTypes from 'prop-types'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import ErrorMessage from './errorMessage'
import { AppContext } from '../../../context'

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color,
      backgroundColor: color,
      height: 0.3,
      marginTop: 0,
      marginBottom: '0.9em'
    }}
  />
)

ColoredLine.propTypes = {
  color: PropTypes.string.isRequired
}

const ProjectInput = props => {
  const appContext = useContext(AppContext)
  const { errors, register, handleSubmit } = useForm()

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const hideAlert = () => {
    setPassword('')
    setConfirmPassword('')
  }

  const showSwal = (icon, title, message) => {
    Swal.fire({
      icon: icon,
      title: title,
      text: message,
      timer: 1000,
      footer: '@sikomen'
    }).then(result => {
      hideAlert()
    })
  }

  const onSubmit = (data) => {
    if (password === confirmPassword) {
      axios.post(`${appContext.backEndUsers}/resetpassword`, {
        userId: appContext.user,
        password: password
      })
        .then(response => {
          if (response.data.results === null) {
            showSwal('warning', 'Password Gagal Di Reset', '')
          } else {
            showSwal('success', 'Password Berhasil Di Reset', '')
          }
        }).catch(error => {
          showSwal('error', 'Gagal Reset Password', error)
          console.log(error)
        })
    }
  }

  const content = (
    <>
      {/* <Container fluid align-items-center> */}
      <Row>
        <Col xs='12' sm='12' md={{ size: 4, offset: 4 }}>
          <Card>
            <CardBody className='p-4'>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Label htmlFor='prependedInput' className='register-label-header'>
                    Reset Password
                </Label>
                <ColoredLine color='#ff9375' />
                <InputanPassword
                  icon='icon-lock'
                  name='password'
                  value={password}
                  change={e => setPassword(e.target.value)}
                  placeholder='Password'
                  innerRef={register({
                    required: true
                  })}
                  error={<ErrorMessage error={errors.password} />}
                />
                <InputanPassword
                  icon='icon-lock'
                  name='confirmPassword'
                  value={confirmPassword}
                  change={e => setConfirmPassword(e.target.value)}
                  placeholder='Tulis Ulang Password'
                  innerRef={register({
                    required: true
                  })}
                  error={<ErrorMessage error={errors.confirmPassword} />}
                />

                <Button color='danger' block size='lg'>
                    Reset Password
                </Button>
              </Form>
            </CardBody>
            <CardFooter className='text-center'>
              <Label htmlFor='prependedInput'>Pastikan data yang di Input sudah Benar.</Label>
            </CardFooter>
          </Card>
        </Col>
      </Row>
      {/* </Container> */}
    </>
  )
  return content
}

export default ProjectInput
