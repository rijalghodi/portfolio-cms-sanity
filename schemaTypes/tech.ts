import { defineType } from "sanity";

export default defineType({
  name: "tech",
  title: "Techs",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "link",
      title: "Link",
      type: "url",
    },
    {
      name: "icon",
      title: "Icon",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
});
