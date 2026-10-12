import type { ApiClient } from './api';
export interface ProfileAnswer { questionId: string; answer: string | string[] }
export interface ProfileSubmission { consentVersion: string; answers: ProfileAnswer[] }
export interface ProfileReceipt { id: string; receivedAt: string }
export function createProfileService(api: ApiClient) { return { submit: (data: ProfileSubmission) => api.post<ProfileReceipt>('profiles',data) }; }
// Preparado para API; sem integração real nesta etapa.
