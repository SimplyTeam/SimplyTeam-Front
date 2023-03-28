import type { IProject } from '$lib/stores/projects'
import type { LayoutLoad } from './$types'
export const load = (({ params }) => {
	const project: IProject = {
		name: 'Project 1',
		id: params.project,
		sprints: [
			{
				name: 'Sprint 1',
				id: '1',
				tasks: [
					{
						name: 'Task 1',
						id: '1',
						description: 'Description 1',
						assignees: [
							{
								name: 'User 1',
								id: '1',
								avatarUrl: 'https://i.pravatar.cc/300'
							},
							{
								name: 'User 2',
								id: '2',
								avatarUrl: 'https://i.pravatar.cc/300'
							},
							{
								name: 'User 3',
								id: '3',
								avatarUrl: 'https://i.pravatar.cc/300'
							}
						],
						priority: 'High',
						estimate: 1,
						timeSpent: 0,
						status: 'Todo',
						subtasks: []
					},
					{
						name: 'Task 2',
						id: '2',
						description: 'Description 2',
						status: 'Todo',
						assignees: [],
						priority: 'High',
						estimate: 1,
						timeSpent: 0,
						subtasks: [
							{
								name: 'Subtask 1',
								id: '3',
								description: 'Description 1',
								status: 'Todo',
								assignees: [
									{
										name: 'User 1',
										id: '1',
										avatarUrl: 'https://i.pravatar.cc/300'
									},
									{
										name: 'User 2',
										id: '2',
										avatarUrl: 'https://i.pravatar.cc/300'
									}
								],
								priority: 'High',
								estimate: 1,
								timeSpent: 0
							}
						]
					}
				]
			},
			{
				name: 'Sprint 2',
				id: '1',
				tasks: [
					{
						name: 'Task 1',
						id: '1',
						description: 'Description 1',
						assignees: [
							{
								name: 'User 1',
								id: '1',
								avatarUrl: 'https://i.pravatar.cc/300'
							},
							{
								name: 'User 2',
								id: '2',
								avatarUrl: 'https://i.pravatar.cc/300'
							}
						],
						priority: 'High',
						estimate: 1,
						timeSpent: 0,
						status: 'Todo',
						subtasks: []
					},
					{
						name: 'Task 2',
						id: '2',
						description: 'Description 2',
						status: 'Todo',
						assignees: [
							{
								name: 'User 1',
								id: '1',
								avatarUrl: 'https://i.pravatar.cc/300'
							},
							{
								name: 'User 2',
								id: '2',
								avatarUrl: 'https://i.pravatar.cc/300'
							}
						],
						priority: 'High',
						estimate: 1,
						timeSpent: 0,
						subtasks: [
							{
								name: 'Subtask 3',
								id: '3',
								description: 'Description 1',
								status: 'Todo',
								assignees: [
									{
										name: 'User 1',
										id: '1',
										avatarUrl: 'https://i.pravatar.cc/300'
									}
								],
								priority: 'High',
								estimate: 1,
								timeSpent: 0
							}
						]
					}
				]
			}
		],
		backlog: []
	}

	return {
		project
	}
}) satisfies LayoutLoad
