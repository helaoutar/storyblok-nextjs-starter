import React from "react";
import { getAllLanguages, getAllSlugs } from "../lib/api";

const generateSitemap = (posts, url, languages) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${posts
          .filter(({ slug }) => slug.indexOf("global") === -1)
          .map(({ slug }) => {
            return languages
              .map((language) => {
                return `
                    <url>
                        <loc>https://${url}/${language}/${slug}</loc>
                    </url>
                `;
              })
              .join("");
          })
          .join("")}
    </urlset>
    `;
};

export async function getServerSideProps({ req, res }) {
  const url = req?.headers?.host;
  const posts = await getAllSlugs();
  const languages = await getAllLanguages();
  res.setHeader("Content-Type", "text/xml");
  res.write(generateSitemap(posts, url, languages));
  res.end();

  return {
    props: {},
  };
}

const Sitemap = () => <div />;
export default Sitemap;
