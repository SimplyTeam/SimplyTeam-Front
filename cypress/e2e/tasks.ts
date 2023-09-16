import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor"


Given(/^I have a project with a sprint$/, function () {
  cy.intercept({
      method: 'GET',
      url: 'api/workspaces',
      hostname: 'localhost',
    }, {
      statusCode: 200,
      body: {
        workspaces: [
          {
            created_at: "2023-09-13T17:45:34.000000Z",
            created_by: { id: 1, name: "Luca", email: "test@test.fr", level: { id: 1, max_point: 100, min_point: 0 } },
            description: "description",
            id: 3,
            name: "mon espace de travail 1",
            projects: [
              {
                created_at: "2023-09-14T18:37:18.000000Z",
                id: 2,
                name: "test",
                updated_at: "2023-09-14T18:37:18.000000Z",
                workspace_id: 3,
              }
            ],
            updated_at: "2023-09-13T17:45:34.000000Z",
            users: [ { id: 1, name: "Luca", email: "test@test.fr", level: { id: 1, max_point: 100, min_point: 0 } } ],
          }
        ]
      }
    },
  ).as('getWorkspaces')

  cy.intercept({
      method: 'GET',
      url: 'api/workspaces/3',
      hostname: 'localhost',
    }, {
      statusCode: 200,
      body: {

        created_at: "2023-09-13T17:45:34.000000Z",
        created_by: { id: 1, name: "Luca", email: "test@test.fr", level: { id: 1, max_point: 100, min_point: 0 } },
        description: "description",
        id: 3,
        name: "mon espace de travail 1",
        projects: [
          {
            created_at: "2023-09-14T18:37:18.000000Z",
            id: 2,
            name: "test",
            updated_at: "2023-09-14T18:37:18.000000Z",
            workspace_id: 3,
          }
        ],
        updated_at: "2023-09-13T17:45:34.000000Z",
        users: [ { id: 1, name: "Luca", email: "test@test.fr", level: { id: 1, max_point: 100, min_point: 0 } } ],
      }
    },
  ).as('getWorkspaces')

  cy.intercept({
    method: 'GET',
    url: 'api/workspaces/3/projects',
    hostname: 'localhost',
  }, {
    statusCode: 200,
    body: {
      projects: [ {
        created_at: "2023-09-13T17:45:34.000000Z",
        description: "description",
        id: 3,
        name: "mon projet 1",
      } ]
    }
  })

  cy.intercept({
    method: 'GET',
    url: 'api/workspaces/3/projects/3/sprints',
    hostname: 'localhost',
  }, {
    statusCode: 200,
    body: [
      {
        begin_date: "2023-09-14", closing_date: null,
        created_at: "2023-09-14T18:37:27.000000Z",
        end_date: "2023-09-14",
        id: 5,
        name: "Feature 1",
        project_id: 3,
        tasks: [],
        updated_at: "2023-09-14T18:37:27.000000Z",
      }
    ],
  })

  cy.intercept({
    method: 'GET',
    url: 'api/workspaces/3/projects/3/tasks',
    hostname: 'localhost',
  }, {
    statusCode: 200,
    body: []
  })

  cy.intercept({
    method: 'GET',
    url: 'api/workspaces/3/projects/3/tasks/backlog',
    hostname: 'localhost',
  }, {
    statusCode: 200,
    body: {
      tasks: []
    }
  })
})

When(/^I create a task$/, function () {
  cy.wait('@getWorkspaces')
  cy.get("button:contains('Ajouter une tâche')").click()

  cy.intercept({
    method: 'POST',
    url: 'api/workspaces/3/projects/3/tasks',
    hostname: 'localhost',
  }, {
    statusCode: 200,
  })

  cy.intercept({
    method: 'GET',
    url: 'api/workspaces/3/projects/3/sprints',
    hostname: 'localhost',
  }, {
    statusCode: 200,
    body: [
      {
        begin_date: "2023-09-14", closing_date: null,
        created_at: "2023-09-14T18:37:27.000000Z",
        end_date: "2023-09-14",
        id: 5,
        name: "Feature 1",
        project_id: 3,
        tasks: [
          {
            created_at: "2023-09-14T19:54:03.000000Z",
            created_by: { id: 1, name: "Luca", email: "test@test.fr", email_verified_at: null },
            deadline: "2023-09-14 19:30:43",
            description: "test",
            estimated_timestamp: 0,
            finished_at: null,
            id: 14,
            is_finish: false,
            label: "test",
            parent_id: null,
            priority_id: 2,
            project_id: 2,
            realized_timestamp: 0,
            sprint: { id: 5, name: "sprint", begin_date: "2023-09-14", end_date: "2023-09-14", project_id: 2 },
            sprint_id: 5,
            status_id: 1,
            subtasks: [],
            updated_at: "2023-09-14T19:54:03.000000Z",
            users: []
          }
        ],
        updated_at: "2023-09-14T18:37:27.000000Z",
      }
    ],
  })

  // get by name
  cy.get("input[name='name']").type("ma tâche 1")
  cy.get("textarea[name='description']").type("ma description 1")
  cy.get("input[name='estimatedTime']").type("8")
  cy.get("input[name='completedTime']").type("0")

  cy.get("button:contains('Enregister')").click()
})
Then(/^I should see the task$/, function () {

})