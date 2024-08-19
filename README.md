# Product Listing

A small React application that fetches and displays a list of products from a mock API, allowing users to filter products by category and search by name.

## How to run on your machine

In root directory, run:

```npm install```

```npm run dev```

## Linting

The configuration found under [eslint.config.js](/eslint.config.js) is purely my personal preference. It is mostly strict and very explicit as I believe it is most beneficial for a more maintainable code.

### Expanding the Eslint configuration

You could easily fine tune it in the `rules` section under the [eslint.config.js](/eslint.config.js) file.

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

## Env Variables

In order for the application to function correctly. A `.env` file is required under the root path. The content of the file should be as follows:

```bash
# API Base Url
VITE_BASE_URL=api
```

## Testing

In the root directory run:

```npm run test```

The tests are taken into account in the CI pipeline to insure the integrity of the app and especially of the main branch.

## App Structure

The application is structured in a separation of concerns mainly. If we were to have multiple features within the application (currently it is only about the products), it would be different.

- The [Components](/src/components/) folder holds all the components of the application. There is a separate folder per concern and a separate file per responsibility.
- The [constants](/src/constants/) folder holds files presenting constants to be used across the application.
- The [hooks](/src/hooks/) folder holds custom hooks. For now only the `useFilteredProducts` is implemented. At larger scale, we should expect more.
- The [mocks](/src/mocks/) folder holds the mocking of the backend. You could find the documentation for this particular folder [here](/src/mocks/README.md).
- The [store](/src/store/) folder holds the redux store that the application uses. It holds the `store` , the `rootReducer` as well as a separate folder per slice.
- The [theme](/src/theme/) folder holds the theming of application. Anything related to global styling and theming should go under this folder.
- The [types](/src/types/) folder holds the types to be used across the application. Although the name of the folder is `types`, it doesn't mean that it could only hold types, it could have interfaces as well.
- The [utils](/src/utils/) folder should holds all utility functions that to be used by the application.
- The [testUtils](/src/testUtils/) folder holds the utilities exclusive to testing.

## Disclaimer for Reviewers

I tried to focus mainly on code quality and maintainability when developing this application and portray as much as I could how I would work in a production environment.So, Although the title of the application is "The most amazing product list application", It is certainly not the best looking one. Given more time, I would have made it look way better.
