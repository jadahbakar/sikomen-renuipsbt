/* eslint-disable react/jsx-key */
import React, { useContext, useState } from 'react'
import { useHttp2, ApexChart } from 'component'
import { Link } from 'react-router-dom'
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Progress,
  Row,
  Table
} from 'reactstrap'
import PropTypes from 'prop-types'
import { AppContext } from '../../context'

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

const RekapData = (props) => {
  const appContext = useContext(AppContext)
  const ArrData = appContext.dashboardData.find(item => item.project_id === props.projectId)

  const content = (
    <div id='results' className='search-results'>
      <Table size='sm'>
        <thead>
          <tr className='align-middle'>
            <th colSpan='2'>REKAP - Project ID = {ArrData.project_id} </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Count NEN</td>
            <td style={{ textAlign: 'right' }}>{ArrData.jml_nen}</td>
          </tr>
          <tr>
            <td>Count EN</td>
            <td style={{ textAlign: 'right' }}>{ArrData.jml_en}</td>
          </tr>
          <tr>
            <td>Count RFC</td>
            <td style={{ textAlign: 'right' }}>{ArrData.jml_rfc}</td>
          </tr>
          <tr>
            <td>Count To Be Submited</td>
            <td style={{ textAlign: 'right' }}>{ArrData.jml_tobesubmited}</td>
          </tr>
          <tr style={{ fontWeight: 'bold' }}>
            <td>Jumlah Dokumen</td>
            <td style={{ textAlign: 'right' }}>{ArrData.jml_dokumen}</td>
          </tr>
        </tbody>
      </Table>
      {/* <ColoredLine color='#ff9375' /> */}
    </div>
  )
  return content
}

const Dashboard = () => {
  // loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>;
  const appContext = useContext(AppContext)
  const dashboardList = useHttp2(`${appContext.backEndDashboard}`, [])
  appContext.setDashboardData(dashboardList)
  const [showRekap, setShowRekap] = useState(false)
  const clickRekap = () => setShowRekap(!showRekap)

  const content = (
    <div className='animated fadeIn'>
      <Row>
        <Col>
          <Card>
            <CardHeader>Process Engineering{' : '} <font style={{ color: '#10a45f', size: '7.em', weight: '700' }}> NEN / Approved </font>
            </CardHeader>
            <CardBody>
              {dashboardList.map(detail => (
                <>
                  <Row key={detail.project_id}>

                    <Col xs='12' sm='12' md='8' xl='8'>
                      <Link
                        to={{
                          pathname: '/transaksi/rekap',
                          state: { projectId: detail.project_id, kategoriId: detail.project_kategori, propinsiId: detail.project_propinsi, jenisId: detail.project_jenis }
                        }} className='btn ghost-light fa fa-table'
                      />
                      <span className='title font-weight-bold' style={{ cursor: 'pointer' }} onClick={clickRekap}>{detail.project_nama}</span>
                      <ul>
                        {/* ------ N E N ------ */}
                        <div className='progress-group'>
                          <div className='progress-group-header'>
                            <i className='icon-speedometer progress-group-icon' />
                            <span className='title'>NEN</span>
                            <span className='ml-auto font-weight-bold'>
                              {detail.jml_nen}
                              {' '}
                              <span className='text-muted small'>({detail.persentase_nen} %)</span>

                            </span>
                          </div>
                          <div className='progress-group-bars'>
                            <Progress className='progress-xs' color='success' value={detail.persentase_nen} />
                          </div>
                        </div>
                        {/* ------ E N ------ */}
                        <div className='progress-group'>
                          <div className='progress-group-header'>
                            <i className='icon-speedometer progress-group-icon' />
                            <span className='title'>EN</span>
                            <span className='ml-auto font-weight-bold'>
                              {detail.jml_en}
                              {' '}
                              <span className='text-muted small'>({detail.persentase_en} %)</span>
                            </span>
                          </div>
                          <div className='progress-group-bars'>
                            <Progress className='progress-xs' color='info' value={detail.persentase_en} />
                          </div>
                        </div>
                        {/* ------ R F C ------ */}
                        <div className='progress-group'>
                          <div className='progress-group-header'>
                            <i className='icon-speedometer progress-group-icon' />
                            <span className='title'>RFC</span>
                            <span className='ml-auto font-weight-bold'>
                              {detail.jml_rfc}
                              {' '}
                              <span className='text-muted small'>({detail.persentase_rfc} %)</span>
                            </span>
                          </div>
                          <div className='progress-group-bars'>
                            <Progress className='progress-xs' color='warning' value={detail.persentase_rfc} />
                          </div>
                        </div>
                        {/* ------ Tobe Submited ------ */}
                        <div className='progress-group'>
                          <div className='progress-group-header'>
                            <i className='icon-speedometer progress-group-icon' />
                            <span className='title'>To Be Submited</span>
                            <span className='ml-auto font-weight-bold'>
                              {detail.jml_tobesubmited}
                              {' '}
                              <span className='text-muted small'>({detail.persentase_tobesubmited} %)</span>
                            </span>
                          </div>
                          <div className='progress-group-bars'>
                            <Progress className='progress-xs' color='danger' value={detail.persentase_tobesubmited} />
                          </div>
                        </div>
                        {showRekap ? <RekapData projectId={detail.project_id} /> : null}
                      </ul>
                    </Col>
                    <Col xs='12' sm='12' md='4' xl='4'>
                      <ApexChart
                        series={[detail.persentase_nen, detail.persentase_en, detail.persentase_rfc, detail.persentase_tobesubmited]}
                        total={detail.jml_nen + detail.jml_en + detail.jml_rfc + detail.jml_tobesubmited}
                        colors={['#28a745', '#17a2b8', '#ffc107', '#dc3545']}
                        type='radialBar' height={210}
                      />
                    </Col>

                  </Row>
                  <ColoredLine color='#ff9375' />
                </>
              ))}

            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
  return content
}

export default Dashboard
