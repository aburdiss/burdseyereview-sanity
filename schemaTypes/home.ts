import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'featuredReviews',
      title: 'Featured Reviews',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'review' }], }],

      validation: (Rule) => [Rule.required()],
    })
  ],
});
