// Original file: admission/priority.proto

import type { Priorities as _priority_Priorities, Priorities__Output as _priority_Priorities__Output } from '../priority/Priorities';

export interface PrioritiesResponse {
  'priorities'?: (_priority_Priorities | null);
  'error'?: (string);
  'response'?: "priorities"|"error";
}

export interface PrioritiesResponse__Output {
  'priorities'?: (_priority_Priorities__Output | null);
  'error'?: (string);
  'response': "priorities"|"error";
}
