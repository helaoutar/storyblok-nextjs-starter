import React from "react";
import Router from "next/router";

import Components from "../components/index";
import StoryblokService from "../lib/storyblockService";
import useStoryblok from "../lib/storyblok-hook";
import { languages } from "../constants";

const Index = (props) => {
  const story = useStoryblok(props.page.data.story);

  return <>{Components(story.content, story.uuid)}</>;
};

Index.getInitialProps = async ({ query, res }) => {
  StoryblokService.setQuery(query);
  let slug = (query.slug && query.slug.join("/")) || "home";

  const countryCodes = languages.map(({ code }) => code.toLowerCase());
  if (countryCodes.includes(slug)) {
    slug = `${slug}/home`;
  }

  try {
    const page = await StoryblokService.get(
      `cdn/stories/${slug}?resolve_relations=global_reference.reference`,
      {}
    );

    return {
      page,
      slug,
    };
  } catch (e) {
    let location = "/not-found";
    let slugs = slug.split("/");
    if (
      slugs.length > 1 &&
      countryCodes.includes(slugs[0]) &&
      slugs[1] !== "home"
    ) {
      location = `/${slugs[0]}/not-found`;
    }
    if (res) {
      res.writeHead(307, { Location: location });
      res.end();
    } else {
      Router.replace(location);
    }
  }
};

export default Index;
