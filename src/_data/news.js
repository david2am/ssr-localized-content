const axios = require('axios')
require('dotenv').config()

const apiKey = process.env.NEWS_API_KEY
const baseURL = 'https://newsapi.org/v2/top-headlines'

module.exports = async function () {
  try {
    const response = await axios.get(`${baseURL}?country=us&apiKey=${apiKey}&pageSize=5`)
    return response.data
  } catch (e) {
    console.error(e)
  }
}