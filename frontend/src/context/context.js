import React, { createContext, useState } from 'react'
import { API_ROOT } from '../api/api'
import axios from 'axios'

export const AppContext = createContext()

export const AppProvider = (props) => {
  const [token, setToken] = useState('')
  axios.defaults.headers.common.Authorization = token

  // ------------------------------------ main state
  const [user, setUser] = useState('')
  const [userRole, setUserRole] = useState(0)
  const [kategori, setKategori] = useState(0)
  const [propinsi, setPropinsi] = useState(0)
  const [jenis, setJenis] = useState(0)
  const [projectId, setProjectId] = useState()

  const [kategoriNama, setKategoriNama] = useState('')
  const [jenisNama, setJenisNama] = useState('')
  const [propinsiNama, setPropinsiNama] = useState('')
  const [dashboardData, setDashboardData] = useState([])
  // ------------------------------------

  const [fetchTableData, setFetchTableData] = useState([])
  const [loading, setLoading] = useState(false)
  const [fetchColumn, setFetchColumn] = useState([])

  const backEndDownload = `${API_ROOT}`

  const backEndMaster = `${API_ROOT}/master`
  const backEndProject = `${API_ROOT}/project`
  const backEndUsers = `${API_ROOT}/users`
  const backEndDokumen = `${API_ROOT}/dokumen`
  const backEndDashboard = `${API_ROOT}/dashboard`
  const backEndRekap = `${API_ROOT}/rekap`

  const backEndKategori = `${backEndMaster}/projectkategori/all`
  const backEndPropinsi = `${backEndMaster}/propinsi/all`
  const backEndStatus = `${backEndMaster}/projectstatus/all`
  const backEndEngineering = `${backEndMaster}/engineeringstatus/all`

  const reloadTableAfterDelete = (id) => {
    const filtered = fetchTableData.filter(function (el) { return el.project_id !== id })
    setFetchTableData(filtered)
  }

  const reloadTableProjects = () => {
    setLoading(true)
    axios
      .get(`${backEndProject}/detail/${kategori}/${propinsi}/${jenis}`)
      .then(response => {
        let data = response.data.results.projectAll
        if (data === null) {
          data = []
        }
        setFetchTableData(data)
        setLoading(false)
      })
      .catch(error => {
        setLoading(false)
        if (error) {
          console.log('TCL: reloadTableData -> error', error)
        }
      })
  }

  const content = (
    <>
      <AppContext.Provider
        value={{
          backEndDownload,
          backEndMaster,
          backEndProject,
          backEndUsers,
          backEndKategori,
          backEndPropinsi,
          backEndStatus,
          backEndEngineering,
          backEndDokumen,
          backEndDashboard,
          backEndRekap,
          user,
          setUser,
          userRole,
          setUserRole,
          kategori,
          setKategori,
          propinsi,
          setPropinsi,
          jenis,
          setJenis,
          projectId,
          setProjectId,
          kategoriNama,
          setKategoriNama,
          jenisNama,
          setJenisNama,
          propinsiNama,
          setPropinsiNama,
          dashboardData,
          setDashboardData,
          token,
          fetchTableData,
          setFetchTableData,
          loading,
          setLoading,
          fetchColumn,
          setFetchColumn,
          setToken,
          reloadTableProjects,
          reloadTableAfterDelete
        }}
      >
        {props.children}
      </AppContext.Provider>
    </>
  )
  return content
}
