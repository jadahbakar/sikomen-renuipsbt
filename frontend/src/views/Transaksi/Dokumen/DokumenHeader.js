/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React, { Fragment, useContext, useState } from 'react'
import { Label, Row, Col } from 'reactstrap'
import PropTypes from 'prop-types'
import axios from 'axios'
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

const DokumenHeader = (props) => {
  const appContext = useContext(AppContext)
  // console.log('DokumenHeader -> props', props)

  const urlProject = `${appContext.backEndProject}/${props.projectId}`

  const [kategori, setKategori] = useState('')
  const [jenis, setJenis] = useState('')
  const [propinsi, setPropinsi] = useState('')
  const [namaProject, setNamaProject] = useState('')
  const [noKontrak, setNoKontrak] = useState('')
  const [kontraktor, setKontraktor] = useState('')
  const [targetCod, setTargetCod] = useState('')
  const [projectStatus, setProjectStatus] = useState('')
  const [engineering, setEngineering] = useState('')

  // --------------------------------------- DidMount
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

  // --------------------------------------- Main
  const content = (
    <Fragment key={appContext.projectId}>
      <Label htmlFor='prependedInput' className='register-label-header'> Detail Project - <b>{appContext.projectId}</b></Label>
      <ColoredLine color='#ff9375' />
      <Row>
        <Col md='2' lg='2' xl='2' sm='auto' xs='auto'>
          <Label htmlFor='prependedInput' className='register-label-header'> Nama Project </Label>
        </Col>
        <Col md='10' lg='10' xl='10' sm='auto' xs='auto'>
          <Label htmlFor='prependedInput' className='register-label-header'> <b> {namaProject} </b></Label>
        </Col>
      </Row>
      <Row>
        <Col md='2' lg='2' xl='2' sm='auto' xs='auto'>
          <Label htmlFor='prependedInput' className='register-label-header'> Nomor Kontrak</Label>
        </Col>
        <Col md='10' lg='10' xl='10' sm='auto' xs='auto'>
          <Label htmlFor='prependedInput' className='register-label-header'> <b> {noKontrak} </b></Label>
        </Col>
      </Row>

      <Row>
        <Col md='6' lg='6' xl='6' sm='auto' xs='auto'>
          <Row>
            <Col md='4' lg='4' xl='4' sm='auto' xs='auto'>
              <Label htmlFor='prependedInput' className='register-label-header'>Kontraktor</Label>
            </Col>
            <Col md='8' lg='8' xl='8' sm='auto' xs='auto'>
              <Label htmlFor='prependedInput' className='register-label-header'> <b> {kontraktor} </b></Label>
            </Col>
          </Row>
        </Col>
        <Col md='6' lg='6' xl='6' sm='auto' xs='auto'>
          <Row>
            <Col md='4' lg='4' xl='4' sm='auto' xs='auto'>
              <Label htmlFor='prependedInput' className='register-label-header'> Target COD </Label>
            </Col>
            <Col md='8' lg='8' xl='8' sm='auto' xs='auto'>
              <Label htmlFor='prependedInput' className='register-label-header'> <b> {targetCod} </b></Label>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col md='6' lg='6' xl='6' sm='auto' xs='auto'>
          <Row>
            <Col md='4' lg='4' xl='4' sm='auto' xs='auto'>
              <Label htmlFor='prependedInput' className='register-label-header'> Project Status  </Label>
            </Col>
            <Col md='8' lg='8' xl='8' sm='auto' xs='auto'>
              <Label htmlFor='prependedInput' className='register-label-header'> <b> {projectStatus}  </b></Label>
            </Col>
          </Row>
        </Col>
        <Col md='6' lg='6' xl='6' sm='auto' xs='auto'>
          <Row>
            <Col md='4' lg='4' xl='4' sm='auto' xs='auto'>
              <Label htmlFor='prependedInput' className='register-label-header'> Engineering </Label>
            </Col>
            <Col md='8' lg='8' xl='8' sm='auto' xs='auto'>
              <Label htmlFor='prependedInput' className='register-label-header'> <b> {engineering} </b></Label>
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  )
  return content
}

export default DokumenHeader
