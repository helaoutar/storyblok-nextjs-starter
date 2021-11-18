export async function fetchAPI(
  query,
  { variables, preview }: { variables?: any; preview?: boolean }
) {
  const res = await fetch("https://gapi.storyblok.com/v1/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Token: process.env.STORYBLOK_API_KEY,
      Version: preview ? "draft" : "published",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

// Get all slugs for sitemap
export async function getAllSlugs(preview = false) {
  const data = await fetchAPI(
    `
  query AllSlugs {
    Links(starts_with: "") {
      items {
        slug
      }
    }
  }
  `,
    {
      preview,
    }
  );

  return data?.Links?.items || [];
}

export async function getAllLanguages() {
  const data = await fetchAPI(
    `
    query allLanguages {
      Space {
        languageCodes
      }
    }
  `,
    {}
  );

  return data?.Space?.languageCodes || [];
}
