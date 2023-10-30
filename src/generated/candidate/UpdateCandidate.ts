// Original file: admission/candidate.proto

import type { Candidate as _candidate_Candidate, Candidate__Output as _candidate_Candidate__Output } from '../candidate/Candidate';

export interface UpdateCandidate {
  'id'?: (string);
  'body'?: (_candidate_Candidate | null);
}

export interface UpdateCandidate__Output {
  'id': (string);
  'body': (_candidate_Candidate__Output | null);
}
