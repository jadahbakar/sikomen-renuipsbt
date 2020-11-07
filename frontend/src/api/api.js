let backendHost
// const apiPort = 8000
const apiVersion = 'v1'
// const apiVersion2 = 'v2'

const hostname = window && window.location && window.location.hostname

if (hostname !== 'localhost') {
  backendHost = `http://${hostname}`
} else {
  backendHost = process.env.REACT_APP_BACKEND_HOST || 'http://localhost'
}

// ------- for Develepment
// const API_ROOT = `${backendHost}:${apiPort}/${apiVersion}`
// ------- for Production
const API_ROOT = `${backendHost}/api/${apiVersion}`

export { API_ROOT }
// export { API_ROOT, API_ROOT2 }
