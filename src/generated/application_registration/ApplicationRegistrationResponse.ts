// Original file: admission/application-registration.proto

import type { ApplicationRegistration as _application_registration_ApplicationRegistration, ApplicationRegistration__Output as _application_registration_ApplicationRegistration__Output } from '../application_registration/ApplicationRegistration';

export interface ApplicationRegistrationResponse {
  'application'?: (_application_registration_ApplicationRegistration | null);
  'error'?: (string);
  'response'?: "application"|"error";
}

export interface ApplicationRegistrationResponse__Output {
  'application'?: (_application_registration_ApplicationRegistration__Output | null);
  'error'?: (string);
  'response': "application"|"error";
}
