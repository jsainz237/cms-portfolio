import { defineField, defineType } from 'sanity';

export const permalinkType = defineType({
  name: 'permalink',
  title: 'Permalink',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Sort Order',
      type: 'number',
      initialValue: 0,
      validation: (rule) => rule.min(0),
    }),
  ],
  preview: {
    select: {
      url: 'url',
      media: 'icon',
      title: 'title',
    },
    prepare: ({ url, title, media }) => ({
      title: title || url.split('//')[1].split('/')[0],
      media,
    }),
  },
  orderings: [
    {
      title: 'Sort Order',
      name: 'sortOrder',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
});
