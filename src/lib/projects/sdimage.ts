import logo from "$lib/images/sdimage.png?width=500&height=500&imgtool";
import logoWebp from "$lib/images/sdimage-logo.png?width=500&height=500&webp&imgtool";
import { versions } from "$lib/versions/sdimage";

import type { IProject } from ".";

export const sdImage = {
    title: "SD Image Info",
    name: "sddimage",
    description: "Web app for reading Stable Diffusion image generation info",
    logo: { png: logo, webp: logoWebp },
    internalLink: "/projects/sdimage",
    links: [
        {
            href: "https://sdimage.info",
            type: "Web"
        }
    ],
    versions,
    features: []
} as IProject;