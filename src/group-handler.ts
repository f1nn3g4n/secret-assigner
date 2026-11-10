import { GroupInformation } from "./types";

export type NamedGroupInformation = GroupInformation & { recipient: string };

// Fisher-Yates; sort(() => Math.random() - 0.5) is biased toward the original order.
const shuffle = <T>(items: T[]): T[] => {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

export const createGroupInformation = ( secrets: string[], groupName: string, groupDescription?: string ): GroupInformation[] => {
    return shuffle(secrets).map(secret => ({
        groupName,
        groupDescription,
        secret
    }));
}

/**
 * Treats each secret as a person's name and gives every person someone else's name.
 * Reshuffles until no one draws themselves, which samples uniformly from all valid
 * assignments and takes about e (~2.7) attempts on average. Requires at least 2 unique names.
 */
export const createNamedGroupInformation = ( names: string[], groupName: string, groupDescription?: string ): NamedGroupInformation[] => {
    let assigned: string[];
    do {
        assigned = shuffle(names);
    } while (assigned.some((name, i) => name === names[i]));

    return names.map((recipient, i) => ({
        recipient,
        groupName,
        groupDescription,
        secret: assigned[i]
    }));
}
