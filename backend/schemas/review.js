export default {
    name: 'review', // field name is required and must be unique
    title: 'Review',
    type: 'object', // field type is required
    fields: [
        {
            name: 'reviewDescripation', // field name is required and must be unique
            title: 'Review Descripation',
            type: 'string', // field type is required
        },
        {
            name: 'traveller', // field name is required and must be unique
            title: 'Traveller',
            type: 'traveller', // field type is required
        },
        {
            name: 'rating', // field name is required and must be unique
            title: 'Rating',
            type: 'string', // field type is required
            options: {
                list: [
                    { title: '5 Stars', value: '5-stars' },
                    { title: '4 Stars', value: '4-stars' },
                    { title: '3 Stars', value: '3-stars' },
                    { title: '2 Stars', value: '2-stars' },
                    { title: '1 Stars', value: '1-stars' },
                ],
                layout: 'radio'
            }
        },
    ]
}