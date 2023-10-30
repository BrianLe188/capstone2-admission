// Original file: admission/application-high-school-script.proto

import type { Candidate as _candidate_Candidate, Candidate__Output as _candidate_Candidate__Output } from '../candidate/Candidate';

export interface ApplicationHighSchoolScriptWithCandidate {
  'id'?: (string);
  'status'?: (string);
  'majorId'?: (string);
  'subjectOne'?: (string);
  'subjectOneScore'?: (number | string);
  'subjectTwo'?: (string);
  'subjectTwoScore'?: (number | string);
  'subjectThree'?: (string);
  'subjectThreeScore'?: (number | string);
  'total'?: (number | string);
  'submitedAt'?: (string);
  'updatedAt'?: (string);
  'candidate'?: (_candidate_Candidate | null);
  '_id'?: "id";
  '_status'?: "status";
  '_majorId'?: "majorId";
  '_subjectOne'?: "subjectOne";
  '_subjectOneScore'?: "subjectOneScore";
  '_subjectTwo'?: "subjectTwo";
  '_subjectTwoScore'?: "subjectTwoScore";
  '_subjectThree'?: "subjectThree";
  '_subjectThreeScore'?: "subjectThreeScore";
  '_total'?: "total";
  '_submitedAt'?: "submitedAt";
  '_updatedAt'?: "updatedAt";
}

export interface ApplicationHighSchoolScriptWithCandidate__Output {
  'id'?: (string);
  'status'?: (string);
  'majorId'?: (string);
  'subjectOne'?: (string);
  'subjectOneScore'?: (number);
  'subjectTwo'?: (string);
  'subjectTwoScore'?: (number);
  'subjectThree'?: (string);
  'subjectThreeScore'?: (number);
  'total'?: (number);
  'submitedAt'?: (string);
  'updatedAt'?: (string);
  'candidate': (_candidate_Candidate__Output | null);
  '_id': "id";
  '_status': "status";
  '_majorId': "majorId";
  '_subjectOne': "subjectOne";
  '_subjectOneScore': "subjectOneScore";
  '_subjectTwo': "subjectTwo";
  '_subjectTwoScore': "subjectTwoScore";
  '_subjectThree': "subjectThree";
  '_subjectThreeScore': "subjectThreeScore";
  '_total': "total";
  '_submitedAt': "submitedAt";
  '_updatedAt': "updatedAt";
}
