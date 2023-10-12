// Original file: admission/gender.proto

import type { Genders as _gender_Genders, Genders__Output as _gender_Genders__Output } from '../gender/Genders';

export interface GendersResponse {
  'genders'?: (_gender_Genders | null);
  'error'?: (string);
  'response'?: "genders"|"error";
}

export interface GendersResponse__Output {
  'genders'?: (_gender_Genders__Output | null);
  'error'?: (string);
  'response': "genders"|"error";
}
