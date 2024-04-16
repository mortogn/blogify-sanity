import {defineArrayMember, defineField, defineType} from 'sanity'

export const homePageType = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'categories',
      title: 'Categories',
      description: 'The categories of the home page',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'category'}],
        }),
      ],
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      description: 'The sections of the home page',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'homeSection'}],
        }),
      ],
    }),
  ],
})
