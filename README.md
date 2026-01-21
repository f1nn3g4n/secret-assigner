# secret-assigner

## Description
Simple web app for assigning secrets to your friends! Think Secret Santa, gift exchanges, murder mystery roles, etc.

I made this web app because I felt annoyed with current gift exchange platforms that require email sign up and have ads. The concept of creating a group, randomizing assigned secrets, and notifying group members is simple, why do I have to give my personal data to do that?

This app is designed to fill that need. It is very bare bones and doesn't use a server. Relying on unique URL encoding, each group member will see a unique page with your specified information.

## How to run
This is a simple Vite app with a few dependencies. Install the packages and run `npx vite` (if using node).

## Contributing
This is open source, so feel free to contribute pull requests! Keep in mind the main goals:

1. Create a group and be able to assign secrets to group members
2. Don't require users to make accounts
3. Don't force ads on users
4. Have an app that is lightweight and runs with little to no support
