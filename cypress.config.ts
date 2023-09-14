import { defineConfig } from "cypress";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor"
import webpack from "@cypress/webpack-preprocessor"
import { lighthouse, prepareAudit } from "@cypress-audit/lighthouse"

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: '**/*.feature',
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config)

      on(
        "file:preprocessor",
        webpack({
          webpackOptions: {
            resolve: {
              extensions: [ ".ts", ".js" ],
            },
            module: {
              rules: [
                {
                  test: /\.ts$/,
                  exclude: [ /node_modules/ ],
                  use: [
                    {
                      loader: "ts-loader",
                    },
                  ],
                },
                {
                  test: /\.feature$/,
                  use: [
                    {
                      loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                      options: config,
                    },
                  ],
                },
              ],
            },
          },
        })
      )

      // implement node event listeners here
      on('before:browser:launch', (_, launchOptions) => {
        prepareAudit(launchOptions)
      })

      on('task', {
        lighthouse: lighthouse()
      })

      return config
    }
  }
})