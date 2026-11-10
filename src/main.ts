import { createGroupInformation, createNamedGroupInformation } from "./group-handler";
import { createURL, readURL } from "./url-handler";
import "./style.css";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <h1>Secret Assigner</h1>
    <h2>Create your secret group!</h2>
    <div>
        <p>Group Name:</p>
        <input type="text" id="name"></input>
    </div>
    <div>
        <p>Group Description (optional):</p>
        <textarea id="description" cols="30" rows="4"></textarea>
    </div>
    <div id="secrets">
        <p>Secrets:</p>
        <ul>
            <li>
                <input type="text" class="secret-input"></input>
            </li>
        </ul>
    </div>
    <div>
        <label>
            <input type="checkbox" id="show-recipients"></input>
            Show who to send this link to
        </label>
    </div>
    <button id="learn-more">Learn More</button>
    <button id="add-secret">Add Secret</button>
    <button id="generate-links">Generate Links</button>
    <div id="links"></div>
`;

document.addEventListener('DOMContentLoaded', () => {
    // check if URL has group info
    const url = window.location.href;

    const groupInfo = readURL(url);
    if (groupInfo) {
        document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
            <h1>${groupInfo.groupName}</h1>
        `;
        if (groupInfo.groupDescription) {
            document.querySelector<HTMLDivElement>('#app')!.innerHTML += `
                <p>${groupInfo.groupDescription}</p>
            `;
        }
        document.querySelector<HTMLDivElement>('#app')!.innerHTML += `
            <h2>Your Secret:</h2>
            <p>${groupInfo.secret}</p>
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

    const showRecipients = (document.getElementById('show-recipients') as HTMLInputElement).checked;
    const linksContainer = document.querySelector<HTMLDivElement>('#links')!;
    const baseUrl = window.location.href.split('#')[0];

    if (showRecipients) {
        const trimmedNames = secrets.map(secret => secret.trim());
        if (trimmedNames.length < 2) {
            linksContainer.innerHTML = `<p>Add at least two names so no one gets themselves.</p>`;
            return;
        }
        // Names are the only identity we have, so a duplicate would make "assigned themselves" ambiguous.
        if (new Set(trimmedNames).size !== trimmedNames.length) {
            linksContainer.innerHTML = `<p>Each name must be unique.</p>`;
            return;
        }

        const groups = createNamedGroupInformation(trimmedNames, name, description);
        renderLinks(linksContainer, groups.map(({ recipient, ...groupInfo }) => ({
            label: `${recipient}'s link`,
            url: createURL(baseUrl, groupInfo),
        })));
        return;
    }

    const groups = createGroupInformation(secrets, name, description);
    renderLinks(linksContainer, groups.map((groupInfo, i) => {
        const url = createURL(baseUrl, groupInfo);
        return { anchorText: `Link ${i + 1}`, url };
    }));
}

// Built with DOM nodes rather than innerHTML so typed names can't inject markup.
const renderLinks = (container: HTMLDivElement, links: { label?: string; anchorText?: string; url: string }[]) => {
    const heading = document.createElement('h2');
    heading.textContent = 'Generated Links:';
    const list = document.createElement('ul');

    for (const { label, anchorText, url } of links) {
        const item = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.target = '_blank';
        anchor.textContent = anchorText ?? url;
        if (label) item.append(`${label}: `);
        item.append(anchor);
        list.appendChild(item);
    }

    container.replaceChildren(heading, list);
}

const addSecretInput = () => {
    const listItem = document.createElement('li');
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.className = 'secret-input';
    listItem.appendChild(newInput);
    document.getElementById('secrets')!.querySelector('ul')!.appendChild(listItem);
}

const createLearnMorePage = () => {
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
        <h1>About Secret Assigner</h1>
        <div>
            <p class="about-description">This application allows you to create groups with secret assignments. Each group member receives a unique link containing their assigned secret, the group name, and group description. </p>
            <p class="about-description">You don't need an account and there are no ads. All you need is the links generated. To learn more about this project, please visit https://github.com/f1nn3g4n/secret-assigner#.</p>
        </div>
        <button id="back-button">Back</button>
    `;

    document.getElementById('back-button')!.addEventListener('click', () => {
        window.location.reload();
    });
}

document.getElementById('learn-more')!.addEventListener('click', createLearnMorePage);
document.getElementById('add-secret')!.addEventListener('click', addSecretInput);
document.getElementById('generate-links')!.addEventListener('click', generateLinks);