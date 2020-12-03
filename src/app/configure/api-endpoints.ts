import { InjectionToken } from '@angular/core';

export interface ApiEndpoints {
    UPDATE_PROFILE: () => string;
    GET_CONSULTANT: (name:string) => string;
    UPDATE_DOCTOR_PROFILE:()=> string;
    GET_DOCTOR: (name:string) => string;
    GET_ALL_DOCTORS: () => string;
    CREATE_APPOINTMENT: () => string;
    GET_ALL_APPOINTMENTS: (doctorName:string) => string;
}
export function UPDATE_PROFILE(): string {
  return `http://localhost:8080/backend-odc/consultant/createConsultant`;
}
export function GET_CONSULTANT(name:string): string {
  return `http://localhost:8080/backend-odc/consultant/getConsultant/${name}`;
}
export function UPDATE_DOCTOR_PROFILE(): string {
  return `http://localhost:8080/backend-odc/doctor/createDoctor`;
}
export function GET_DOCTOR(name:string): string {
  return `http://localhost:8080/backend-odc/doctor/getDoctor/${name}`;
}
export function GET_ALL_DOCTORS(): string {
  return `http://localhost:8080/backend-odc/doctor/allDoctors`;
}
export function CREATE_APPOINTMENT(): string {
  return `http://localhost:8080/backend-odc/appointment/createAppointment`;
}
export function GET_ALL_APPOINTMENTS(doctorName:string): string {
  return `http://localhost:8080/backend-odc/appointment/allDoctors/${doctorName}`;
}

export const API_ENDPOINTS_VALUES = <ApiEndpoints>{
  UPDATE_PROFILE,GET_CONSULTANT,UPDATE_DOCTOR_PROFILE,GET_DOCTOR,GET_ALL_DOCTORS,CREATE_APPOINTMENT,GET_ALL_APPOINTMENTS
};
export const API_ENDPOINTS = new InjectionToken<ApiEndpoints>('API endpoints paths');

export const AuthenticationApiEndpointsProvider = { provide: API_ENDPOINTS, useValue: API_ENDPOINTS_VALUES };