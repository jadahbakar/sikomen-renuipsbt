import axios from 'axios'

const http3 = async (url) => {
  const response = await axios.get(url)
  return response.data.results
}

export default http3
