import { OrganType } from "constants/enums";

export type LoginCredentials = {
  name: string;
  password: string;
}

export type RegisterHospitalData = {
  name: string;
  passowrd: string;
}

export type LoginResponse = {
  accesToken: string;
  hospital: Hospital;
}

export type RegisterResponse = LoginResponse;

export type Hospital = {
  id: number;
  name: string;
}

export type Patient = {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: Date;
  hospitalName: string;
}

export type Organ = {
  id: number;
  type: OrganType;
  donationDate: Date;
  hospitalName: string;
}

