import { defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      options: {
        canvasApp: {
          purpose: "Name of the project",
        },
      },
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", canvasApp: { exclude: true } },
    },
    {
      name: "pinned",
      title: "Pinned",
      type: "boolean",
      description: "Pin this article to appear at the top",
      options: {
        canvasApp: {
          exclude: true,
        },
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation(rule) {
        return rule.max(80);
      },
      options: {
        canvasApp: {
          purpose: "Short description of the project. Hook the reader to read it. 4-8 words.",
        },
      },
    },
    {
      name: "icon",
      title: "Icon",
      type: "image",
      options: {
        hotspot: true,
        canvasApp: {
          exclude: true,
        },
      },
    },
    {
      name: "cover_image",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
        canvasApp: {
          exclude: true,
        },
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
      name: "previews",
      title: "Previews",
      type: "array",
      options: {
        canvasApp: {
          exclude: true,
        },
      },
      of: [
        {
          name: "image",
          title: "Preview Image",
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
      ],
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      options: {
        canvasApp: {
          exclude: true,
        },
      },
      of: [
        {
          type: "reference",
          name: "Technology",
          to: [
            {
              type: "tech",
            },
          ],
        },
      ],
    },
    {
      name: "date",
      title: "Date",
      type: "date",
      options: {
        canvasApp: {
          exclude: true,
        },
      },
    },
    {
      name: "demo_link",
      title: "Demo Link",
      type: "url",
      options: {
        canvasApp: {
          exclude: true,
        },
      },
    },
    {
      name: "source_link",
      title: "Source Link",
      type: "url",
      options: {
        canvasApp: {
          exclude: true,
        },
      },
    },
    {
      name: "role",
      title: "Role",
      type: "string",
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
          purpose:
            "Detailed description of the project, explaining the technologies used, the challenges faced, and the solutions implemented.",
        },
      },
    },
  ],
});
