const forum_url = 'http://192.168.0.103:3000/app/forum'

export const getForums = () => {
    return fetch(forum_url)
}