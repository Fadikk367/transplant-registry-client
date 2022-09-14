import { OrganMatchStatus } from 'constants/enums';
import axios, { handleAxiosError } from './axios';
import type {
  LoginCredentials, 
  Hospital, 
  LoginResponse, 
  RegisterHospitalData, 
  Organ, 
  OrganRequest, 
  OrganMatch,
  OrganRequestData,
  OrganData,
  WithHospital
} from "./types";


export async function loginHospital(credentials: LoginCredentials): Promise<LoginResponse> {
  try {
    const response = await axios.post<LoginResponse>('/auth/login', credentials);
    return response.data;
  } catch (error) {
    const message = handleAxiosError(error);
    throw new Error(message);
  }
}

export async function registerHospital(registerData: RegisterHospitalData): Promise<LoginResponse> {
  try {
    const response = await axios.post<LoginResponse>('/auth/register', registerData);
    return response.data;
  } catch (error) {
    const message = handleAxiosError(error);
    throw new Error(message);
  }
}

export async function fetchHospitals(): Promise<Hospital[]> {
  try {
    const response = await axios.get<Hospital[]>('/hospitals');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch hospitals');
  }
}

export async function fetchOrgans(): Promise<WithHospital<Organ>[]> {
  try {
    const response = await axios.get<WithHospital<Organ>[]>('/organs');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch Organs');
  }
}

export async function fetchOrganRequests(): Promise<WithHospital<OrganRequest>[]> {
  try {
    const response = await axios.get<WithHospital<OrganRequest>[]>('/organ-requests');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch hospitals');
  }
}

export async function fetchOrganMatches(): Promise<OrganMatch[]> {
  try {
    const response = await axios.get<OrganMatch[]>('/organ-matches');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch organ matches');
  }
}

export async function addOrganRequest(data: OrganRequestData): Promise<OrganRequest> {
  try {
    const response = await axios.post<OrganRequest>('/organ-requests', data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to add organ request');
  }
}

export async function addOrgan(data: OrganData): Promise<Organ> {
  try {
    const response = await axios.post<Organ>('/organs', data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to add organ');
  }
}

export async function updateOrganMatch(id: number, status: OrganMatchStatus): Promise<OrganMatch> {
  try {
    const response = await axios.patch<OrganMatch>(`/organ-matches/${id}`, {status});
    return response.data;
  } catch (error) {
    throw new Error('Failed to add organ');
  }
}

