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
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'sort',
      title: 'Sort Position',
      type: 'number',
      validation: (Rule) => [Rule.required()],
    }),
  ],
})
