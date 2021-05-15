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

1.  Let's first setup a **Paragraph** component on **Storyblok**.

![enter image description here](https://i.ibb.co/bdK48S9/Screenshot-2021-05-15-at-03-42-44.png)

2.  Then let's create a page (let's call it `hello-world`) and add the **Paragraph** component, and let's also give it a content.

| `hello-world` page                                                                              | Add paragraph component to `hello-world`                                                        |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| ![enter image description here](https://i.ibb.co/VTYvyQ8/Screenshot-2021-05-15-at-03-54-37.png) | ![enter image description here](https://i.ibb.co/KrXgDP6/Screenshot-2021-05-15-at-03-59-31.png) |

Once you do this, save and publish the content then run:

    yarn dev

Now if open `http://localhost:3000/hello-world` you should see something like this, which perfectly makes sense since we have not created the React component yet:
![enter image description here](https://i.ibb.co/T28q0nB/Screenshot-2021-05-15-at-04-05-44.png)
