/* eslint-disable camelcase */
import React, { useContext } from 'react'
import { useHttp2 } from 'component'
import { AppContext } from '../../../context'

const RekapTableHeader = () => {
  const appContext = useContext(AppContext)
  // --------------------------------------- DidMount
  const projectColumnAll = useHttp2(`${appContext.backEndMaster}/projectcolumnall`, [])
  appContext.setFetchColumn(projectColumnAll)
  // --------------------------------------- Main
  const content = (
    <>
      <thead>
        <tr>
          <th>Nomor</th>
          {projectColumnAll.map(detail => (
            // <th style={{ whiteSpace: 'normal', overflowWrap: 'break-word' }} key={detail.project_column_id} value={detail.project_column_id} className='text-center'>
            <th style={{ whiteSpace: 'nowrap' }} key={detail.project_column_id} value={detail.project_column_id} className='text-center'>
              {detail.project_column_nama}
            </th>
          ))}
        </tr>
      </thead>
    </>
  )
  return content
}

export default RekapTableHeader
