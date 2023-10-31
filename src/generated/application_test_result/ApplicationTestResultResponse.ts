// Original file: admission/application-test-result.proto

import type { ApplicationTestResult as _application_test_result_ApplicationTestResult, ApplicationTestResult__Output as _application_test_result_ApplicationTestResult__Output } from '../application_test_result/ApplicationTestResult';

export interface ApplicationTestResultResponse {
  'application'?: (_application_test_result_ApplicationTestResult | null);
  'error'?: (string);
  'response'?: "application"|"error";
}

export interface ApplicationTestResultResponse__Output {
  'application'?: (_application_test_result_ApplicationTestResult__Output | null);
  'error'?: (string);
  'response': "application"|"error";
}
