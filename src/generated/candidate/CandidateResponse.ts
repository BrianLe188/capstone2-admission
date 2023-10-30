// Original file: admission/candidate.proto

import type { Candidate as _candidate_Candidate, Candidate__Output as _candidate_Candidate__Output } from '../candidate/Candidate';

export interface CandidateResponse {
  'candidate'?: (_candidate_Candidate | null);
  'error'?: (string);
  'response'?: "candidate"|"error";
}

export interface CandidateResponse__Output {
  'candidate'?: (_candidate_Candidate__Output | null);
  'error'?: (string);
  'response': "candidate"|"error";
}
