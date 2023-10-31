// Original file: admission/application-test-result.proto

import type { ApplicationTestResults as _application_test_result_ApplicationTestResults, ApplicationTestResults__Output as _application_test_result_ApplicationTestResults__Output } from '../application_test_result/ApplicationTestResults';

export interface ApplicationTestResultsResponse {
  'applications'?: (_application_test_result_ApplicationTestResults | null);
  'error'?: (string);
  'response'?: "applications"|"error";
}

export interface ApplicationTestResultsResponse__Output {
  'applications'?: (_application_test_result_ApplicationTestResults__Output | null);
  'error'?: (string);
  'response': "applications"|"error";
}
