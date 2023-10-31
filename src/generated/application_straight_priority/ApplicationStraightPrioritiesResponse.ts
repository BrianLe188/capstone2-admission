// Original file: admission/application-straight-priority.proto

import type { ApplicationStraightPriorities as _application_straight_priority_ApplicationStraightPriorities, ApplicationStraightPriorities__Output as _application_straight_priority_ApplicationStraightPriorities__Output } from '../application_straight_priority/ApplicationStraightPriorities';

export interface ApplicationStraightPrioritiesResponse {
  'applications'?: (_application_straight_priority_ApplicationStraightPriorities | null);
  'error'?: (string);
  'response'?: "applications"|"error";
}

export interface ApplicationStraightPrioritiesResponse__Output {
  'applications'?: (_application_straight_priority_ApplicationStraightPriorities__Output | null);
  'error'?: (string);
  'response': "applications"|"error";
}
