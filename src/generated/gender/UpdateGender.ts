// Original file: admission/gender.proto

import type { Gender as _gender_Gender, Gender__Output as _gender_Gender__Output } from '../gender/Gender';

export interface UpdateGender {
  'id'?: (string);
  'body'?: (_gender_Gender | null);
}

export interface UpdateGender__Output {
  'id': (string);
  'body': (_gender_Gender__Output | null);
}
