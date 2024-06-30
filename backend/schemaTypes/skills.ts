import {defineType} from 'sanity'

export const skillsSchema = defineType({
  name: 'Skills',
  description: 'Lets showcase our Skills',
  title: 'Skills',
  type: 'document',
  fields: [
    {
        name: 'title',
        title: 'Title',
        type: 'string',
    },
    {
        name: "Logo",
        title: 'Logo',
        type: "image",
    },
    {
        name: "catogery",
        title: 'Catogery',
        type: 'string',
    }
  ]
})
