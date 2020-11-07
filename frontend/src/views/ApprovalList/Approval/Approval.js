/* global Blob */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { Button, Container, Card, CardHeader, CardBody, Form } from 'reactstrap'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import 'react-table/react-table.css'
import { AppContext } from '../../../context'

const Approval = () => {
  // --------------------------------------- Init
  const appContext = useContext(AppContext)
  const { errors, register, handleSubmit } = useForm()
  // --------------------------------------- Submit
  const onSubmit = data => {
    axios({
      url: `${appContext.backEndDokumen}/download/xls`,
      method: 'GET',
      responseType: 'blob' // important
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'Template_file_monitoring_SIKOMEN.xls')
      document.body.appendChild(link)
      link.click()
    })
  }

  // --------------------------------------- CONTENT
  const content = (
    <>
      <Container fluid>
        <Card>
          <CardHeader>
            <i className='fa fa-table' />Download Template Excel
            <div className='card-header-actions' />
          </CardHeader>
          <CardBody>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Button color='success'>
                <i className='icon-cloud-download' />
                {' '}DOWNLOAD XLS
              </Button>
            </Form>
          </CardBody>
        </Card>

      </Container>
    </>
  )

  return content
}

export default Approval
