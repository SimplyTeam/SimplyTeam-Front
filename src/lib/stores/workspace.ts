import type { IWorkspace } from '$lib/models/workspace'
import axios from '$lib/utils/axios';
import { writable } from 'svelte/store'
import { showToast } from '$lib/utils/Toast';
import { goto } from '$app/navigation';

export const currentWorkspace = writable<IWorkspace | undefined>()
export const workspaces = writable<Array<IWorkspace>>([])

export const getAllWorkspaces = async () => {
  const response = await axios().get('/workspaces');
  workspaces.set(response.data);
};
export const getWorkspace = async (access_token: string, id: number) => {
  const response = await axios(access_token).get(`/workspaces/${id}`);

  currentWorkspace.set(response.data);
}
export const createWorkspace = async ( access_token: string, payload: { name: string, description: string }) => {
  try {
    const response = await axios(access_token).post('/workspaces', payload);
    await getAllWorkspaces();
  }
  catch (err: any) {
    return err.response.data;
  }
}
export const updateWorkspaceDescriptionOrName = async (access_token: string, payload: IWorkspace) => {
  try {
    const response = await axios(access_token).put(`/workspaces/${payload.id}`, payload);
    currentWorkspace.set(response.data);
  }
  catch (err: any) {
    return err.response.data;
  }
}
export const deleteWorkspace = async (access_token: string, id: number) => {
  try {
    const response = await axios(access_token).delete(`/workspaces/${id}`);
    showToast('Espace de travail supprimé', 'success');
    goto('/workspaces', { replaceState: true });
    await getAllWorkspaces();
  }
  catch (err: any) {
    return err.response.data;
  }
}

export const deleteUserFromWorkspace = async (access_token: string, workspace: IWorkspace , user_id: number) => {
  try {
    const response = await axios(access_token).delete(`/workspaces/${workspace.id}/users/${user_id}`);
    await getWorkspace(access_token, workspace.id);
  }
  catch (err: any) {
    showToast(err.response.data.error, 'error');
  }
}

