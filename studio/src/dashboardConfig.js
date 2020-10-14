export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f874c403074b54681db737b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-1529zmx9',
                  apiId: 'a2d0f006-ded4-421c-b488-2b8d31a668e8'
                },
                {
                  buildHookId: '5f874c405515264e90c4cce1',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-jwoqx9w2',
                  apiId: '43c92703-6efd-4ace-a6f7-3a5634c7d964'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tomkit/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-jwoqx9w2.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
