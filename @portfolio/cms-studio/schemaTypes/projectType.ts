import { defineField, defineType } from 'sanity';

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'background',
      title: 'Background Color',
      type: 'string',
      initialValue: '#000000',
      validation: (rule) => rule.required().regex(/^#([0-9a-fA-F]{6})$/),
    }),
    defineField({
      name: 'links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
              validation: (rule) => rule.required(),
            },
            {
              name: 'url',
              type: 'url',
              validation: (rule) => rule.required(),
            },
          ],
        },
      ]
    }),
    defineField({
      name: 'technologies',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'technology' }] }],
      validation: (rule) => rule.required().min(1),
    }),
  ],
});
