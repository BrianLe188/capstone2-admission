// Original file: admission/object-admission.proto

import type { ObjectAdmission as _object_admission_ObjectAdmission, ObjectAdmission__Output as _object_admission_ObjectAdmission__Output } from '../object_admission/ObjectAdmission';

export interface ObjectAdmissionResponse {
  'object'?: (_object_admission_ObjectAdmission | null);
  'error'?: (string);
  'response'?: "object"|"error";
}

export interface ObjectAdmissionResponse__Output {
  'object'?: (_object_admission_ObjectAdmission__Output | null);
  'error'?: (string);
  'response': "object"|"error";
}
