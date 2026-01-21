import { createGroupInformation } from "./group-handler";
import { createURL, readURL } from "./url-handler";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <input type="text" id="name"></input>
    <input type="text" id="description"></input>
    <!-- unlimited number of secret inputs -->
    <div id="secrets">
        <input type="text" class="secret-input"></input>
    </div>
    <button id="add-secret">Add Secret</button>
    <button id="generate-links">Generate Links</button>
`;

document.addEventListener('DOMContentLoaded', () => {
    // check if URL has group info
    const url = window.location.href;

    const groupInfo = readURL(url);
    if (groupInfo) {
        document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
            <h1>Group Information</h1>
            <p><strong>Group Name:</strong> ${groupInfo.groupName}</p>
            <p><strong>Group Description:</strong> ${groupInfo.groupDescription ?? 'N/A'}</p>
            <p><strong>Secret:</strong> ${groupInfo.secret}</p>
        `;
    }
});

const generateLinks = () => {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const description = (document.getElementById('description') as HTMLInputElement).value;


    const secretInputs = document.getElementsByClassName('secret-input') as HTMLCollectionOf<HTMLInputElement>;
    const secrets: string[] = [];
    for (let i = 0; i < secretInputs.length; i++) {
        const value = secretInputs[i].value;
        if (value) {
            secrets.push(value);
        }
    }

    const groups = createGroupInformation(secrets, name, description);
    const baseUrl = window.location.href.split('#')[0];

    const urls = groups.map(g => createURL(baseUrl, g));

    document.querySelector<HTMLDivElement>('#app')!.innerHTML += `
        <h2>Generated Links:</h2>
        <ul>
            ${urls.map(url => `<li><a href="${url}" target="_blank">${url}</a></li>`).join('')}
        </ul>
    `;
}

const addSecretInput = () => {
    const secretsDiv = document.getElementById('secrets')!;
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.className = 'secret-input';
    secretsDiv.appendChild(newInput);
}

document.getElementById('add-secret')!.addEventListener('click', addSecretInput);
document.getElementById('generate-links')!.addEventListener('click', generateLinks);