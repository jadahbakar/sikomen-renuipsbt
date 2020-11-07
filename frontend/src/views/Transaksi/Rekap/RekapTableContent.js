/* eslint-disable camelcase */
/* eslint-disable react/jsx-closing-tag-location */
/* global Blob */
import React, { useContext } from 'react'

import { Button } from 'reactstrap'
import axios from 'axios'
// import { useForm } from 'react-hook-form'
import { useHttp2 } from 'component'
import { AppContext } from '../../../context'
import './rownumber.css'

const RekapTableContent = (props) => {
  const appContext = useContext(AppContext)

  // const { register, handleSubmit } = useForm()

  // --------------------------------------- Submit

  const handleClick = (props) => {
    const { dokumenMasterId, dokumenDetailId } = props
    axios({
      url: `${appContext.backEndDokumen}/download/pdf/${dokumenMasterId}/${dokumenDetailId}`,
      method: 'GET',
      responseType: 'blob' // important
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      // link.setAttribute('download', `${dokumenMasterId}-download.zip`)
      link.setAttribute('download', 'download.zip')
      document.body.appendChild(link)
      link.click()
    })
  }

  // --------------------------------------- DidMount
  const projectColumnAll = appContext.fetchColumn
  const projectRowByKategoriJenis = useHttp2(`${appContext.backEndMaster}/projectrowbykategorijenis/${appContext.kategori}/${appContext.jenis}`, [])
  const rekapGetByProjectId = useHttp2(`${appContext.backEndRekap}/${props.projectId}`, [])

  const GenerateData = (props) => {
    const arrData = rekapGetByProjectId.find(item => item.dokumen_master_row === props.rowId)
    let content
    if (!arrData) {
      content = (
        <>
          {projectColumnAll.slice(1).map(detailCol => (
            <td key={detailCol.project_column_id} style={{ whiteSpace: 'nowrap' }} />
          ))}
        </>
      )
    } else {
      content = (
        <>
          <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>{' '}  {arrData.dokumen_detail_tipe_dokumen} {' '} </td>
          <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}> {' '} {arrData.dokumen_detail_dokumen_submited} {' '} </td>
          <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}> {' '} {arrData.dokumen_status_nama} {' '} </td>
          <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}> {' '} {arrData.dokumen_detail_surat_kontraktor} {' '} </td>
          <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}> {' '} {arrData.dokumen_detail_tanggal_surat_kontraktor === '0001-01-01 BC' ? '' : arrData.dokumen_detail_tanggal_surat_kontraktor} {' '} </td>
          <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}> {' '} {arrData.dokumen_detail_tanggal_surat_diterima_pln === '0001-01-01 BC' ? '' : arrData.dokumen_detail_tanggal_surat_diterima_pln} {' '} </td>
          <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}> {' '} {arrData.dokumen_detail_nomor_surat_pln} {' '} </td>
          <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}> {' '} {arrData.dokumen_detail_tanggal_surat_keluar_pln === '0001-01-01 BC' ? '' : arrData.dokumen_detail_tanggal_surat_keluar_pln} {' '} </td>
          <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}> {' '} {arrData.dokumen_detail_proses_approval} {' '} </td>
          <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>
            {/* <Form onSubmit={handleSubmit(onSubmit)}> */}
            <input type='hidden' name='dokumenMasterId' value={arrData.dokumen_master_id} />
            <Button color='secondary' size='sm' onClick={() => handleClick({ dokumenMasterId: arrData.dokumen_master_id, dokumenDetailId: arrData.dokumen_detail_id })}>
              <i className='icon-cloud-download' />
              {' '}  Pdf
            </Button>
            {/* </Form> */}
          </td>
          <td style={{ whiteSpace: 'nowrap', textAlign: 'center' }}> {arrData.dokumen_detail_catatan} </td>
        </>
      )
    }
    return content
  }

  // --------------------------------------- Main
  const content = (
    <>
      <tbody>
        {projectRowByKategoriJenis.map(detailRow => (
          <tr key={detailRow.project_row_id} value={detailRow.project_row_id} className='align-middle'>
            {detailRow.project_row_header === 1
              ? <td colSpan='17' style={{ fontWeight: 'bold' }}> {detailRow.project_row_keterangan}</td>
              : <>
                <td className='counterCell' />
                {/* <td /> */}
                <td style={{ whiteSpace: 'nowrap' }}> {detailRow.project_row_keterangan}
                </td>
                <GenerateData rowId={detailRow.project_row_id} />
              </>}
          </tr>
        ))}
      </tbody>
    </>
  )
  return content
}

export default RekapTableContent
