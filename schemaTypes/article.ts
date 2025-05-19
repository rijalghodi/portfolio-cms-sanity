import { defineType } from "sanity";

export default defineType({
  name: "article",
  title: "Articles",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "pinned",
      title: "Pinned",
      type: "boolean",
      description: "Pin this article to appear at the top",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "cover_image",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alternative Text",
          type: "string",
        },
      ],
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    },
    {
      name: "date",
      title: "Date",
      type: "date",
    },
    {
      name: "toc",
      title: "Table of Contents?",
      type: "boolean",
      description: "Enable table of content?",
      initialValue: true,
    },
    {
      name: "content",
      title: "Content",
      type: "blockContent",
    },
  ],
});
