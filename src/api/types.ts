import { HLA, OrganMatchStatus, OrganRequestStatus, OrganStatus, OrganType, PatientPriority } from "constants/enums";

export type WithHospital<T> = T & {
  hospital: Hospital;
}

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
  status: OrganStatus;
}

export type OrganRequest = {
  id: number;
  organ: OrganType;
  date: Date;
  hla: HLA;
  status: OrganRequestStatus;
  priority: PatientPriority;
}

export type OrganMatch = {
  id: number;
  organ: WithHospital<Organ>;
  request: WithHospital<OrganRequest>;
  status: OrganMatchStatus;
}

export type OrganData = {
  type: OrganType;
  hla: HLA;
}

export type OrganRequestData = {
  organ: OrganType;
  hla: HLA;
}
