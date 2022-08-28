import { OrganType } from 'constants/enums';
import axios from './axios';
import type { LoginCredentials, Hospital, LoginResponse, RegisterHospitalData, Organ, Patient } from "./types";
import {withDelay} from './utils';

export async function loginHospital(credentials: LoginCredentials): Promise<LoginResponse> {
  try {
    // const response = await axios.post<LoginResponse>('/auth/login');
    // return response.data;

    return await withDelay({
      accesToken: 'xyz',
      hospital: {
        id: 1,
        name: 'Rydygiera',
      },
    });
  } catch (error) {
    throw new Error('Failed to login');
  }
}

export async function registerHospital(data: RegisterHospitalData): Promise<LoginResponse> {
  try {
    // const response = await axios.post<LoginResponse>('/auth/login');
    // return response.data;

    return  await withDelay({
      accesToken: 'xyz',
      hospital: {
        id: 1,
        name: 'Rydygiera',
      },
    });
  } catch (error) {
    throw new Error('Failed to login');
  }
}



export async function fetchHospitals(): Promise<Hospital[]> {
  try {
    // const response = await axios.get<Hospital[]>('/hospitals');
    // return response.data;

    return  await withDelay([
      { id: 1, name: 'Rydygiera' },
      { id: 2, name: 'Św. Anny' },
      { id: 3, name: 'Prokocim' },
      { id: 4, name: 'Uniwersytecki w Krakowie' },
      { id: 5, name: 'Wojskowej Akademii Technicznej' },
      { id: 6, name: 'Marynarki Wojennej' },
    ]);
  } catch (error) {
    throw new Error('Failed to fetch hospitals');
  }
}

export async function fetchOrgans(): Promise<Organ[]> {
  try {
    // const response = await axios.get<Hospital[]>('/hospitals');
    // return response.data;

    return  await withDelay([
      { id: 1, type: OrganType.Liver, donationDate: new Date(), hospitalName: 'XYZ' },
      { id: 2, type: OrganType.Heart, donationDate: new Date(), hospitalName: 'XYZ' },
      { id: 3, type: OrganType.Lung, donationDate: new Date(), hospitalName: 'XYZ' },
      { id: 4, type: OrganType.Kidney, donationDate: new Date(), hospitalName: 'XYZ' },
      { id: 5, type: OrganType.Kidney, donationDate: new Date(), hospitalName: 'XYZ' },
    ]);
  } catch (error) {
    throw new Error('Failed to fetch hospitals');
  }
}

export async function fetchPatients(): Promise<Patient[]> {
  try {
    // const response = await axios.get<Hospital[]>('/hospitals');
    // return response.data;

    return  await withDelay([
      { id: 1, firstName: 'Barbara', lastName: 'Kruszek', birthDate: new Date(), hospitalName: 'XYZ' },
      { id: 1, firstName: 'Marek', lastName: 'Owce', birthDate: new Date(), hospitalName: 'XYZ' },
      { id: 1, firstName: 'Eliza', lastName: 'Mok', birthDate: new Date(), hospitalName: 'XYZ' },
    ]);
  } catch (error) {
    throw new Error('Failed to fetch hospitals');
  }
}
