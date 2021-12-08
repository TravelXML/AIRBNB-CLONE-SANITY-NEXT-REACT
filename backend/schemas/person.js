export default {

    name: 'person',
    title: 'Person',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            descripation: 'Please use "Firstname Lastname Format',
        },

        {
            name: 'slug', // field name is required and must be unique
            title: 'Slug',
            type: 'slug', // field type is required
            options: {
                source: 'name',
                maxLength: 100,

            }
        },
        {
            name: 'id',
            title: 'ID',
            type: 'number',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
    ],
    preview: {
        select: {
            title: 'name',            
            media: 'image',
        },
    },

}