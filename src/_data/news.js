const axios = require('axios')
const countries = require('./countries.json')

require('dotenv').config()

const apiKey = process.env.NEWS_API_KEY
const baseURL = 'https://newsapi.org/v2/top-headlines'

async function getNews (country) {
  try {
    const response = await axios.get(`${baseURL}?country=${country}&apiKey=${apiKey}&pageSize=5`)
    return {
      country,
      articles: response.data.articles
    }
  } catch (e) {
    console.error(e)
  }
}

module.exports = async function () {
  var newsPromises = countries.map(getNews)
  return Promise.all(newsPromises).then(newsObjects => {
    return [].concat.apply([], newsObjects)
  })
}