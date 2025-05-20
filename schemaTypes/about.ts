import { defineType } from "sanity";

export default defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "pinned",
      title: "Pinned",
      type: "boolean",
      description: "The latest pinned about will be shown",
      options: {
        canvasApp: {
          exclude: true,
        },
      },
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      options: {
        canvasApp: {
          exclude: true,
        },
      },
    },
    {
      name: "date",
      title: "Date",
      type: "date",
      description: "Date you write this about",
      options: {
        canvasApp: {
          exclude: true,
        },
      },
    },
    {
      name: "cv",
      title: "CV",
      type: "file",
      options: {
        canvasApp: {
          exclude: true,
        },
      },
    },
    {
      name: "content",
      title: "Content",
      type: "blockContent",
      options: {
        canvasApp: {
          purpose: "A story of myself. Easy to read and understand, SEO friendly, and inspiring.",
        },
      },
    },
  ],
});
