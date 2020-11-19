import React from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { AppContext } from '../../../context'
import Swal from 'sweetalert2'
import axios from 'axios'
import _ from 'lodash'

const styles = {
  colStyle: {
    marginTop: '0.5em'
  },
  align: { textAlign: 'right' }
}

// const getColumnWidth = (rows, accessor, headerText) => {
//   const maxWidth = 400
//   const magicSpacing = 10
//   const cellLength = Math.max(
//     ...rows.map(row => (`${row[accessor]}` || '').length),
//     headerText.length
//   )
//   return Math.min(maxWidth, cellLength * magicSpacing)
// }

// const getColumnWidth = (data, accessor, headerText) => {
//   if (typeof accessor === 'string' || accessor instanceof String) {
//     accessor = d => d[accessor] // eslint-disable-line no-param-reassign
//   }
//   const maxWidth = 600
//   const magicSpacing = 10
//   const cellLength = Math.max(
//     ...data.map(row => (`${accessor(row)}` || '').length),
//     headerText.length
//   )
//   return Math.min(maxWidth, cellLength * magicSpacing)
// }

const getColumnWidth = (data, accessor, headerText) => {
  const cellLength = Math.max(
    ...data.map(row => {
      let value = ''

      if (typeof accessor === 'string') {
        value = _.get(row, accessor)
      } else {
        value = accessor(row)
      }

      if (typeof value === 'number') return value.toString().length
      return (value || '').length
    }),
    headerText.length
  )

  const magicSpacing = 12
  return cellLength * magicSpacing
}

const HapusData = (props) => {
  Swal.fire({
    title: `Hapus ${props.projectId} ?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
    footer: '@sikomen'
  }).then((result) => {
    if (result.isConfirmed) {
      axios
        .post(`${props.url}`, {
          action: 'd',
          id: props.projectId,
          kategori: 0,
          propinsi: 0,
          jenis: 0,
          nama: 0,
          nomorKontrak: 0,
          kontraktorNama: 0,
          targetCod: 0,
          status: 0,
          engineeringStatus: 0,
          picPln: [],
          picKontraktor: []
        })
        .then(response => {
          // props.reload()
          props.reload(props.projectId)
          Swal.fire({
            title: 'Deleted!',
            text: 'Your Project deleted.',
            icon: 'success',
            timer: 1000,
            footer: '@sikomen'
          })
          // }
        })
        .catch(error => {
          console.log('error', error)
        })
    }
  })
}

const column = (data) => {
  const columns = data = [
    {
      Header: 'Aksi',
      width: '201',
      accessor: 'project_id',
      className: 'center',
      filterable: false,
      Cell: value => (
        <div>
          <AppContext.Consumer>
            {context => (
              <>
                {context.userRole === '3'
                  ? (
                    <>
                      <Link
                        to={{
                          pathname: '/transaksi/rekap',
                          state: { projectId: value.value }
                        }} className='btn ghost-light fa fa-table'
                      />
                    </>
                    )
                  : (
                    <>
                      <Link
                        to={{
                          pathname: '/transaksi/dokumen',
                          state: { projectId: value.value }
                        }} className='btn ghost-light icon-doc'
                      />
                      <Button
                        color='ghost-danger'
                        // onClick={() => HapusData({ projectId: value.value, url: context.backEndProject, reload: context.reloadTableProjects })}
                        onClick={() => HapusData({ projectId: value.value, url: context.backEndProject, reload: context.reloadTableAfterDelete })}
                      >
                        <i className='icon-trash' />
                      </Button>
                      <Link
                        to={{
                          pathname: '/transaksi/rekap',
                          state: { projectId: value.value }
                        }} className='btn ghost-light fa fa-table'
                      />
                    </>
                    )}
              </>
            )}
          </AppContext.Consumer>
        </div>

      )
    },
    {
      Header: 'Project ID',
      accessor: 'project_id',
      width: '130',
      Cell: row => (
        <div style={{ textAlign: 'center' }}>
          <AppContext.Consumer>
            {context => (
              <Button block color='ghost-info'>
                <Link
                  to='/transaksi/projects/edit'
                  onClick={() => context.setProjectId(row.value)}
                >
                  {row.value}
                </Link>
              </Button>
            )}
          </AppContext.Consumer>
        </div>
      )
    },
    {
      Header: 'Nama',
      accessor: 'project_nama',
      width: getColumnWidth(data, 'project_nama', 'Nama'),
      filterable: true,
      Cell: row => <div style={styles.colStyle}>{row.value}</div>
    },
    {
      Header: 'Nomor Kontrak',
      accessor: 'project_nomor_kontrak',
      width: getColumnWidth(data, 'project_nomor_kontrak', 'Nomor Kontrak'),
      filterable: false,
      Cell: row => <div style={styles.colStyle}>{row.value}</div>
    },
    {
      Header: 'Nama Kontraktor',
      accessor: 'project_kontraktor_nama',
      width: getColumnWidth(data, 'project_kontraktor_nama', 'Nama Kontraktor'),
      filterable: false,
      Cell: row => <div style={styles.colStyle}>{row.value}</div>
    },

    {
      Header: 'Target COD',
      accessor: 'project_target_cod',
      width: getColumnWidth(data, 'project_target_cod', 'Target COD'),
      filterable: false,
      Cell: row => <div style={styles.colStyle}>{row.value}</div>
    }

  ]
  return columns
}

export default column
