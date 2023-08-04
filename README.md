# Your Cool Amplenote Plugin

In this section you can provide some details about the [Amplenote plugin](https://www.amplenote.com/help/developing_amplenote_plugins) 
that this repo will implement.

## Installation

1. Clone this repo. `git clone git@github.com:alloy-org/plugin-template.git`
2. Copy its contents to a directory with the name of your plugin. `cp -r plugin-template my-cool-plugin`
3. `cd my-cool-plugin`
4. Install node and npm with your package manager of choice. `brew install node` or `apt install nodejs` 
5. Run `npm install` to install the packages (jest, fetch (for Jest)).  
6. Set up your repo as the remote origin. `git remote set-url origin git@github.com:my-org/my-cool-plugin.git`
7. Push your repo to GitHub. `git push`
8. 🎉
Optional
9. If you are going to use any secret keys, put them in `.env.example`, then copy that to `.env` 
   and fill in whatever environment variables you need

## Testing

Run `NODE_OPTIONS=--experimental-vm-modules npm test` to run the tests.

If it complains about jsdom being absent, run `npm install -D jest-environment-jsdom` and try again.

### With JetBrains

If you are using a JetBrains IDE (Webstorm, Rubymine, anything that speaks Javascript), you can get an 
excellent debugging environment to run your tests.

[Read how to set up tests with this environment in JetBrains IDEs](https://public.amplenote.com/GPTbAGiRYddSCLtuTXGS1tSo).

### Run tests continuously as modifying the plugin

```bash
NODE_OPTIONS=--experimental-vm-modules npm run test -- --watch
```

## Technologies used to help with this project

* https://esbuild.github.io/getting-started/#your-first-bundle
* https://jestjs.io/
* https://www.gitclear.com
