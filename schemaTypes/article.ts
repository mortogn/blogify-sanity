import {defineField, defineType} from 'sanity'

export const articleType = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  groups: [
    {name: 'details', title: 'Details'},
    {name: 'content', title: 'Content'},
    {name: 'media', title: 'Media'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'The title of the article',
      group: 'details',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      description: 'The short description of the article',
      group: 'details',
      type: 'text',
      validation: (Rule) => Rule.required().max(400),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description: 'The slug of the article. Will be used in the URL.',
      group: 'details',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      group: 'details',
      description: 'The author of the article',
      type: 'reference',
      to: [{type: 'author'}],
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      description: 'The categories this article belongs to',
      group: 'details',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'category'}]}],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      description: 'The body of the article',
      group: 'content',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'image',
          fields: [
            {name: 'alt', title: 'Alt text', type: 'text'},
            {name: 'caption', title: 'Caption', type: 'string'},
          ],
        },
      ],
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      description: 'The thumbnail of the article',
      group: 'media',
      type: 'object',
      fields: [
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'alt',
          title: 'Alt text',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'banner',
      title: 'Banner',
      description: 'The banner of the article',
      group: 'media',
      type: 'object',

      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'alt',
          title: 'Alt text',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      description: 'The SEO title of the article',
      group: 'seo',
      type: 'string',
      // validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      description: 'The SEO description of the article',
      group: 'seo',
      type: 'text',
      // validation: (Rule) => Rule.required().max(100),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      authorName: 'author.name',
      media: 'thumbnail.image',
    },
    prepare(selection) {
      const {title, authorName, media} = selection
      return {
        title,
        subtitle: `By ${authorName}`,
        media,
      }
    },
  },
})
