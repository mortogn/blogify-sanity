import {DocumentsIcon, UsersIcon} from '@sanity/icons'
import {StructureResolver} from 'sanity/structure'
import {MdOutlineCategory} from 'react-icons/md'
import {FiUsers} from 'react-icons/fi'
import {RiPagesLine} from 'react-icons/ri'
import {IoDocument, IoDocumentOutline, IoDocuments, IoDocumentsOutline} from 'react-icons/io5'
import {CiSettings} from 'react-icons/ci'

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      S.documentTypeListItem('article').title('Articles').icon(RiPagesLine),

      S.documentTypeListItem('category').title('Categories').icon(MdOutlineCategory),

      S.documentTypeListItem('author').title('Authors').icon(FiUsers),

      S.listItem()
        .title('Pages')
        .icon(IoDocumentsOutline)
        .child(
          S.list()
            .id('page')
            .title('Pages')
            .items([
              S.listItem()
                .id('homePage')
                .title('Home Page')
                .schemaType('homePage')
                .icon(IoDocumentOutline)
                .child(
                  S.editor()
                    .id('homePage')
                    .schemaType('homePage')
                    .documentId('homePage')
                    .title('Home'),
                ),
            ]),
        ),

      S.listItem()
        .title('Site settings')
        .schemaType('siteSettings')
        .icon(CiSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Site settings'),
        ),
    ])
