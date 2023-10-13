// Original file: admission/priority.proto

import type { Priority as _priority_Priority, Priority__Output as _priority_Priority__Output } from '../priority/Priority';

export interface PriorityResponse {
  'priority'?: (_priority_Priority | null);
  'error'?: (string);
  'response'?: "priority"|"error";
}

export interface PriorityResponse__Output {
  'priority'?: (_priority_Priority__Output | null);
  'error'?: (string);
  'response': "priority"|"error";
}
