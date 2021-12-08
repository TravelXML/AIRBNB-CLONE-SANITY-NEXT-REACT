import propertyImage from "./propertyImage";

export default {
    name: 'property',
    title: 'Property',
    type: 'document',
    fields: [ // fields must be defined, and it must be an array
        {
            name: 'title', // field name is required and must be unique
            title: 'Title',
            type: 'string' // field type is required
        },
        {
            name: 'location', // field name is required and must be unique
            title: 'Location',
            type: 'geopoint' // field type is required
        },
        {
            name: 'propertyType', // field name is required and must be unique
            title: 'Property Type',
            type: 'string',
            options: {
                list: [
                    { title: 'House', value: 'house' },
                    { title: 'Flat', value: 'flat' },
                    { title: 'Bed n Breakfast', value: 'bed-and-breakfast' },
                    { title: 'Boutique Hotel', value: 'boutique-hotel' },
                ],
                layout: 'radio'
            }
        },
        {
            name: 'mainImage', // field name is required and must be unique
            title: 'Main Image',
            type: 'image', // field type is required
            options: {
                hotspot: true,
            }

        },
        {
            name: 'images', // field name is required and must be unique
            title: 'Images',
            type: 'array', // field type is required
            of: [{
                type: 'propertyImage',
            }]

        },
        {
            name: 'pricePerNight', // field name is required and must be unique
            title: 'Price Per Night',
            type: 'number' // field type is required
        },
        {
            name: 'beds', // field name is required and must be unique
            title: 'Beds',
            type: 'number' // field type is required
        },
        {
            name: 'bedRooms', // field name is required and must be unique
            title: 'Bed Rooms',
            type: 'number' // field type is required
        },
        {
            name: 'slug', // field name is required and must be unique
            title: 'Slug',
            type: 'slug', // field type is required
            options: {
                source: 'title',
                maxLength: 100,

            }
        },
        {
            name: 'id', // field name is required and must be unique
            title: 'ID',
            type: 'number' // field type is required
        },
        {
            name: 'descripation', // field name is required and must be unique
            title: 'Descripation',
            type: 'string' // field type is required
        },
       {
            name: 'host', // field name is required and must be unique
            title: 'Host',
            type: 'host' // field type is required
        },
        {
            name: 'reviews', // field name is required and must be unique
            title: 'Reviews',
            type: 'array', // field type is required
            of: [{ type: 'review' }]
        }
    ]
}