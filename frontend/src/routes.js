import React from 'react'
import DefaultLayout from './containers/DefaultLayout'
const Dashboard = React.lazy(() => import('./views/Dashboard'))
const Projects = React.lazy(() => import('./views/Transaksi/Projects'))
const ProjectsInput = React.lazy(() => import('./views/Transaksi/Projects/Projects.Input'))
const ProjectsEdit = React.lazy(() => import('./views/Transaksi/Projects/Projects.Edit'))
const Dokumen = React.lazy(() => import('./views/Transaksi/Dokumen'))
const Approval = React.lazy(() => import('./views/ApprovalList/Approval'))
const Rekap = React.lazy(() => import('./views/Transaksi/Rekap'))
const PasswordReset = React.lazy(() => import('./views/Security/PasswordReset'))

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', name: 'Home', component: DefaultLayout, exact: true },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/transaksi/projects', exact: true, name: 'Projects', component: Projects },
  { path: '/transaksi/projects/input', exact: true, name: 'Input', component: ProjectsInput },
  { path: '/transaksi/projects/edit', exact: true, name: 'Edit', component: ProjectsEdit },
  { path: '/transaksi/dokumen', exact: true, name: 'Dokumen', component: Dokumen },
  { path: '/approvallist/approval', exact: true, name: 'Approval', component: Approval },
  { path: '/transaksi/rekap', exact: true, name: 'Rekap', component: Rekap },
  { path: '/passwordreset', exact: true, name: 'PasswordReset', component: PasswordReset }
]

export default routes
