import { createGroupInformation } from "./group-handler";
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

    const groups = createGroupInformation(secrets, name, description);
    const baseUrl = window.location.href.split('#')[0];

    let urlLinks: string = '';

    for (let i = 0; i < groups.length; i++) {
        const url = createURL(baseUrl, groups[i]);
        urlLinks += `
            <li><a href="${url}" target="_blank">Link ${i + 1}</a></li>
        `;
    }

    document.querySelector<HTMLDivElement>('#links')!.innerHTML = `
        <h2>Generated Links:</h2>
        <ul>
            ${urlLinks}
        </ul>
    `;
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