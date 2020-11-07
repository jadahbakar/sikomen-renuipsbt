/* eslint-disable camelcase */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from 'react'
import { Button, Card, CardBody, CardFooter, Col, Container, Row, Label, Form, FormGroup } from 'reactstrap'
import { Inputan, InputanSelect, useHttp2 } from 'component'
import Swal from 'sweetalert2'
import PropTypes from 'prop-types'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { withRouter, Redirect, useHistory } from 'react-router-dom'

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

const Content = (props) => {
  const appContext = useContext(AppContext)
  const history = useHistory()

  // -------------------------------------------------- initialize
  const { errors, register, handleSubmit } = useForm()
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

  const urlProject = `${appContext.backEndProject}/${appContext.projectId}`
  const urlPic = `${appContext.backEndProject}/pic/${appContext.projectId}`

  const backEndJenis = `${appContext.backEndMaster}/projectjeniskategori/${kategori}`
  const kategoriList = useHttp2(`${appContext.backEndKategori}`, [])
  const PropinsiList = useHttp2(`${appContext.backEndPropinsi}`, [])
  // const StatusiList = useHttp2(`${appContext.backEndStatus}`, [])
  // const EngineeringiList = useHttp2(`${appContext.backEndEngineering}`, [])
  const JenisByKategoriList = useHttp2(`${backEndJenis}`, [kategori])

  // --------------------------------------------------  ComponenDidMount
  useEffect(() => {
    // --- Get Project Detail
    axios
      .get(urlProject)
      .then(response => {
        const {
          project_kategori,
          project_jenis,
          project_propinsi,
          project_nama,
          project_nomor_kontrak,
          project_kontraktor_nama,
          project_target_cod,
          project_status,
          project_engineering_status
        } = response.data.results.projectAll[0]
        setKategori(project_kategori)
        setJenis(project_jenis)
        setPropinsi(project_propinsi)
        setNamaProject(project_nama)
        setNoKontrak(project_nomor_kontrak)
        setKontraktor(project_kontraktor_nama)
        setTargetCod(project_target_cod)
        setProjectStatus(project_status)
        setEngineering(project_engineering_status)
      })
      .catch(errors => { console.log(errors) })

    // --- Get Project PIC
    axios
      .get(urlPic)
      .then(response => {
        const dataPic = response.data.results.projectPic
        dataPic.forEach(detail => {
          if (detail.project_pic_type === 2) {
            picKontraktorArr.push({
              picKontraktor: detail.project_pic_nama
            })
          } else {
            picPlnrArr.push({
              picPln: detail.project_pic_nama
            })
          }
        })
      })
      .catch(errors => { console.log(errors) })
  }, [])

  // -------------------------------------------------- Only Number
  const filterNonDigits = value => (value ? value.replace(/\D+/, '') : '')

  const hideAlert = () => {
    // clearForm()
    // props.history.push('/transaksi/projects')
    history.goBack()
  }

  const kategoriSelectHandler = e => {
    setKategori(e.target.value)
    setJenis(0)
    JenisByKategoriList.length = 0
  }

  const handleAddPicKontraktor = () => {
    if (picKontraktor !== '') {
      picKontraktorArr.push({
        picKontraktor: picKontraktor.toUpperCase()
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

  // --------------------------------------------------  On Submit
  const onSubmit = (e) => {
    // ---Submit
    // "("p_action" text, "p_project_id" int4, "p_project_kategori" int4, "p_project_propinsi" int4, "p_project_jenis" int4, "p_project_nama" text, "p_project_nomor_kontrak" text, "p_project_kontraktor_nama" text, "p_project_target_cod" int4, "p_project_status" int4, "p_project_engineering_status" int
    // axios.defaults.headers.common.Authorization = appContext.token
    axios
      .put(`${appContext.backEndProject}`, {
        action: 'u',
        id: appContext.projectId,
        kategori: parseInt(kategori),
        propinsi: parseInt(propinsi),
        jenis: parseInt(jenis),
        nama: namaProject,
        nomorKontrak: noKontrak,
        kontraktorNama: kontraktor,
        targetCod: targetCod,
        projectStatus: projectStatus,
        engineeringStatus: engineering,
        picPln: picPlnrArr,
        picKontraktor: picKontraktorArr
      })
      .then(response => {
        hideAlert()
        // console.log('response', response.data.results)
        // Swal.fire({
        //   type: 'success',
        //   title: 'Success',
        //   text: `ID Project : ${response.data.results} Updated`,
        //   timer: 1000,
        //   footer: '@sikomen'
        // }).then(result => {
        //   hideAlert()
        // })
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

  const content = (
    <>
      <Container fluid>
        <Card>
          <CardBody className='p-4'>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Label htmlFor='prependedInput' className='register-label-header'>
                    Kategori, Lokasi dan Jenis - {appContext.projectId}
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
              <Inputan
                icon='icon-pencil'
                name='namaProject'
                type='text'
                value={namaProject}
                change={e => setNamaProject(e.target.value)}
                placeholder='PROJECT NAME'
                innerRef={register({ required: true, minLength: 3 })}
                error={<ErrorMessage error={errors.namaProject} />}
              />
              <Inputan
                icon='icon-pencil'
                name='noKontrak'
                type='text'
                value={noKontrak}
                change={e => setNoKontrak(e.target.value)}
                placeholder='CONTRACT NO.'
                innerRef={register({ required: true, minLength: 3 })}
                error={<ErrorMessage error={errors.noKontrak} />}
              />
              <Row>
                <Col md='6' lg='6' xl='6' sm='auto' xs='auto'>
                  <Inputan
                    icon='icon-pencil'
                    name='noKontrak'
                    type='text'
                    value={kontraktor}
                    change={e => setKontraktor(e.target.value)}
                    placeholder='CONTRACTOR'
                    innerRef={register({ required: true, minLength: 3 })}
                    error={<ErrorMessage error={errors.noKontrak} />}
                  />
                </Col>
                <Col md='6' lg='6' xl='6' sm='auto' xs='auto'>
                  <Inputan
                    icon='icon-pencil'
                    name='targetCod'
                    type='text'
                    value={targetCod}
                    change={e => setTargetCod(filterNonDigits(e.target.value))}

                    placeholder='TARGET COD'
                    innerRef={register({ required: true, minLength: 3 })}
                    error={<ErrorMessage error={errors.targetCod} />}
                  />
                </Col>
              </Row>
              <Row>
                <Col md='6' lg='6' xl='6' sm='auto' xs='auto'>
                  <Inputan
                    icon='icon-pencil'
                    name='projectStatus'
                    type='text'
                    value={projectStatus}
                    change={e => setProjectStatus(e.target.value)}
                    placeholder='Project Status'
                    innerRef={register({ required: true, minLength: 3 })}
                    error={<ErrorMessage error={errors.projectStatus} />}
                  />

                </Col>
                <Col md='6' lg='6' xl='6' sm='auto' xs='auto'>
                  <Inputan
                    icon='icon-pencil'
                    name='engineering'
                    type='text'
                    value={engineering}
                    change={e => setEngineering(e.target.value)}
                    placeholder='Project Status'
                    innerRef={register({ required: true })}
                    error={<ErrorMessage error={errors.engineering} />}
                  />
                </Col>
              </Row>
              <Label htmlFor='prependedInput' className='register-label-header'>
                    Person In Charge - Kontraktor
              </Label>
              <ColoredLine color='#ff9375' />
              {/* --------------- */}
              {/* PIC Kontraktor */}
              <Row>
                <Col md='10' lg='10' xl='10' sm='auto' xs='auto'>
                  <Inputan
                    icon='fa fa-user'
                    name='picKontraktor'
                    type='text'
                    value={picKontraktor}
                    change={e => setPicKontraktor(e.target.value)}
                    placeholder='Nama PIC Kontraktor'
                  />
                </Col>
                <Col md='2' lg='2' xl='2' sm='auto' xs='auto'>
                  <Row>
                    <Col className='pull-right'>
                      <FormGroup>
                        <div className='control'>
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
              {/* Looping PIC Kontraktor */}
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

              {/* --------------- */}
              {/* PIC PLN */}
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
              {/* Looping PIC PLN */}

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

              <Button color='info' block size='lg'>
                   UPDATE PROJECT
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

const ProjectEdit = () => {
  const appContext = useContext(AppContext)
  if (appContext.projectId !== '') {
    return <Content />
  } else {
    return <Redirect to='/transaksi/projects' />
  }
}

export default withRouter(ProjectEdit)
