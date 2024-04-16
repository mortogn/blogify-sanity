import {defineField, defineType} from 'sanity'

export const authorType = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  groups: [
    {name: 'details', title: 'Details'},
    {name: 'media', title: 'Media'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      group: 'details',
      description: 'The name of the author',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      group: 'details',
      description: 'The bio of the author',
      type: 'text',
      validation: (Rule) => Rule.required().max(400),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      group: 'details',
      description: 'The slug of the author',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      group: 'media',
      description: 'The image of the author',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      group: 'seo',
      description: 'The SEO title of the author',
      type: 'string',
      // validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      group: 'seo',
      description: 'The SEO description of the author',
      type: 'text',
      // validation: (Rule) => Rule.required().max(100),
    }),
  ],
})
