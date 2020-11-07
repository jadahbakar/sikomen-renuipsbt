import React, { useEffect } from 'react'
// import { withRouter } from 'react-router-dom'
import axios from 'axios'

const checkRequests = Wrapped => {
  function CheckRequests (props) {
    useEffect(() => {
      axios.interceptors.response.use(function (response) {
        // Do something with response data

        // console.log('CheckRequests -> response', response)
        return response
      }, function (error) {
        // console.log('CheckRequests -> error', error)
        // console.log('CheckRequests -> error.response.status', error.response.status)
        switch (error.response.status) {
          case 503 :
            props.history.push('/503') // we will redirect user into 503 page
            break
          case 401 :
            // props.history.push('/login') // we will redirect user into 503 page
            // props.history.push('/login')
            props.history.push('/login')
            break
          default :
            break
        }
        // Do something with response error
        return Promise.reject(error)
      })
    })

    return (
      <Wrapped {...props} />
    )
  }
  return CheckRequests
}

export default checkRequests
