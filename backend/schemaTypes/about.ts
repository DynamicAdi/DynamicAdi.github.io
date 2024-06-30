import {defineType} from 'sanity'

export const aboutSchema = defineType({
  name: 'about',
  description: 'Let me tell about myself',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
        name: "miniDesc",
        title: "skill Desc",
        type: "string",
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'experience',
      title: 'Experience',
      type: 'number',
      initialValue: 5,
    },
    {
        name: 'cv',
        title: 'CV',
        type: 'file',
        options: {
            accept: 'application/pdf',
        }
    },
    {
        name: 'socialMedia',
        title: 'Social Media Links',
        type: 'array',
        of: [{
            name: 'PlateformWithUrl',
            title: 'Plateform with Url',
            type: 'object',
            fields: [
                {
                    name: "plateform",
                    title: 'Plateform',
                    type: 'string',
                },
                {
                    name: "url",
                    title: 'URL',
                    type: 'url',
                },
            ]
        }]
    },
  ],
})
