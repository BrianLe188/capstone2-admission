// Original file: admission/area.proto

import type { Areas as _area_Areas, Areas__Output as _area_Areas__Output } from '../area/Areas';

export interface AreasResponse {
  'areas'?: (_area_Areas | null);
  'error'?: (string);
  'response'?: "areas"|"error";
}

export interface AreasResponse__Output {
  'areas'?: (_area_Areas__Output | null);
  'error'?: (string);
  'response': "areas"|"error";
}
