// Original file: admission/object-admission.proto

import type { ObjectAdmission as _object_admission_ObjectAdmission, ObjectAdmission__Output as _object_admission_ObjectAdmission__Output } from '../object_admission/ObjectAdmission';

export interface UpdateObjectAdmission {
  'id'?: (string);
  'body'?: (_object_admission_ObjectAdmission | null);
}

export interface UpdateObjectAdmission__Output {
  'id': (string);
  'body': (_object_admission_ObjectAdmission__Output | null);
}
