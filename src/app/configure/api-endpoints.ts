import { InjectionToken } from '@angular/core';

export interface ApiEndpoints {
    UPDATE_PROFILE: () => string;
    GET_CONSULTANT: (name:string) => string;
}
export function UPDATE_PROFILE(): string {
  return `http://localhost:8080/backend-odc/consultant/createConsultant`;
}
export function GET_CONSULTANT(name:string): string {
  return `http://localhost:8080/backend-odc/consultant/getConsultant/${name}`;
}

export const API_ENDPOINTS_VALUES = <ApiEndpoints>{
  UPDATE_PROFILE,GET_CONSULTANT
};
export const API_ENDPOINTS = new InjectionToken<ApiEndpoints>('API endpoints paths');

export const AuthenticationApiEndpointsProvider = { provide: API_ENDPOINTS, useValue: API_ENDPOINTS_VALUES };