/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from 'axios'

const useHttp = (url, token, dependencies) => {
  const [fetchedData, setFetchedData] = useState([])

  if (token !== '') {
    axios.defaults.headers.common.Authorization = token
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url)
      setFetchedData(result.data)
    }
    if (dependencies.length >= 0 && dependencies[0] !== '') {
      fetchData()
    }
    if (dependencies === [] || dependencies.length === 0) {
      fetchData()
    }
  }, dependencies)
  // console.log('useHttp -> fetchedData', fetchedData)

  return [fetchedData]
}

export default useHttp
