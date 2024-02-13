export default {
    name: "blogs",
    title: "Blogs",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string"
        },
        {
            name: "description",
            title: "Description",
            type: "string"
        },
        {
            name: "image",
            title: "Image",
            type: "image",
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        }
    ]
}