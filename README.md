![enter image description here](https://i.ibb.co/KLgy51j/Screenshot-2021-05-15-at-01-34-22.png)

## **Setup**

1.  **Install dependencies**

After you clone the project, open it and run:

    yarn

This should install all the dependencies and get you almost all setup up.

2.  **Setup your env variables**

The only one you need is your **Storyblok** api key.
Just head into your Storyblok dashboard, then open settings, and you should see your API key under **API-keys** tab:

![enter image description here](https://i.ibb.co/hcWkYYB/Screenshot-2021-05-15-at-00-14-23.png)
Once you get the key, open `.env` then assign it to `STORYBLOK_API_KEY`

## How to use

1.  Define your components mapping

If you open `components/index.js` you should see a `Components` object, this is where your Storyblock-to-React components mapping should go, i.e:

    import React from "react";
    import Page from "./Page";
    import HeroBlock from "./HeroBlock"

    const Components = {
      page: Page,
      // the key should match the name you define on Storyblock
      HeroBlock: HeroBlock
    };

\*\*

## Step by Step example:
