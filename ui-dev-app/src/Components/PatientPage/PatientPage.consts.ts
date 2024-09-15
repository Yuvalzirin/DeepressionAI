import { PatientStatus } from '../PatientsPanel/Patients.model'

export const statusSvgMap: Record<PatientStatus, string> = {
  GOOD: '/good-status.svg',
  MEDIUM: '/medium-status.svg',
  BAD: '/bad-status.svg',
}

export type PostRange = 'Last Day' | 'Last Week' | 'Last Month' | 'All';

export enum PostRanges {
  LAST_DAY = 'Last Day',
  LAST_WEEK = 'Last Week',
  LAST_MONTH = 'Last Month',
  ALL = 'All'
}

export type RefetchRange = 'One Hour' | 'One Day' | 'One Week';

export enum RefetchRanges {
  ONE_HOUR = 'One Hour',
  ONE_DAY = 'One Day',
  ONE_WEEK = 'One Week',
}