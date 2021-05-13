import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  accessToken: process.env.ACCESS_TOKEN,
  cache: {
    clear: "none",
    type: "memory",
  },
});

export default Storyblok;
