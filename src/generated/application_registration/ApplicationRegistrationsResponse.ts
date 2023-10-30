// Original file: admission/application-registration.proto

import type { ApplicationRegistrations as _application_registration_ApplicationRegistrations, ApplicationRegistrations__Output as _application_registration_ApplicationRegistrations__Output } from '../application_registration/ApplicationRegistrations';

export interface ApplicationRegistrationsResponse {
  'applications'?: (_application_registration_ApplicationRegistrations | null);
  'error'?: (string);
  'response'?: "applications"|"error";
}

export interface ApplicationRegistrationsResponse__Output {
  'applications'?: (_application_registration_ApplicationRegistrations__Output | null);
  'error'?: (string);
  'response': "applications"|"error";
}
