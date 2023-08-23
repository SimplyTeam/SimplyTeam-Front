import { defineConfig } from 'cypress'
import { lighthouse, prepareAudit } from '@cypress-audit/lighthouse'

export default defineConfig({
	e2e: {
		baseUrl: 'http://localhost:3000',
		setupNodeEvents(on) {
			// implement node event listeners here
			on('before:browser:launch', (_, launchOptions) => {
				prepareAudit(launchOptions)
			})

			on('task', {
				lighthouse: lighthouse()
			})
		}
	}
})
