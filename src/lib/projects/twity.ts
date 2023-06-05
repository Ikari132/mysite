import twityPostNumber from "$lib/images/twity-posts-number.png";
import twityOpenProfile from "$lib/images/twity-open-profile.png";
// import twityLogo from "$lib/images/twity.png";

import logo from "$lib/images/twity.png?width=500&height=500&imgtool";
import logoWebp from "$lib/images/twity.png?width=500&height=500&webp&imgtool";

import { versions } from "$lib/versions/twity";
import type { IProject } from ".";

export const twity = {
    title: "Twity",
    name: "twity",
    description: "Extension for deleting Tweets",
    logo: { png: logo, webp: logoWebp },
    internalLink: "/projects/twity",
    links: [
        {
            href: "https://chrome.google.com/webstore/detail/twity/mnencakcmnofdmpgmklkknklikgpodoo",
            type: "Chrome"
        }
    ],
    versions,
    features: [
        {
            title: "Delete your Tweets in a few clicks",
            description: "It deletes Tweets from the most recent to earlier ones",
            image: twityPostNumber
        },
        {
            title: "No permissions are needed",
            description: "All our extension does is click buttons for you",
            image: twityOpenProfile
        }
    ]
} as IProject;