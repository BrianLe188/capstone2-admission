// Original file: admission/application-high-school-script.proto

import type { ApplicationHighSchoolScript as _application_high_school_script_ApplicationHighSchoolScript, ApplicationHighSchoolScript__Output as _application_high_school_script_ApplicationHighSchoolScript__Output } from '../application_high_school_script/ApplicationHighSchoolScript';

export interface ApplicationHighSchoolScriptResponse {
  'application'?: (_application_high_school_script_ApplicationHighSchoolScript | null);
  'error'?: (string);
  'response'?: "application"|"error";
}

export interface ApplicationHighSchoolScriptResponse__Output {
  'application'?: (_application_high_school_script_ApplicationHighSchoolScript__Output | null);
  'error'?: (string);
  'response': "application"|"error";
}
