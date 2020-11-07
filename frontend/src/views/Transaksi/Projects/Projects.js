/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from 'react'
import { Button, Container, Card, CardBody, CardHeader, Row, Col, Form, Label } from 'reactstrap'
import { InputanSelect, useHttp2, Http3 } from 'component'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { AppContext } from '../../../context'

import ErrorMessage from './errorMessage'
import ProjectsColumn from './Projects.Column'

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

const Projects = () => {
  // --------------------------------------- Init
  const appContext = useContext(AppContext)
  const { errors, register, handleSubmit } = useForm()
  const [JenisByKategoriList, setJenisByKategoriList] = useState([])

  // --------------------------------------- DidMount
  const kategoriList = useHttp2(`${appContext.backEndKategori}`, [])
  const PropinsiList = useHttp2(`${appContext.backEndPropinsi}`, [])

  // --------------------------------------- Handler
  const kategoriSelectHandler = async (e) => {
    const value = e.target.value
    appContext.setKategori(value)
    appContext.setJenis(0)
    setJenisByKategoriList([])
    const backEndJenis = `${appContext.backEndMaster}/projectjeniskategori/${value}`
    const data = await Http3(`${backEndJenis}`)
    setJenisByKategoriList(data)
  }

  // --------------------------------------- Componen did mount
  useEffect(() => {
    appContext.fetchTableData.length = 0
  }, [])

  // --------------------------------------- Reload data table
  // move to context

  // --------------------------------------- Submit
  const onSubmit = data => {
    appContext.reloadTableProjects()
  }

  // --------------------------------------- CONTENT
  const content = (
    <>
      <Container fluid>
        <Card>
          <CardBody>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Label htmlFor='prependedInput' className='register-label-header'>
                Kategori, Lokasi dan Jenis
              </Label>
              <ColoredLine color='#ff9375' />
              <Row>
                <Col md='3' lg='3' xl='3' sm='auto' xs='auto'>
                  <InputanSelect
                    icon='icon-list'
                    name='kategori'
                    // value={kategori}
                    value={appContext.kategori}
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
                <Col md='3' lg='3' xl='3' sm='auto' xs='auto'>
                  <InputanSelect
                    icon='icon-location-pin'
                    name='propinsi'
                    value={appContext.propinsi}
                    change={(e) => appContext.setPropinsi(e.target.value)}
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

                <Col md='3' lg='3' xl='3' sm='auto' xs='auto'>
                  <InputanSelect
                    icon='icon-list'
                    name='jenis'
                    // value={jenis}
                    value={appContext.jenis}
                    change={(e) => appContext.setJenis(e.target.value)}
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
                <Col md='3' lg='3' xl='3' sm='auto' xs='auto'>
                  <div style={{ textAlign: 'center' }}>
                    <Button
                      color='light'
                      block
                      className='pr-1'
                    >
                      <i className='icon-magnifier-add' />
                      <span>Cari</span>
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <i className='fa fa-table' />Table of Projects
            <div className='card-header-actions' />
          </CardHeader>
          <CardBody>
            <Row>
              <Col xs='6'>
                <Link to='/transaksi/projects/input'>
                  <Button className='btn-dropbox btn-brand mr-1 mb-1'>
                    <i className='fa fa-plus' />
                    <span>Tambah Project</span>
                  </Button>
                </Link>
              </Col>
            </Row>
            <div style={{ marginTop: '0.5em' }} />
            <ReactTable
              data={appContext.fetchTableData}
              columns={ProjectsColumn(appContext.fetchTableData)}
              defaultPageSize={9}
              className='-striped -highlight'
              noDataText='Tidak Terdapat Data'
              loading={appContext.loading} filterable
            />
            <nav />
          </CardBody>
        </Card>
      </Container>
    </>
  )

  return content
}

export default Projects
