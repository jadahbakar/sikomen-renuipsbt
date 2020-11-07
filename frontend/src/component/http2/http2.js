/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from 'axios'

const useHttp2 = (url, dependencies) => {
  const [fetchedData, setFetchedData] = useState([])

  const fetchData = async () => {
    const response = await axios.get(url)
    setFetchedData(response.data.results)
  }

  useEffect(() => {
    if ((typeof dependencies !== 'undefined') || dependencies !== null) {
      if (dependencies.length >= 0 && dependencies[0] !== '') {
        fetchData()
      }
      if (dependencies === [] || dependencies.length === 0) {
        fetchData()
      }
    }
  }, dependencies)

  // console.log('fetchedData', fetchedData)
  return fetchedData
}

export default useHttp2
