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
            name: 'content',
            type: 'richtext',
            title: 'Content',
        }, 

        {
            title: 'Published At',
            name: 'PublishedAt',
            type: 'datetime',
            options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'HH:mm',
            }
        }
    ]

}