// Original file: admission/application-high-school-script.proto

import type { ApplicationHighSchoolScripts as _application_high_school_script_ApplicationHighSchoolScripts, ApplicationHighSchoolScripts__Output as _application_high_school_script_ApplicationHighSchoolScripts__Output } from '../application_high_school_script/ApplicationHighSchoolScripts';

export interface ApplicationHighSchoolScriptsResponse {
  'applications'?: (_application_high_school_script_ApplicationHighSchoolScripts | null);
  'error'?: (string);
  'response'?: "applications"|"error";
}

export interface ApplicationHighSchoolScriptsResponse__Output {
  'applications'?: (_application_high_school_script_ApplicationHighSchoolScripts__Output | null);
  'error'?: (string);
  'response': "applications"|"error";
}
