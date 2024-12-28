import { defineField, defineType } from 'sanity';

export const biographyType = defineType({
  name: 'biography',
  title: 'Biography',
  type: 'document',
  fields: [
    defineField({
      name: 'about',
      title: 'About',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      about: 'about',
    },
    prepare: ({ about }) => ({
      title: `${about.slice(0, 15)}...`,
    }),
  },
});
