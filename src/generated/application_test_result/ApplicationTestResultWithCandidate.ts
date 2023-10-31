// Original file: admission/application-test-result.proto

import type { Candidate as _candidate_Candidate, Candidate__Output as _candidate_Candidate__Output } from '../candidate/Candidate';

export interface ApplicationTestResultWithCandidate {
  'id'?: (string);
  'status'?: (string);
  'examRegistrationApplicationCode'?: (string);
  'nameOfTheUniversityOrganizingTheExam'?: (string);
  'resultOfExam'?: (number | string);
  'majorId'?: (string);
  'attachPriorityDocument'?: (string);
  'attachOtherDocument'?: (string);
  'submitedAt'?: (string);
  'uipdatedAt'?: (string);
  'candidate'?: (_candidate_Candidate | null);
  '_id'?: "id";
  '_status'?: "status";
  '_examRegistrationApplicationCode'?: "examRegistrationApplicationCode";
  '_nameOfTheUniversityOrganizingTheExam'?: "nameOfTheUniversityOrganizingTheExam";
  '_resultOfExam'?: "resultOfExam";
  '_majorId'?: "majorId";
  '_attachPriorityDocument'?: "attachPriorityDocument";
  '_attachOtherDocument'?: "attachOtherDocument";
  '_submitedAt'?: "submitedAt";
  '_uipdatedAt'?: "uipdatedAt";
}

export interface ApplicationTestResultWithCandidate__Output {
  'id'?: (string);
  'status'?: (string);
  'examRegistrationApplicationCode'?: (string);
  'nameOfTheUniversityOrganizingTheExam'?: (string);
  'resultOfExam'?: (number);
  'majorId'?: (string);
  'attachPriorityDocument'?: (string);
  'attachOtherDocument'?: (string);
  'submitedAt'?: (string);
  'uipdatedAt'?: (string);
  'candidate': (_candidate_Candidate__Output | null);
  '_id': "id";
  '_status': "status";
  '_examRegistrationApplicationCode': "examRegistrationApplicationCode";
  '_nameOfTheUniversityOrganizingTheExam': "nameOfTheUniversityOrganizingTheExam";
  '_resultOfExam': "resultOfExam";
  '_majorId': "majorId";
  '_attachPriorityDocument': "attachPriorityDocument";
  '_attachOtherDocument': "attachOtherDocument";
  '_submitedAt': "submitedAt";
  '_uipdatedAt': "uipdatedAt";
}
