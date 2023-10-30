// Original file: admission/application-registration.proto

import type { Candidate as _candidate_Candidate, Candidate__Output as _candidate_Candidate__Output } from '../candidate/Candidate';

export interface ApplicationRegistrationWithCandidate {
  'id'?: (string);
  'school'?: (string);
  'schoolCode'?: (string);
  'submitedAt'?: (string);
  'updatedAt'?: (string);
  'status'?: (string);
  'majorId'?: (string);
  'subjectOne'?: (string);
  'subjectOneScore'?: (number | string);
  'subjectTwo'?: (string);
  'subjectTwoScore'?: (number | string);
  'subjectThree'?: (string);
  'subjectThreeScore'?: (number | string);
  'total'?: (number | string);
  'candidate'?: (_candidate_Candidate | null);
  '_id'?: "id";
  '_school'?: "school";
  '_schoolCode'?: "schoolCode";
  '_submitedAt'?: "submitedAt";
  '_updatedAt'?: "updatedAt";
  '_status'?: "status";
  '_majorId'?: "majorId";
  '_subjectOne'?: "subjectOne";
  '_subjectOneScore'?: "subjectOneScore";
  '_subjectTwo'?: "subjectTwo";
  '_subjectTwoScore'?: "subjectTwoScore";
  '_subjectThree'?: "subjectThree";
  '_subjectThreeScore'?: "subjectThreeScore";
  '_total'?: "total";
}

export interface ApplicationRegistrationWithCandidate__Output {
  'id'?: (string);
  'school'?: (string);
  'schoolCode'?: (string);
  'submitedAt'?: (string);
  'updatedAt'?: (string);
  'status'?: (string);
  'majorId'?: (string);
  'subjectOne'?: (string);
  'subjectOneScore'?: (number);
  'subjectTwo'?: (string);
  'subjectTwoScore'?: (number);
  'subjectThree'?: (string);
  'subjectThreeScore'?: (number);
  'total'?: (number);
  'candidate': (_candidate_Candidate__Output | null);
  '_id': "id";
  '_school': "school";
  '_schoolCode': "schoolCode";
  '_submitedAt': "submitedAt";
  '_updatedAt': "updatedAt";
  '_status': "status";
  '_majorId': "majorId";
  '_subjectOne': "subjectOne";
  '_subjectOneScore': "subjectOneScore";
  '_subjectTwo': "subjectTwo";
  '_subjectTwoScore': "subjectTwoScore";
  '_subjectThree': "subjectThree";
  '_subjectThreeScore': "subjectThreeScore";
  '_total': "total";
}
