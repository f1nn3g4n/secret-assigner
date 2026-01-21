/** Reads and creates URLs */

import { compressToEncodedURIComponent, decompressFromEncodedURIComponent } from "lz-string";
import { GroupInformation } from "./types";

export const readURL = (url: string): GroupInformation | undefined => {
    const splitUrl = url.split("#");
    if (splitUrl.length < 2) return undefined;

    try {
        const decoded = decompressFromEncodedURIComponent(splitUrl[1]);
        if (!decoded) return undefined;
        return JSON.parse(decoded) as GroupInformation;
    } catch (error) {
        return undefined;
    }
}

export const createURL = (baseUrl: string, groupInfo: GroupInformation): string => {
    const encoded = JSON.stringify(groupInfo);
    const compressed = compressToEncodedURIComponent(encoded);
    return `${baseUrl}#${compressed}`;
}