const news_url = 'http://192.168.0.103:3000/app/news'

export const getNews = () => {
    return fetch(news_url)
}