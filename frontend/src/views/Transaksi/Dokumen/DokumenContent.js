/* eslint-disable camelcase */
/* global FormData */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState } from 'react'
import { Form, CardBody, CardFooter, Button, Label, Row, Col } from 'reactstrap'
import PropTypes from 'prop-types'
import axios from 'axios'
import ErrorMessage from './errorMessage'
import { useForm } from 'react-hook-form'
import { InputanSelect, useHttp2, Inputan, Switcher } from 'component'
import Swal from 'sweetalert2'
import { AppContext } from '../../../context'
import { dateDiff } from 'utils'
import './uploadbutton.css'

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

const DokumenHeader = () => {
  const appContext = useContext(AppContext)
  const { errors, register, handleSubmit } = useForm()

  // --------------------------------------- State
  const [dokumenId, setDokumenId] = useState()
  const [tipeDokumen, setTipeDokumen] = useState('')
  const [approvalFinal, setApprovalFinal] = useState('')
  const [suratKontraktor, setSuratKontraktor] = useState()
  const [tglSuratKontraktor, setTglSuratKontraktor] = useState()
  const [tglSuratDiterimaPln, setTglSuratDiterimaPln] = useState()
  const [nomorSuratPln, setNomorSuratPln] = useState('')
  const [tglSuratKeluarPln, setTglSuratKeluarPln] = useState()
  const [prosesApproval, setProsesApproval] = useState('')
  const [catatan, setCatatan] = useState()
  const [isToogled, setIsToogled] = useState(false)
  const [isToBeSubmited, setIsToBeSubmited] = useState(true)
  const [isDisable, setIsDisable] = useState(true)
  // eslint-disable-next-line no-unused-vars
  const [lampiran, setLampiran] = useState(null)
  const randomString = Math.random().toString(36)

  const dokumenStatusFinalList = useHttp2(`${appContext.backEndMaster}/dokumenstatus/all`, [])

  const tglSuratKeluarPlnSelectHandler = async (e) => {
    const value = e.target.value
    setTglSuratKeluarPln(value)
    const dateBetween = await dateDiff(tglSuratDiterimaPln, value)
    setProsesApproval(dateBetween)
  }

  // --------------------------------------- DidMount
  const projectJudul = useHttp2(`${appContext.backEndMaster}/projectrowbykategorijenis/${appContext.kategori}/${appContext.jenis}`, [])

  // --------------------------------------- OnChange
  const onChangeToogled = () => {
    setIsToogled(!isToogled)
    setIsToBeSubmited(isToogled)
    setIsDisable(isToogled)
    setApprovalFinal(0)
    setSuratKontraktor('')
    setTglSuratKontraktor('')
    setTglSuratDiterimaPln('')
    setNomorSuratPln('')
    setTglSuratKeluarPln('')
    setProsesApproval('')
    setCatatan('')
    setLampiran(randomString)
  }

  const onChangeToBeSubmited = (e) => {
    setApprovalFinal(e.target.value)

    if (e.target.value === '5') {
      setIsToBeSubmited(false)
      setIsDisable(true)
    } else {
      setIsToBeSubmited(false)
      setIsDisable(false)
    }
  }

  // --------------------------------------- Clear State
  const hideAlert = () => {
    setDokumenId(0)
    setTipeDokumen('')
    setApprovalFinal(0)
    setSuratKontraktor('')
    setTglSuratKontraktor('')
    setTglSuratDiterimaPln('')
    setNomorSuratPln('')
    setTglSuratKeluarPln('')
    setProsesApproval('')
    setCatatan('')
    setIsToogled(false)
    setIsDisable(true)
    setIsToBeSubmited(true)

    setLampiran(randomString)
  }

  const showSwal = (icon, title, message) => {
    Swal.fire({
      icon: icon,
      title: title,
      text: message,
      // timer: 1000,
      footer: '@sikomen'
    }).then(result => {
      hideAlert()
    })
  }

  // --------------------------------------- Submit
  const submitDetail = (dokumenMasterId, data) => {
    const dokumenSubmited = isToogled ? 1 : 0
    const formData = new FormData()
    // ----- Add lampiran
    formData.append('dokumenMasterId', dokumenMasterId)
    formData.append('dokumenSubmited', dokumenSubmited)
    formData.append('dokumenApprovalFinal', data.approvalFinal)
    formData.append('dokumenType', data.tipeDokumen)
    // alert(isDisable)
    if (isDisable) {
      formData.append('dokumenSuratKontraktor', '')
      formData.append('dokumenTanggalSuratKontraktor', '')
      formData.append('dokumenTanggalSuratDiterimaPln', '')
      formData.append('dokumenNomorSuratPln', '')
      formData.append('dokumenTanggalSuratKeluarPln', '')
      formData.append('dokumenProsesApproval', 0)
    } else {
      // alert('masuk....')
      for (let i = 0; i < data.lampiran.length; i++) {
        formData.append('lampiran', data.lampiran[i])
      }
      formData.append('dokumenSuratKontraktor', data.suratKontraktor)
      formData.append('dokumenTanggalSuratKontraktor', data.tglSuratKontraktor)
      formData.append('dokumenTanggalSuratDiterimaPln', data.tglSuratDiterimaPln)
      formData.append('dokumenNomorSuratPln', data.nomorSuratPln)
      formData.append('dokumenTanggalSuratKeluarPln', data.tglSuratKeluarPln)
      formData.append('dokumenProsesApproval', data.prosesApproval)
    }
    formData.append('dokumenCatatan', data.catatan)
    axios
      .post(`${appContext.backEndDokumen}/detail`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => {
        // console.log('DokumenHeader -> Detail', response)
        showSwal('success', 'Berhasil menyimpan', response.data.message)
      })
      .catch(error => {
        // console.log('catch detail error', error)
        showSwal('error', 'Gagal Menyimpan Dokumen Detail', error)
      })
  }

  const onSubmit = async (data) => {
    // saving detail Master
    axios
      .post(`${appContext.backEndDokumen}/master`, {
        projectId: appContext.projectId,
        dokumenRow: dokumenId
      })
      .then(response => {
        if (response.data.status !== 'success') {
          showSwal('error', 'Gagal Menyimpan Dokumen Master', response.data.message)
        }
        if (response.data.status === 'success' && response.data.results !== '') {
          // saving detail Dokumen
          const dokumenMasterId = response.data.results
          submitDetail(dokumenMasterId, data)
        } else {
          showSwal('error', 'Gagal Menyimpan Dokumen Master', response.data.message)
        }
      })
      .catch(error => {
        // console.log('catch master error', error)
        showSwal('error', 'Gagal Menyimpan Dokumen Master', error)
      })
  }

  // --------------------------------------- Main
  const content = (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <CardBody>
          <Row>
            <Col md='3' lg='3' xl='3' sm='auto' xs='auto'>
              <Label htmlFor='prependedInput' className='register-label-header'>Judul Dokumen</Label>
            </Col>
            <Col md='9' lg='9' xl='9' sm='auto' xs='auto'>
              <InputanSelect
                icon='icon-list'
                name='dokumenId'
                value={dokumenId}
                change={e => setDokumenId(e.target.value)}
                innerRef={register({ required: true })}
                error={<ErrorMessage error={errors.dokumenId} />}
              >
                <option key='' value=''>
                          Pilih Kategori...
                </option>
                {projectJudul.map(detail => (
                  detail.project_row_header === 0
                    ? <>
                      <option key={detail.project_row_id} value={detail.project_row_id}>
                        {detail.project_row_keterangan}
                      </option>
                    </>
                    : <></>
                ))}
              </InputanSelect>
            </Col>

          </Row>
          <ColoredLine color='#ff9375' />

          <Row>
            <Col md='3' lg='3' xl='3' sm='auto' xs='auto'>
              <Label htmlFor='prependedInput' className='register-label-header'>Tipe Dokumen</Label>
            </Col>
            <Col md='6' lg='6' xl='6' sm='auto' xs='auto'>
              <Inputan
                icon='icon-pencil'
                name='tipeDokumen'
                type='text'
                value={tipeDokumen}
                change={e => setTipeDokumen(e.target.value)}
                placeholder='Tipe Dokumen'
                innerRef={register({ required: true })}
                error={<ErrorMessage error={errors.tipeDokumen} />}
              />
            </Col>
          </Row>
          <Row>
            <Col md='3' lg='3' xl='3' sm='auto' xs='auto'>
              <Label htmlFor='prependedInput' className='register-label-header'>Dokumen Submited</Label>
            </Col>
            <Col md='1' lg='1' xl='1' sm='auto' xs='auto'>
              {/* <Switcher rounded isToogled={isToogled} onToogle={() => setIsToogled(!isToogled)} /> */}
              <Switcher rounded isToogled={isToogled} onToogle={onChangeToogled} />

            </Col>
            <Col md='1' lg='1' xl='1' sm='auto' xs='auto'>
              <Label htmlFor='prependedInput' className='register-label-header' style={{ marginTop: '0em', paddingTop: '0em', fontSize: '1.7em' }}>{isToogled ? 1 : 0}</Label>
            </Col>
          </Row>

          <Row>
            <Col md='3' lg='3' xl='3' sm='auto' xs='auto'>
              <Label htmlFor='prependedInput' className='register-label-header'>Status Approval (Final)</Label>
            </Col>
            <Col md='6' lg='6' xl='6' sm='auto' xs='auto'>

              <InputanSelect
                icon='icon-list'
                name='approvalFinal'
                value={approvalFinal}
                // change={kategoriSelectHandler}
                // change={e => setApprovalFinal(e.target.value)}
                change={onChangeToBeSubmited}
                placeholder='approvalFinal'
                innerRef={register({ required: true })}
                error={<ErrorMessage error={errors.approvalFinal} />}
                isdisabled={!isToogled}
              >
                <option key='' value=''>
                          Pilih Approval Final...
                </option>
                {dokumenStatusFinalList.map(detail => (
                  <option key={detail.dokumen_status_id} value={detail.dokumen_status_id}>
                    {detail.dokumen_status_nama}
                  </option>
                ))}
              </InputanSelect>

            </Col>
          </Row>
          <Row>
            <Col md='3' lg='3' xl='3' sm='auto' xs='auto'>
              <Label htmlFor='prependedInput' className='register-label-header'>Surat Kontraktor</Label>
            </Col>
            <Col md='6' lg='6' xl='6' sm='auto' xs='auto'>
              <Inputan
                icon='icon-pencil'
                name='suratKontraktor'
                type='text'
                value={suratKontraktor}
                change={e => setSuratKontraktor(e.target.value)}
                placeholder='Surat Kontraktor'
                innerRef={register({ required: !isDisable })}
                error={<ErrorMessage error={errors.suratKontraktor} />}
                // isdisabled={!isToogled}
                isdisabled={isDisable}
              />
            </Col>
          </Row>
          <Row>
            <Col md='3' lg='3' xl='3' sm='auto' xs='auto'>
              <Label htmlFor='prependedInput' className='register-label-header'>Tanggal Surat Kontraktor</Label>
            </Col>
            <Col md='6' lg='6' xl='6' sm='auto' xs='auto'>
              <Inputan
                icon='icon-calendar'
                name='tglSuratKontraktor'
                type='date'
                value={tglSuratKontraktor}
                placeholder='dd/mm/yyyy'
                change={e => setTglSuratKontraktor(e.target.value)}
                innerRef={register({ required: !isDisable })}
                error={<ErrorMessage error={errors.tglSuratKontraktor} />}
                // isdisabled={!isToogled}
                isdisabled={isDisable}
              />
            </Col>
          </Row>
          <Row>
            <Col md='3' lg='3' xl='3' sm='auto' xs='auto'>
              <Label htmlFor='prependedInput' className='register-label-header'>Tanggal Surat Diterima PLN</Label>
            </Col>
            <Col md='6' lg='6' xl='6' sm='auto' xs='auto'>
              <Inputan
                icon='icon-calendar'
                name='tglSuratDiterimaPln'
                type='date'
                value={tglSuratDiterimaPln}
                change={e => setTglSuratDiterimaPln(e.target.value)}
                // placeholder='Diterima PLN'
                innerRef={register({ required: !isDisable })}
                error={<ErrorMessage error={errors.tglSuratDiterimaPln} />}
                // isdisabled={!isToogled}
                isdisabled={isDisable}
              />
            </Col>
          </Row>
          <Row>
            <Col md='3' lg='3' xl='3' sm='auto' xs='auto'>
              <Label htmlFor='prependedInput' className='register-label-header'>Nomor Surat PLN</Label>
            </Col>
            <Col md='6' lg='6' xl='6' sm='auto' xs='auto'>
              <Inputan
                icon='icon-pencil'
                name='nomorSuratPln'
                type='text'
                value={nomorSuratPln}
                change={e => setNomorSuratPln(e.target.value)}
                placeholder='Nomor Surat PLN'
                innerRef={register({ required: !isDisable })}
                error={<ErrorMessage error={errors.nomorSuratPln} />}
                // isdisabled={!isToogled}
                isdisabled={isDisable}
              />
            </Col>

          </Row>
          <Row>
            <Col md='3' lg='3' xl='3' sm='auto' xs='auto'>
              <Label htmlFor='prependedInput' className='register-label-header'>Tanggal Surat Keluar PLN</Label>
            </Col>
            <Col md='6' lg='6' xl='6' sm='auto' xs='auto'>
              <Inputan
                icon='icon-calendar'
                name='tglSuratKeluarPln'
                type='date'
                value={tglSuratKeluarPln}
                change={tglSuratKeluarPlnSelectHandler}
                innerRef={register({ required: !isDisable })}
                error={<ErrorMessage error={errors.tglSuratKeluarPln} />}
                // isdisabled={!isToogled}
                isdisabled={isDisable}
              />
            </Col>
          </Row>
          <Row>
            <Col md='3' lg='3' xl='3' sm='auto' xs='auto'>
              <Label htmlFor='prependedInput' className='register-label-header'>Proses Approval (hari kerja)</Label>
            </Col>
            <Col md='6' lg='6' xl='6' sm='auto' xs='auto'>
              <Inputan
                icon='icon-pencil'
                name='prosesApproval'
                type='text'
                value={prosesApproval}
                change={e => setProsesApproval(e.target.value)}
                placeholder='Proses Approval'
                innerRef={register({ required: !isDisable })}
                error={<ErrorMessage error={errors.prosesApproval} />}
                // isdisabled={!isToogled}
                isdisabled={isDisable}
              />
            </Col>
          </Row>
          <Row>
            <Col md='3' lg='3' xl='3' sm='auto' xs='auto'>
              <Label htmlFor='prependedInput' className='register-label-header'>Lampiran</Label>
            </Col>
            <Col md='6' lg='6' xl='6' sm='auto' xs='auto'>
              <input
                ref={register}
                type='file'
                name='lampiran'
                multiple
                // key={lampiran}
                // value={lampiran}
                // multiple max='2'
                // max-file-size='1000000'
                // total-max-size='2000000'
                // value={noKontrak}
                // change={onChangeLampiran}
                // innerRef={register({ required: true })}
                // style={{ Width: '200px' }}
                // error={<ErrorMessage error={errors.lampiran} />}
                // disabled={!isToogled}
                disabled={isDisable}

              />
            </Col>
          </Row>
          <Row>
            <Col md='3' lg='3' xl='3' sm='auto' xs='auto'>
              <Label htmlFor='prependedInput' className='register-label-header'>Catatan</Label>
            </Col>
            <Col md='6' lg='6' xl='6' sm='auto' xs='auto'>
              <Inputan
                icon='icon-pencil'
                name='catatan'
                type='text'
                value={catatan}
                change={e => setCatatan(e.target.value)}
                placeholder='Catatan'
                innerRef={register({ required: true })}
                error={<ErrorMessage error={errors.catatan} />}
                // isdisabled={!isToogled}
                isdisabled={isToBeSubmited}

                // <Switcher rounded isToogled={isToogled} onToogle={onChangeToogled} />

              />
            </Col>
          </Row>
        </CardBody>
        <CardFooter className='text-center'>
          <Button color='success' block size='lg'>
                   S I M P A N
          </Button>
          <Label htmlFor='prependedInput'><b> Pastikan data yang di Input sudah Benar.</b></Label>
        </CardFooter>
      </Form>
    </>
  )
  return content
}

export default DokumenHeader
