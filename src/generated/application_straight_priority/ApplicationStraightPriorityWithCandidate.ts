// Original file: admission/application-straight-priority.proto

import type { Candidate as _candidate_Candidate, Candidate__Output as _candidate_Candidate__Output } from '../candidate/Candidate';

export interface ApplicationStraightPriorityWithCandidate {
  'id'?: (string);
  'majorId'?: (string);
  'attachDocument'?: (string);
  'status'?: (string);
  'candidate'?: (_candidate_Candidate | null);
  'code'?: (string);
  '_id'?: "id";
  '_majorId'?: "majorId";
  '_attachDocument'?: "attachDocument";
  '_status'?: "status";
  '_code'?: "code";
}

export interface ApplicationStraightPriorityWithCandidate__Output {
  'id'?: (string);
  'majorId'?: (string);
  'attachDocument'?: (string);
  'status'?: (string);
  'candidate': (_candidate_Candidate__Output | null);
  'code'?: (string);
  '_id': "id";
  '_majorId': "majorId";
  '_attachDocument': "attachDocument";
  '_status': "status";
  '_code': "code";
}
