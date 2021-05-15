import React from "react";
import Page from "./Page";
import Paragraph from "./Paragraph";

const Components = {
  page: Page,
  Paragraph: Paragraph,
};

export default (blok, uuid) => {
  if (typeof Components[blok.component] !== "undefined") {
    return React.createElement(Components[blok.component], {
      key: blok._uid,
      content: blok,
      uuid,
    });
  }
  return React.createElement(
    () => <div>The component {blok.component} has not been created yet.</div>,
    { key: blok._uid }
  );
};
