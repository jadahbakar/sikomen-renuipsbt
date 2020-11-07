/* eslint-disable camelcase */
import React, { Suspense, lazy, useContext, useEffect } from 'react'
import { Container, Card, CardHeader, CardBody } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import { AppContext } from '../../../context'
import DokumenHeader from './DokumenHeader'
import DokumenContent from './DokumenContent'

const DokumenTitle = lazy(() => import('./DokumenTitle'))

const Loading = () => {
  return (
    <h4>Loading...</h4>
  )
}

const Content = (props) => {
  const appContext = useContext(AppContext)
  useEffect(() => {
    appContext.setProjectId(props.projectId)
  })

  // --------------------------------------- Main
  const content = (
    <>
      <Container fluid>
        <Card>
          <CardHeader>
            <Suspense fallback={<Loading />}>
              <DokumenTitle />
            </Suspense>
          </CardHeader>

          <CardBody>
            <DokumenHeader projectId={props.projectId} />
          </CardBody>
        </Card>

        <Card>
          <DokumenContent />
        </Card>

      </Container>
    </>
  )

  return content
}

const Dokumen = (props) => {
  const appContext = useContext(AppContext)
  if (((props.location.state === undefined) && (appContext.kategori !== '' || appContext.kategori !== 0) && (appContext.jenis !== '' || appContext.jenis !== 0))) {
    return <Redirect to='/transaksi/projects' />
  } else {
    return <Content projectId={props.location.state.projectId} />
  }
}

export default Dokumen
// export default withRouter(Content)
