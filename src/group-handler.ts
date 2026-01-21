import { GroupInformation } from "./types";

export const createGroupInformation = ( secrets: string[], groupName: string, groupDescription?: string ): GroupInformation[] => {
    const randomizedSecrets = secrets.sort(() => Math.random() - 0.5);
    const groups: GroupInformation[] = [];

    for (const secret of randomizedSecrets) {
        groups.push({
            groupName,
            groupDescription,
            secret
        });
    }

    return groups;
}