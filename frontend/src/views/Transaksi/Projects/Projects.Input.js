/* eslint-disable no-unused-vars */
/* global sessionStorage */
import React, { useState, useEffect, useContext } from 'react'
import { Button, Card, Input, CardHeader, CardBody, CardFooter, Col, Container, Row, Label, Form, FormGroup } from 'reactstrap'
import { Inputan, InputanPassword, InputanSelect, useHttp2, useHttp } from 'component'
import Swal from 'sweetalert2'
import PropTypes from 'prop-types'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { Redirect } from 'react-router-dom'
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
  const { errors, register, handleSubmit } = useForm()
  const appContext = useContext(AppContext)

  const [kategori, setKategori] = useState('')
  const [jenis, setJenis] = useState('')
  const [propinsi, setPropinsi] = useState('')
  const [namaProject, setNamaProject] = useState('')
  const [noKontrak, setNoKontrak] = useState('')
  const [kontraktor, setKontraktor] = useState('')
  const [targetCod, setTargetCod] = useState('')
  const [projectStatus, setProjectStatus] = useState('')
  const [engineering, setEngineering] = useState('')
  const [picKontraktor, setPicKontraktor] = useState('')
  const [picKontraktorArr, setPicKontraktorArr] = useState([])
  const [picPln, setPicPln] = useState('')
  const [picPlnrArr, setPicPlnrArr] = useState([])

  const backEndJenis = `${appContext.backEndMaster}/projectjeniskategori/${kategori}`

  // --------------------------------------- DidMount
  const kategoriList = useHttp2(`${appContext.backEndKategori}`, [])
  const JenisByKategoriList = useHttp2(`${backEndJenis}`, [kategori])
  const PropinsiList = useHttp2(`${appContext.backEndPropinsi}`, [])
  // const StatusiList = useHttp2(`${appContext.backEndStatus}`, [])
  // const EngineeringiList = useHttp2(`${appContext.backEndEngineering}`, [])

  // --------------------------------------- Only Number
  const filterNonDigits = value => (value ? value.replace(/\D+/, '') : '')

  // --------------------------------------- T E M P A T   T I N G G A L
  const kategoriSelectHandler = e => {
    setKategori(e.target.value)
    setJenis(0)
    JenisByKategoriList.length = 0
  }

  const jenisSelectHandler = e => {
    setJenis(e.target.value)
  }

  // --------------------------------------- A L E R T
  const renderRedirect = () => {
    return <Redirect to='/' />
  }

  const hideAlert = () => {
    props.history.push('/transaksi/projects')
    // window.location.replace('/transaksi/projects')
    // return <Redirect to='/' />
  }

  // --------------------------------------- S U B M I T
  const cleanIt = string => {
    const regexUnderscore = new RegExp('_', 'g') // indicates global match
    const regexHash = new RegExp(' ', 'g')
    return string.replace(regexHash, '').replace(regexUnderscore, '')
  }

  const onSubmit = data => {
    // ---Submit
    axios
      .post(`${appContext.backEndProject}`, {
        action: 'i',
        id: 0,
        kategori: parseInt(kategori),
        propinsi: parseInt(propinsi),
        jenis: parseInt(jenis),
        nama: namaProject,
        nomorKontrak: noKontrak,
        kontraktorNama: kontraktor,
        targetCod: targetCod,
        status: projectStatus,
        engineeringStatus: engineering,
        picPln: picPlnrArr,
        picKontraktor: picKontraktorArr
      })
      .then(response => {
        console.log('response', response)

        Swal.fire({
          icon: 'success',
          position: 'top-end',
          title: 'Success',
          text: `ID Project : ${response.data.results}`,
          timer: 1000,
          footer: '@sikomen'
        }).then(result => {
          hideAlert()
        })
      })
      .catch(error => {
        console.log('error', error)
        let keterangan = error.response.data
        if (error.response.data.includes('duplicate')) {
          keterangan = 'Data Sudah Ada'
        }
        Swal.fire({
          type: 'error',
          title: 'Gagal Menyimpan',
          text: keterangan,
          timer: 1000,
          footer: '@sikomen'
        }).then(result => {
          hideAlert()
        })
      })
  }

  const handleAddPicKontraktor = () => {
    if (picKontraktor !== '') {
      picKontraktorArr.push({
        picKontraktor: (picKontraktor).toUpperCase()
      })
    }
    setPicKontraktor('')
  }

  const handleRemovePicKontraktor = index => () => {
    setPicKontraktorArr(picKontraktorArr.filter((s, sidx) => index !== sidx))
  }

  const handleAddPicPln = () => {
    if (picPln !== '') {
      picPlnrArr.push({
        picPln: picPln.toUpperCase()
      })
    }
    setPicPln('')
  }

  const handleRemovePicPln = index => () => {
    setPicPlnrArr(picPlnrArr.filter((s, sidx) => index !== sidx))
  }

  const content = (
    <>
      <Container fluid>
        <Card>
          <CardBody className='p-4'>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Label htmlFor='prependedInput' className='register-label-header'>
                    Kategori, Lokasi dan Jenis
              </Label>
              <ColoredLine color='#ff9375' />
              <Row>
                <Col md='4' lg='4' xl='4' sm='auto' xs='auto'>
                  <InputanSelect
                    icon='icon-list'
                    name='kategori'
                    value={kategori}
                    change={kategoriSelectHandler}
                    placeholder='Kategori'
                    innerRef={register({ required: true })}
                    error={<ErrorMessage error={errors.kategori} />}
                  >
                    <option key='' value=''>
                          Pilih Kategori...
                    </option>
                    {kategoriList.map(detail => (
                      <option key={detail.project_kategori_id} value={detail.project_kategori_id}>
                        {detail.project_kategori_nama}
                      </option>
                    ))}
                  </InputanSelect>
                </Col>
                <Col md='4' lg='4' xl='4' sm='auto' xs='auto'>
                  <InputanSelect
                    icon='icon-location-pin'
                    name='propinsi'
                    value={propinsi}
                    change={(e) => setPropinsi(e.target.value)}
                    placeholder='Propinsi'
                    innerRef={register({ required: true })}
                    error={<ErrorMessage error={errors.propinsi} />}
                  >
                    <option key='' value=''>
                          Pilih Propinsi...
                    </option>
                    {PropinsiList.map(detail => (
                      <option key={detail.propinsi_id} value={detail.propinsi_id}>
                        {detail.propinsi_nama}
                      </option>
                    ))}
                  </InputanSelect>
                </Col>

                <Col md='4' lg='4' xl='4' sm='auto' xs='auto'>
                  <InputanSelect
                    icon='icon-list'
                    name='jenis'
                    value={jenis}
                    change={(e) => setJenis(e.target.value)}
                    placeholder='Jenis'
                    innerRef={register({ required: true })}
                    error={<ErrorMessage error={errors.jenis} />}
                  >
                    <option key='' value=''>
                          Pilih Jenis...
                    </option>
                    {JenisByKategoriList.map(detail => (
                      <option key={detail.project_jenis_id} value={detail.project_jenis_id}>
                        {detail.project_jenis_nama}
                      </option>
                    ))}
                  </InputanSelect>
                </Col>
              </Row>
              <Label htmlFor='prependedInput' className='register-label-header'>
                    Data Project
              </Label>
              <ColoredLine color='#ff9375' />
              {/* <FormGroup row>
                <Label for='exampleEmail' sm={1}>Email</Label>
                <Col sm={11}>
                  <Input type='email' name='email' id='exampleEmail' placeholder='with a placeholder' />
                </Col>
              </FormGroup> */}
              <FormGroup row>
                <Col md='2' lg='2' xl='2' sm='auto' xs='auto'>
                  <Label htmlFor='prependedInput' className='register-label-header'> Nama Project </Label>
                </Col>
                <Col md='10' lg='10' xl='10' sm='auto' xs='auto'>
                  <Inputan
                    icon='icon-pencil'
                    name='namaProject'
                    type='text'
                    value={namaProject}
                    change={e => setNamaProject(e.target.value)}
                    placeholder='Nama Project'
                    innerRef={register({ required: true, minLength: 3 })}
                    error={<ErrorMessage error={errors.namaProject} />}
                  />
                </Col>

                <Col md='2' lg='2' xl='2' sm='auto' xs='auto'>
                  <Label htmlFor='prependedInput' className='register-label-header'> Nomor Kontrak</Label>
                </Col>
                <Col md='10' lg='10' xl='10' sm='auto' xs='auto'>
                  <Inputan
                    icon='icon-pencil'
                    name='noKontrak'
                    type='text'
                    value={noKontrak}
                    change={e => setNoKontrak(e.target.value)}
                    placeholder='Nomor Kontrak'
                    innerRef={register({ required: true, minLength: 3 })}
                    error={<ErrorMessage error={errors.noKontrak} />}
                  />
                </Col>

                <Col md='6' lg='6' xl='6' sm='6' xs='auto'>
                  <Row>
                    <Col md='3' lg='3' xl='3' sm='3' xs='auto'>
                      <Label htmlFor='prependedInput' className='register-label-header'> Kontraktor </Label>
                    </Col>
                    <Col md='9' lg='9' xl='9' sm='9' xs='auto'>
                      <Inputan
                        icon='icon-pencil'
                        name='kontraktor'
                        type='text'
                        value={kontraktor}
                        change={e => setKontraktor(e.target.value)}
                        placeholder='Nama Kontraktor'
                        innerRef={register({ required: true, minLength: 3 })}
                        error={<ErrorMessage error={errors.noKontrak} />}
                      />
                    </Col>

                  </Row>
                </Col>
                <Col md='6' lg='6' xl='6' sm='auto' xs='auto'>
                  <Row>
                    <Col md='4' lg='4' xl='4' sm='auto' xs='auto'>
                      <Label htmlFor='prependedInput' className='register-label-header'> Target COD </Label>
                    </Col>
                    <Col md='8' lg='8' xl='8' sm='auto' xs='auto'>
                      <Inputan
                        icon='icon-pencil'
                        name='targetCod'
                        type='text'
                        value={targetCod}
                        change={e => setTargetCod(filterNonDigits(e.target.value))}
                        placeholder='Target  COD'
                        innerRef={register({ required: true, minLength: 4 })}
                        error={<ErrorMessage error={errors.targetCod} />}
                      />
                    </Col>
                  </Row>
                </Col>

                <Col md='6' lg='6' xl='6' sm='auto' xs='auto'>
                  <Row>
                    <Col md='3' lg='3' xl='3' sm='3' xs='auto'>
                      <Label htmlFor='prependedInput' className='register-label-header'> Project Status </Label>
                    </Col>
                    <Col md='9' lg='9' xl='9' sm='auto' xs='auto'>
                      <Inputan
                        icon='icon-pencil'
                        name='status'
                        type='text'
                        value={projectStatus}
                        change={e => setProjectStatus(e.target.value)}
                        placeholder='Project Status'
                        innerRef={register({ required: true, minLength: 3 })}
                        error={<ErrorMessage error={errors.status} />}
                      />
                    </Col>
                  </Row>
                </Col>

                <Col md='6' lg='6' xl='6' sm='auto' xs='auto'>
                  <Row>
                    <Col md='4' lg='4' xl='4' sm='4' xs='auto'>
                      <Label htmlFor='prependedInput' className='register-label-header'> Enginering Status </Label>
                    </Col>
                    <Col md='8' lg='8' xl='8' sm='auto' xs='auto'>
                      <Inputan
                        icon='icon-pencil'
                        name='engineering'
                        type='text'
                        value={engineering}
                        change={e => setEngineering(e.target.value)}
                        placeholder='Enginering Status'
                        innerRef={register({ required: true })}
                        error={<ErrorMessage error={errors.engineering} />}
                      />
                    </Col>
                  </Row>
                </Col>

              </FormGroup>

              <Label htmlFor='prependedInput' className='register-label-header'>
                    Person In Charge - Kontraktor
              </Label>
              <ColoredLine color='#ff8375' />
              <Row>
                <Col md='10' lg='10' xl='10' sm='auto' xs='auto'>
                  <Inputan
                    icon='fa fa-user'
                    name='picKontraktor'
                    type='text'
                    value={picKontraktor}
                    change={e => setPicKontraktor(e.target.value)}
                    placeholder='Nama PIC Kontraktor'
                    // innerRef={register({ required: true, minLength: 3 })}
                    // error={<ErrorMessage error={errors.picKontraktor} />}
                  />
                </Col>
                <Col md='2' lg='2' xl='2' sm='auto' xs='auto'>
                  <Row>
                    <Col className='pull-right'>
                      <FormGroup>
                        <div className='control'>
                          {/* <Button
                            colour='success'
                            className='btn-dropbox btn-brand mr-1 mr-auto'
                            size='sm'
                            onClick={handleAddPicKontraktor}
                          > */}
                          <Button
                            color='success'
                            block
                            className='pr-1'
                            onClick={handleAddPicKontraktor}
                          >
                            <i className='fa fa-plus' />
                            <span>Tambah PIC</span>
                          </Button>
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
              </Row>
              {picKontraktorArr.map((detail, index) => {
                return (
                  <div key={index}>
                    <Row>
                      <Col md='10' lg='10' xl='10' sm='auto' xs='auto'>
                        <Inputan
                          icon='fa fa-user'
                          name='picKontraktor'
                          type='text'
                          value={detail.picKontraktor}
                          isdisabled
                        />
                      </Col>
                      <Col md='2' lg='2' xl='2' sm='auto' xs='auto'>
                        <Row>
                          <Col className='pull-right'>
                            <FormGroup>
                              <div className='control'>
                                {/* <Button
                                  className='btn-google-plus btn-brand mr-1 mr-auto'
                                  size='sm'
                                  onClick={handleRemovePicKontraktor(index)}
                                > */}
                                <Button
                                  color='danger'
                                  block
                                  className='pr-1'
                                  onClick={handleRemovePicKontraktor(index)}
                                >
                                  <i className='fa fa-minus' />
                                  <span>Hapus PIC</span>
                                </Button>
                              </div>
                            </FormGroup>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                )
              })}

              <Label htmlFor='prependedInput' className='register-label-header'>
                    Person In Charge - PLN
              </Label>
              <ColoredLine color='#ff9375' />
              <Row>
                <Col md='10' lg='10' xl='10' sm='auto' xs='auto'>
                  <Inputan
                    icon='fa fa-user-o'
                    name='picPln'
                    type='text'
                    value={picPln}
                    change={e => setPicPln(e.target.value)}
                    placeholder='Nama PIC PLN'
                  />
                </Col>
                <Col md='2' lg='2' xl='2' sm='auto' xs='auto'>
                  <Row>
                    <Col className='pull-right'>
                      <FormGroup>
                        <div className='control'>
                          {/* <Button
                            className='btn-dropbox btn-brand mr-1 mr-auto'
                            size='sm'
                            onClick={handleAddPicPln}
                          > */}
                          <Button
                            color='success'
                            block
                            className='pr-1'
                            onClick={handleAddPicPln}
                          >
                            <i className='fa fa-plus' />
                            <span>Tambah PIC</span>
                          </Button>
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
              </Row>
              {picPlnrArr.map((detail, index) => {
                return (
                  <div key={index}>
                    <Row>
                      <Col md='10' lg='10' xl='10' sm='auto' xs='auto'>
                        <Inputan
                          icon='fa fa-user'
                          name='picPln'
                          type='text'
                          value={detail.picPln}
                          isdisabled
                        />
                      </Col>
                      <Col md='2' lg='2' xl='2' sm='auto' xs='auto'>
                        <Row>
                          <Col className='pull-right'>
                            <FormGroup>
                              <div className='control'>
                                {/* <Button
                                  className='btn-google-plus btn-brand mr-1 mr-auto'
                                  size='sm'
                                  onClick={handleRemovePicPln(index)}
                                > */}
                                <Button
                                  color='danger'
                                  block
                                  className='pr-1'
                                  onClick={handleRemovePicPln(index)}
                                >
                                  <i className='fa fa-minus' />
                                  <span>Hapus PIC</span>
                                </Button>
                              </div>
                            </FormGroup>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                )
              })}

              <Button color='success' block size='lg'>
                   TAMBAH PROJECT
              </Button>
            </Form>
          </CardBody>
          <CardFooter className='text-center'>
            <Label htmlFor='prependedInput'>Pastikan data yang di Input sudah Benar.</Label>
          </CardFooter>
        </Card>

      </Container>
    </>
  )
  return content
}

export default ProjectInput
