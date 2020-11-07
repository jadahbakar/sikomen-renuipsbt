/* eslint-disable camelcase */
import React, { lazy, Suspense, useContext } from 'react'
import { Container, Card, CardHeader, CardBody, Table } from 'reactstrap'
import { withRouter, Redirect } from 'react-router-dom'
import { AppContext } from '../../../context'

// Containers
const RekapTitle = lazy(() => import('./RekapTitle'))
const RekapTableHeader = lazy(() => import('./RekapTableHeader'))
const RekapTableContent = lazy(() => import('./RekapTableContent'))

const Loading = () => {
  return (
    <h4>Loading...</h4>
  )
}

const Content = (props) => {
  const projectId = props.props.projectId
  const appContext = useContext(AppContext)
  appContext.setKategori(props.props.kategoriId)
  appContext.setJenis(props.props.jenisId)

  // --------------------------------------- Main
  const content = (
    <>
      <Container fluid>
        <Card>
          <CardHeader>
            <RekapTitle projectId={projectId} />
          </CardHeader>

          <CardBody>
            <Table bordered responsive hover>
              <Suspense fallback={<Loading />}>
                <RekapTableHeader />
              </Suspense>
              <Suspense fallback={<Loading />}>
                <RekapTableContent projectId={projectId} />
              </Suspense>
            </Table>
          </CardBody>
        </Card>

      </Container>
    </>
  )

  return content
}

const Rekap = (props) => {
  console.log('Rekap -> props', props)
  const appContext = useContext(AppContext)
  if (props.location.state) {
    const projectId = props.location.state.projectId
    if ((projectId !== '' && (appContext.kategori !== '' || appContext.kategori !== 0 || props.location.state.kategoriId !== '') && (appContext.jenis !== '' || appContext.jenis !== 0 || props.location.state.jenisId !== ''))) {
      return <Content props={props.location.state} />
    }
  } else {
    return <Redirect to='/transaksi/projects' />
  }
}

// export default Rekap
export default withRouter(Rekap)
