// Original file: admission/candidate.proto

import type { Priority as _priority_Priority, Priority__Output as _priority_Priority__Output } from '../priority/Priority';
import type { Area as _area_Area, Area__Output as _area_Area__Output } from '../area/Area';
import type { Gender as _gender_Gender, Gender__Output as _gender_Gender__Output } from '../gender/Gender';

export interface Candidate {
  'id'?: (string);
  'fullName'?: (string);
  'birthday'?: (string);
  'birthplace'?: (string);
  'cccd'?: (string);
  'highschoolAddress'?: (string);
  'highschoolGraduateYear'?: (number);
  'phonenumber'?: (string);
  'email'?: (string);
  'permanentResidence'?: (string);
  'addressToReceiveAdmissionNotice'?: (string);
  'avatar'?: (string);
  'priority'?: (_priority_Priority | null);
  'area'?: (_area_Area | null);
  'gender'?: (_gender_Gender | null);
  '_id'?: "id";
  '_birthplace'?: "birthplace";
  '_avatar'?: "avatar";
  '_priority'?: "priority";
  '_area'?: "area";
  '_gender'?: "gender";
}

export interface Candidate__Output {
  'id'?: (string);
  'fullName': (string);
  'birthday': (string);
  'birthplace'?: (string);
  'cccd': (string);
  'highschoolAddress': (string);
  'highschoolGraduateYear': (number);
  'phonenumber': (string);
  'email': (string);
  'permanentResidence': (string);
  'addressToReceiveAdmissionNotice': (string);
  'avatar'?: (string);
  'priority'?: (_priority_Priority__Output | null);
  'area'?: (_area_Area__Output | null);
  'gender'?: (_gender_Gender__Output | null);
  '_id': "id";
  '_birthplace': "birthplace";
  '_avatar': "avatar";
  '_priority': "priority";
  '_area': "area";
  '_gender': "gender";
}
