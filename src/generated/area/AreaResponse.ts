// Original file: admission/area.proto

import type { Area as _area_Area, Area__Output as _area_Area__Output } from '../area/Area';

export interface AreaResponse {
  'area'?: (_area_Area | null);
  'error'?: (string);
  'response'?: "area"|"error";
}

export interface AreaResponse__Output {
  'area'?: (_area_Area__Output | null);
  'error'?: (string);
  'response': "area"|"error";
}
