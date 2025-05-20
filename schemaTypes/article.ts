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
      options: {
        canvasApp: {
          purpose: "Short description of the article that hook the reader to read it",
        },
      },
    },
    {
      name: "content",
      title: "Content",
      type: "blockContent",
      options: {
        canvasApp: {
          purpose: "Content of the article. Easy to read and understand, SEO friendly, and engaging.",
        },
      },
    },
    {
      name: "cover_image",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
        canvasApp: { exclude: true },
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
      options: {
        canvasApp: { exclude: true },
      },
      of: [
        {
          type: "string",
        },
      ],
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      options: {
        canvasApp: { exclude: true },
      },
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
  ],
});
