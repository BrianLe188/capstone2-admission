// Original file: admission/module.proto

import type { Module as _module_Module, Module__Output as _module_Module__Output } from '../module/Module';

export interface ModulesResponse {
  'modules'?: (_module_Module)[];
  'error'?: (string);
  '_error'?: "error";
}

export interface ModulesResponse__Output {
  'modules': (_module_Module__Output)[];
  'error'?: (string);
  '_error': "error";
}
