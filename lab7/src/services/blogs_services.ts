const blog_url = 'http://192.168.0.103:3000/app/blogs'

export const getBlogs = () => {
    return fetch(blog_url)
}