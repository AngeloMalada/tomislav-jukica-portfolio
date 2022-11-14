export default {
  name: "user",
  title: "User",
  type: "document",
  fields: [
    {
      name: "slogan1",
      title: "Slogan1",
      type: "string",
    },
    {
      name: "slogan2",
      title: "Slogan2",
      type: "string",
    },
    {
      name: "slogan3",
      title: "Slogan3",
      type: "string",
    },
    {
      name: "slogan4",
      title: "Slogan4",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
