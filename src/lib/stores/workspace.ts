import { goto } from '$app/navigation'
import type { IWorkspace } from '$lib/models/workspace'
import { showToast } from '$lib/utils/Toast'
import axios from '$lib/utils/axios'
import { writable } from 'svelte/store'

export const currentWorkspace = writable<IWorkspace>()
export const workspaces = writable<Array<IWorkspace>>([])

export const getAllWorkspaces = async () => {
	const response = await axios.get('/workspaces')
	workspaces.set(response.data)
}
export const getWorkspace = async (id: string) => {
	const response = await axios.get(`/workspaces/${id}`)

	currentWorkspace.set(response.data)
}
export const createWorkspace = async (
	access_token: string,
	payload: { name: string; description: string }
) => {
	try {
		const response = await axios.post('/workspaces', payload)
		await getAllWorkspaces()
	} catch (err: any) {
		return err.response.data
	}
}
export const updateWorkspace = async (
	access_token: string,
	payload: { id: number; name: string; description?: string; invitations?: Array<string> }
) => {
	try {
		const response = await axios.put(`/workspaces/${payload.id}`, payload)
		currentWorkspace.set(response.data)
	} catch (err: any) {
		return err.response.data
	}
}
export const deleteWorkspace = async (access_token: string, id: number) => {
	try {
		const response = await axios.delete(`/workspaces/${id}`)
		showToast('Espace de travail supprimé', 'success')
		goto('/workspaces', { replaceState: true })
		await getAllWorkspaces()
	} catch (err: any) {
		return err.response.data
	}
}

export const deleteUserFromWorkspace = async (
	access_token: string,
	workspace: IWorkspace,
	user_id: number
) => {
	try {
		const response = await axios.delete(`/workspaces/${workspace.id}/users/${user_id}`)
		await getWorkspace(workspace.id.toString())
	} catch (err: any) {
		showToast(err.response.data.error, 'error')
	}
}
