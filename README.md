# Product Listing

A small React application that fetches and displays a list of products from a mock API, allowing users to filter products by category and search by name.

## How to run on your machine

In root directory, run:

```npm install```

```npm run dev```

## Linting

The configuration found under [eslint.config.js](/eslint.config.js) is purely my personal preference. It is mostly strict and very explicit as I believe it is most beneficial for a more maintainable code.

### Expanding the Eslint configuration

You could easily fine tune it in the `rules` section under the [eslint.config.js](/eslint.config.js)` file.

### vscode setup

For best compatibility with vscode and eslint, install the following extension:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

then add `.vscode` to the root path and add `settings.json`, the content of the latter should be:

```json
{
  "eslint.enable": true,
  "editor.formatOnSave": true,
  // Relevant only if you have prettier as the default formatter in your editor.
  "prettier.enable": false,

  // Auto fix
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },
  "eslint.validate": ["typescript", "typescriptreact"],
  "eslint.workingDirectories": ["./src"],
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

## TODO

Add more documentation as necessary.
