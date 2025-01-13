import { defineField, defineType } from 'sanity';

export const experienceType = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'highlight',
      title: 'Highlight Color',
      type: 'string',
      validation: (rule) => rule.required().regex(/^#([0-9a-fA-F]{6})$/),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
    }),
    defineField({
      name: 'current',
      title: 'Current',
      type: 'boolean',
    }),
  ],
  orderings: [
    {
      title: 'Start Date',
      name: 'startDate',
      by: [
        { field: 'startDate', direction: 'desc' },
      ],
    },
  ],
});
