import { Client } from '@notionhq/client';
import {
  BlockObjectResponse,
  PageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import * as process from 'process';
import React from 'react';
import 'server-only';

export const notion = new Client({
  auth: process.env.NOTION_KEY,
});

export const fetchPages = React.cache(() => {
  return notion.databases.query({
    database_id: process.env.NOTION_PAGE_ID,
    // filter: {
    //     property:
    //         "Active",
    //     select: {
    //         equals: "checked"
    //     }
    // }
  });
});

export const fetchPagesFromRows = React.cache(async () => {
  const result = await notion.databases.query({
    database_id: process.env.NOTION_PAGE_ID,
  });

  return result;

  // const idList = list.results.map(page => page.id)
  //
  // // console.log("ListIWthIds", idList)
  //
  // const pages = []
  //
  // idList.map(async (page_id) => {
  //     const res = await notion.pages.retrieve({
  //         page_id,
  //     })
  //     pages.push(res)
  // })
});

export const fetchPageBySlug = React.cache((slug: string) => {
  return notion.databases
    .query({
      database_id: process.env.NOTION_PAGE_ID,
      filter: {
        property: 'Slug',
        rich_text: {
          equals: slug,
        },
      },
    })
    .then((res) => res.results[0] as PageObjectResponse | undefined);
});

export const fetchPageBlocks = React.cache((pageId: string) => {
  return notion.blocks.children
    .list({ block_id: pageId })
    .then((res) => res.results as BlockObjectResponse[]);
});
