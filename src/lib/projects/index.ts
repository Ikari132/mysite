import { sdImage } from "./sdimage";
import { twity } from "./twity";
import { wtc } from "./wtc";

type TLinkType = "Chrome" | "Firefox" | "Web";
export interface IProject {
    name: string;
    title: string;
    description: string;
    logo: { png: string; webp: string };
    internalLink: string;
    links: { href: string; type: TLinkType }[],
    versions: any[];
    features: { title: string; description: string; image: string; }[]
}
export const PROJECTS = [
    sdImage,
    wtc,
    twity,
] as IProject[];    