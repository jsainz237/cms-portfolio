import { defineField, defineType } from 'sanity';

export const technologyType = defineType({
  name: 'technology',
  title: 'Technology',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'file',
    }),
    defineField({
      name: 'highlight',
      title: 'Hightlight Color',
      type: 'string',
      initialValue: '#FFFFFF',
      validation: (rule) => rule.required().regex(/^#([0-9a-fA-F]{6})$/),
    }),
    defineField({
      name: 'background',
      title: 'Background Color',
      type: 'string',
      initialValue: '#000000',
      validation: (rule) => rule.required().regex(/^#([0-9a-fA-F]{6})$/),
    }),
  ],
});
