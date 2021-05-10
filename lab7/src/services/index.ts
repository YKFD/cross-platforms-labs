export * from './blogs_services'
export * from './news_service'
export * from './forum_service'

type Article = {
    title: string,
    body: string,
    category: string,
}

export const saveArticle = (apiUrl: string, article: Article) => {
    return fetch(`http://192.168.0.103:3000/app/${apiUrl}`, {body: JSON.stringify(article), method: 'POST'})
}