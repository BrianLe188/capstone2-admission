// Original file: admission/application-straight-priority.proto

import type { ApplicationStraightPriority as _application_straight_priority_ApplicationStraightPriority, ApplicationStraightPriority__Output as _application_straight_priority_ApplicationStraightPriority__Output } from '../application_straight_priority/ApplicationStraightPriority';

export interface ApplicationStraightPriorityResponse {
  'application'?: (_application_straight_priority_ApplicationStraightPriority | null);
  'error'?: (string);
  'response'?: "application"|"error";
}

export interface ApplicationStraightPriorityResponse__Output {
  'application'?: (_application_straight_priority_ApplicationStraightPriority__Output | null);
  'error'?: (string);
  'response': "application"|"error";
}
