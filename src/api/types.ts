import { HLA, OrganType } from "constants/enums";

export type LoginCredentials = {
  login: string;
  password: string;
}

export type RegisterHospitalData = {
  login: string;
  password: string;
  name: string;
  city: string;
}

export type LoginResponse = {
  accessToken: string;
  hospital: Hospital;
}

export type RegisterResponse = LoginResponse;

export type Hospital = {
  id: number;
  name: string;
  city: string;
}

export type Organ = {
  id: number;
  type: OrganType;
  donationDate: Date;
  hla: HLA;
}

export type OrganRequest = {
  id: number;
  organ: OrganType;
  date: Date;
  hla: HLA;
}

export type OrganMatch = {
  id: number;
  organ: Organ;
  request: Request;
}

export type OrganData = {
  type: OrganType;
  hla: HLA;
}

export type OrganRequestData = {
  organ: OrganType;
  hla: HLA;
}