import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'burdseyereview-sanity',

  projectId: 'aoioxcs2',
  dataset: 'production',

  plugins: [structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Our singleton type has a list item with a custom child
            S.listItem().title('Home').id('home').child(
              // Instead of rendering a list of documents, we render a single
              // document, specifying the `documentId` manually to ensure
              // that we're editing the single instance of the document
              S.document().schemaType('home').documentId('home'),
            ),

            // Regular document types
            S.documentTypeListItem('author').title('Author'),
            S.documentTypeListItem('collection').title('Collection'),
            S.documentTypeListItem('review').title('Review'),
            S.documentTypeListItem('reviewType').title('ReviewType'),

  ]),
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
