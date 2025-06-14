import { defineType } from "sanity";

export default defineType({
  name: "experience",
  title: "Experiences",
  type: "document",
  options: {
    canvasApp: {
      exclude: true,
    },
  },
  fields: [
    {
      name: "icon",
      title: "Icon",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "position",
      title: "Position",
      type: "string",
    },
    {
      name: "company",
      title: "Company Name",
      type: "string",
    },
    {
      name: "url",
      title: "Company URL",
      type: "url",
    },
    {
      name: "still_working",
      title: "Still Working",
      type: "boolean",
    },
    {
      name: "start_date",
      title: "Start Date",
      type: "date",
    },
    {
      name: "end_date",
      title: "End Date",
      type: "date",
      description: "If still working, leave this blank",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "category",
      title: "Type of Job (e.g. Full Time, Freelance, etc.)",
      type: "string",
      options: {
        list: [
          { title: "Full Time", value: "Full Time" },
          { title: "Contract", value: "Contract" },
          { title: "Freelance", value: "Freelance" },
          { title: "Internship", value: "Internship" },
        ],
      },
    },
    {
      name: "pinned",
      title: "Pinned",
      type: "boolean",
      description: "Pin this experience to appear at the top",
    },
    {
      name: "short_desc",
      title: "Short Description",
      type: "text",
      validation(rule) {
        return rule.max(300);
      },
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
  ],
});
