import {defineType} from 'sanity'

export const projectSchema = defineType({
  name: 'Projects',
  description: 'Lets showcase our projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
        name: 'title',
        title: 'Title',
        type: 'string',
    },
    {
        name: "description",
        title: 'Description',
        type: 'text',
    },
    {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
            hotspot: true,
        }
    },
    {
        name: "catogery",
        title: 'Catogery',
        type: 'string',
    },
    {
        name: 'gitHublink',
        title: 'Github Link',
        type: 'url',
    },
    {
        name: 'viewlink',
        title: 'View Link',
        type: 'url',
    },
    
    {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [
            {
                type: 'string'
            }
        ],
        options: {
            layout: 'tags'
        }
    },
    
  ],
})
