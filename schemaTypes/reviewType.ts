import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'reviewType',
  title: 'Review Types',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
  ],
})
