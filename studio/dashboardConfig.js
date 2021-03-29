export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '606164ae686b3ae1036ca219',
                  title: 'Sanity Studio',
                  name: 'gatsby-portfolio-studio-8fygwpbe',
                  apiId: '810540ff-c816-482c-91f4-0d873b0be781'
                },
                {
                  buildHookId: '606164ae5d5dcb8a49e9a47c',
                  title: 'Portfolio Website',
                  name: 'gatsby-portfolio-web-f4ft3bn9',
                  apiId: '6119d81a-3dc9-4205-a3f5-3f0f1a870331'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fatihwin-yt/gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://gatsby-portfolio-web-f4ft3bn9.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
