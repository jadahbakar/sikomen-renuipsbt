/* global sessionStorage */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardGroup, Col, Container, Row, Form } from 'reactstrap'
import { Inputan, MyAlert } from 'component'
import axios from 'axios'
import { useForm } from 'react-hook-form'

import { API_ROOT } from 'api'
import ErrorMessage from './errorMessage'
import { getPackageJson } from 'utils'
import { AppContext } from '../../../context'

import styles from './login.css'
import logoPln from '../../../assets/img/brand/logo_pln.png'
const backEndLogin = `${API_ROOT}/login`

const Login = () => {
  const login = (
    <div className='app flex-row align-items-center'>
      <Container>
        <Row className='justify-content-center'>
          <Col md='8'>
            <CardGroup className='box'>
              <LeftCard />
              <RightCard />
            </CardGroup>
            <BottomTitle />
          </Col>
        </Row>
      </Container>
    </div>
  )

  return login
}

const LeftCard = () => {
  const appContext = useContext(AppContext)
  const { LeftCard, FontButton, FontAnchorLupaPassword } = styles
  const { errors, register, handleSubmit, reset } = useForm({ defaultValues: { username: '', password: '' } })

  const hideAlert = () => {
    reset()
  }

  const onSubmit = (data) => {
    // console.log(data)
    const { username, password } = data
    axios
      .post(`${backEndLogin}`, { username, password })
      .then(response => {
        // console.log('LeftCard -> response', response)
        const { token, getUser } = response.data.results
        sessionStorage.clear()
        sessionStorage.setItem('tkn', token)
        sessionStorage.setItem('login', false)
        sessionStorage.setItem('userid', username)
        sessionStorage.setItem('role', getUser.users_role)

        if (getUser.users_status === 1) {
          window.location.href = '/'
        } else {
          MyAlert('warning', '', 'Maaf User Anda Tidak Aktif...\n Silahkan Menghubungi Admin...', 2000, hideAlert)
        }
      })
      .catch(error => {
        console.log('TCL: LeftCard -> error', error)
        MyAlert('warning', 'Maaf Terdapat Kegagalan', `[${error}] ${error}`, 2000, hideAlert)
      })
  }

  const content = (
    <Card
      className={`p-4 ${LeftCard}`}
    >
      <CardBody>
        <h1>Login</h1>
        <p className='text-muted'>Sign In to your account</p>
        <br />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Inputan
            icon='fa fa-user'
            name='username'
            type='text'
            placeholder='Username'
            focus
            innerRef={register({ required: true, minLength: 3 })}
            error={<ErrorMessage error={errors.username} />}
          />

          <Inputan
            icon='fa fa-lock'
            name='password'
            type='password'
            placeholder='Password'
            innerRef={register({ required: true, minLength: 1 })}
            error={<ErrorMessage error={errors.password} />}
          />

          <Row>
            <Col xs='12'>
              <Button className='btn btn-primary' block color='primary'>
                <font className={`${FontButton}`} color='white'>
                  Login
                </font>
              </Button>
            </Col>
          </Row>

          <Row style={{ marginTop: '1.5em' }}>
            <Col xs='6' className='text-left'>
              <Link to='/forgetpassword' className='custom-link'>
                <span className={`${FontAnchorLupaPassword}`}>Lupa password?</span>
              </Link>
            </Col>
            {/* <Col xs='6' className='text-right'>
              <Link to='/register' className='custom-link'>
                <span className='FontAnchorLupaRegister'>New? Registrasi</span>
              </Link>
            </Col> */}
          </Row>
        </Form>
      </CardBody>
    </Card>
  )
  return content
}

const RightCard = () => {
  const content = (
    <Card className='RightCard'>
      <div style={{ paddingTop: '1.3em', width: '100%', textAlign: 'center' }}>
        <img src={logoPln} style={{ height: 325, width: 242 }} alt='Logo PLN' />
      </div>
    </Card>
  )
  return content
}

const BottomTitle = () => {
  const content = (
    <div className='text-center BottomPaddingTop'>
      <font className='BottomFont'>© {getPackageJson.description} [ 2020 ]</font>
    </div>
  )
  return content
}

export default Login
