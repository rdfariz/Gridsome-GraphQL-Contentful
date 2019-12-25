// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'RdFariz Blog',
  siteDescription: 'Site about my blog',
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: 'h2jtdzogt1e4', // required
        accessToken: 'JXwJsry6ootCQP252r5nDKSQz7lJrBzWzk4m8K-fJhs', // required
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/**/*.md',
        refs: {
          // Reference to existing authors by id.
          // author: 'Author',
          // Create a Tag content type and its nodes automatically.
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    }
  ],
  templates: {
    ContentfulBlogPost: '/contentful/:title',
    Post: '/blog/:title',
    Tag: '/tag/:id'
  }
}
