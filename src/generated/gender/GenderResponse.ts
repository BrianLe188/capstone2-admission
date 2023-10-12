// Original file: admission/gender.proto

import type { Gender as _gender_Gender, Gender__Output as _gender_Gender__Output } from '../gender/Gender';

export interface GenderResponse {
  'gender'?: (_gender_Gender | null);
  'error'?: (string);
  'response'?: "gender"|"error";
}

export interface GenderResponse__Output {
  'gender'?: (_gender_Gender__Output | null);
  'error'?: (string);
  'response': "gender"|"error";
}
