// Original file: admission/application-registration.proto

import type { ApplicationRegistration as _application_registration_ApplicationRegistration, ApplicationRegistration__Output as _application_registration_ApplicationRegistration__Output } from '../application_registration/ApplicationRegistration';

export interface UpdateApplicationRegistration {
  'id'?: (string);
  'body'?: (_application_registration_ApplicationRegistration | null);
}

export interface UpdateApplicationRegistration__Output {
  'id': (string);
  'body': (_application_registration_ApplicationRegistration__Output | null);
}
