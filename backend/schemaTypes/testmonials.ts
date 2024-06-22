import {defineType, defineField} from 'sanity'

export const testmonialSchema = defineType({
  name: 'testmonial',
  title: 'Testmonials',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'profession',
      title: 'profession',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imageUrl',
      title: 'ImageUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'feedback',
      title: 'Feedback',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
