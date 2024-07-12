# Deploying A Local Server

## System Requirements

- Node 18+
- A [Vercel](https://vercel.com/) account
- [Kitloong JSON Server repository](https://github.com/kitloong/json-server-vercel)
- A browser capable of running JavaScript (Chrome, Firefox, Safari, or Edge)
- Operating System (Windows 10+, MacOS, Linux, etc.)
- A text editor capable of running JavaScript (Visual Studio Code, Vim, Nano, Emacs, Atom, Sublime Text, etc.)
- RAM >= 4GB
- Disk space >= 1GB

## Installation

To use this repo, follow these steps:

### Alternative One

1.  Open the terminal/CLI on your computer.

2.  If you don't have JSON server installed in the terminal, install it globally using the following command:

        npm install -g json-server

3.  Clone the repository by running the following command:

        git clone https://github.com/oyieroyier/deploying_a_local_server.git

4.  Change directory to the repo folder:

        cd deploying_a_local_server

5.  Open it in your Code Editor of choice. If you use VS Code, run the command:

        code .

### Alternative Two

- On the top right corner of this page there is a button labelled `Fork`.

- Click on that button to create a copy of the repository to your own account.

- Follow the process described in `Alternative One` above.

- Remember to replace your username when cloning.

      git clone https://github.com/your-github-username-here/deploying_a_local_server.git

## Deploying the local server

- Go to the [Kitloong JSON Server repository](https://github.com/kitloong/json-server-vercel) on GitHub.

- Click on the `Use this template` button and choose the `Create a new repository`

- Give your repository a name and select a privacy setting.

- After your template is generated, click on `db.json` and edit it on GitHub by clicking on the pencil icon.

- Copy all the content in the `db.json` file your project open on the text editor.

- Paste the copied content in the `db.json` on GitHub and click on the `Commit changes...` button.

- Click on `Commit changes` button to complete the commit process.

## Creating a Vercel Account

- Go to the [Vercel website](https://vercel.com/) and sign up using your GitHub account.

- If prompted by GitHub, authorize Vercel to access your repositories.

## Deploying the server on Vercel

- On your Vercel dashboard, click on the `Add New...` button and select `Project`.

- Click on the `Import` button next to your project's name and then on `Deploy`. Give the process time to finish.

- You will be redirected to a `Congratulations` page with confetti.

- Click on the image below the **"You just deployed a new Project to Vercel."** text. It will redirect you to another page, which is your base URL.

- Under the `Resources` section, there will be a list of all your endpoints.

- Click on `/staff` and copy the URL from the URL bar.

## Running the application locally

- Open the `index.html` file in Mozilla Firefox, Safari or any Chromium-based browser.

- If using VS Code, you can use the Live Server extension to run the file on the browser for live reloading.

- Click [HERE](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) to install the Live Server extension and to read instructions on how to use it.

- Open the `app.js` file and replace the local server URL with the copied link.

## Authors

[Bob Oyier](https://github.com/oyieroyier/)

## License

[![License: ICL](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
