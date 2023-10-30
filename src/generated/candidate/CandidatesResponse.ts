// Original file: admission/candidate.proto

import type { Candidates as _candidate_Candidates, Candidates__Output as _candidate_Candidates__Output } from '../candidate/Candidates';

export interface CandidatesResponse {
  'candidates'?: (_candidate_Candidates | null);
  'error'?: (string);
  'response'?: "candidates"|"error";
}

export interface CandidatesResponse__Output {
  'candidates'?: (_candidate_Candidates__Output | null);
  'error'?: (string);
  'response': "candidates"|"error";
}
