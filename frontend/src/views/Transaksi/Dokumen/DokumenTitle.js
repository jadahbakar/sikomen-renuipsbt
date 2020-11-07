/* eslint-disable camelcase */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { Label, Row, Col } from 'reactstrap'
import PropTypes from 'prop-types'
import { Http3 } from 'component'
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

const DokumenTitle = () => {
  const appContext = useContext(AppContext)

  // --------------------------------------- DidMount
  const getMaster = async () => {
    const resPropinsi = await Http3(`${appContext.backEndMaster}/propinsi/${appContext.propinsi}`)
    appContext.setPropinsiNama(resPropinsi)
    const resKategori = await Http3(`${appContext.backEndMaster}/projectkategori/${appContext.kategori}`)
    appContext.setKategoriNama(resKategori)
    const resJenis = await Http3(`${appContext.backEndMaster}/projectjenisid/${appContext.kategori}/${appContext.jenis}`)
    appContext.setJenisNama(resJenis)

    // const resPropinsi = await Http3(`${appContext.backEndMaster}/propinsi/13`)
    // appContext.setPropinsiNama(resPropinsi)
    // const resKategori = await Http3(`${appContext.backEndMaster}/projectkategori/1`)
    // appContext.setKategoriNama(resKategori)
    // const resJenis = await Http3(`${appContext.backEndMaster}/projectjenisid/1/1`)
    // appContext.setJenisNama(resJenis)
  }

  useEffect(() => {
    getMaster()
  }, [])

  // --------------------------------------- Main
  const content = (
    <>
      <Label htmlFor='prependedInput' className='register-label-header'> Kategori, Lokasi dan Jenis </Label>
      <ColoredLine color='#ff9375' />
      <Row>
        <Col md='4' lg='4' xl='4' sm='auto' xs='auto'>
          <Row>
            <Col md='3' lg='3' xl='3' sm='auto' xs='auto'> <Label htmlFor='prependedInput' className='register-label-header'> Kategori </Label> </Col>
            <Col md='9' lg='9' xl='9' sm='auto' xs='auto'> <Label htmlFor='prependedInput' className='register-label-header'> <b><u>{appContext.kategori} -  {appContext.kategoriNama} </u></b></Label> </Col>
          </Row>
        </Col>
        <Col md='4' lg='4' xl='4' sm='auto' xs='auto'>
          <Row>
            <Col md='3' lg='3' xl='3' sm='auto' xs='auto'> <Label htmlFor='prependedInput' className='register-label-header'> Propinsi </Label> </Col>
            <Col md='9' lg='9' xl='9' sm='auto' xs='auto'> <Label htmlFor='prependedInput' className='register-label-header'> <b> <u>{appContext.propinsi} - {appContext.propinsiNama} </u></b></Label> </Col>
          </Row>
        </Col>
        <Col md='4' lg='4' xl='4' sm='auto' xs='auto'>
          <Row>
            <Col md='3' lg='3' xl='3' sm='auto' xs='auto'> <Label htmlFor='prependedInput' className='register-label-header'> Jenis </Label> </Col>
            <Col md='9' lg='9' xl='9' sm='auto' xs='auto'> <Label htmlFor='prependedInput' className='register-label-header'> <b><u>{appContext.jenis} - {appContext.jenisNama} </u></b></Label> </Col>
          </Row>
        </Col>

      </Row>
    </>
  )
  return content
}

export default DokumenTitle
