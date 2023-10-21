// Original file: admission/object-admission.proto

import type { ObjectAdmissions as _object_admission_ObjectAdmissions, ObjectAdmissions__Output as _object_admission_ObjectAdmissions__Output } from '../object_admission/ObjectAdmissions';

export interface ObjectAdmissionsResponse {
  'objects'?: (_object_admission_ObjectAdmissions | null);
  'error'?: (string);
  'response'?: "objects"|"error";
}

export interface ObjectAdmissionsResponse__Output {
  'objects'?: (_object_admission_ObjectAdmissions__Output | null);
  'error'?: (string);
  'response': "objects"|"error";
}
