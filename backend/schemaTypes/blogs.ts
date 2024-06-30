export default {
    name: 'blogs',
    title: 'Blogs',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule:any) => Rule.required(),
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
            validation: (Rule:any) => Rule.required(),
        }, 
        {
            name: "image",
            title: 'Front Image',
            type: 'image',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 30,
            },
        },
        {
            name: 'author',
            title: 'author',
            type: 'string',
        }, 

        {
            title: 'Published At',
            name: 'PublishedAt',
            type: 'datetime',
            options: {
                dateFormat: 'MM-DD-YYYY',
                timeFormat: 'HH:mm',
            }
        }
    ]

}