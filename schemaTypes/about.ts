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
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "date",
      title: "Date",
      type: "date",
      description: "Date you write this about",
    },
    {
      name: "cv",
      title: "CV",
      type: "file",
      description: "Your latest CV",
    },
    {
      name: "content",
      title: "Content",
      type: "blockContent",
    },
  ],
});
