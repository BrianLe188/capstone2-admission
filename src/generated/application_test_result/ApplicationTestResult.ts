// Original file: admission/application-test-result.proto


export interface ApplicationTestResult {
  'id'?: (string);
  'status'?: (string);
  'examRegistrationApplicationCode'?: (string);
  'nameOfTheUniversityOrganizingTheExam'?: (string);
  'resultOfExam'?: (number | string);
  'majorId'?: (string);
  'attachPriorityDocument'?: (string);
  'attachOtherDocument'?: (string);
  'submitedAt'?: (string);
  'uipdatedAt'?: (string);
  '_id'?: "id";
  '_status'?: "status";
  '_examRegistrationApplicationCode'?: "examRegistrationApplicationCode";
  '_nameOfTheUniversityOrganizingTheExam'?: "nameOfTheUniversityOrganizingTheExam";
  '_resultOfExam'?: "resultOfExam";
  '_majorId'?: "majorId";
  '_attachPriorityDocument'?: "attachPriorityDocument";
  '_attachOtherDocument'?: "attachOtherDocument";
  '_submitedAt'?: "submitedAt";
  '_uipdatedAt'?: "uipdatedAt";
}

export interface ApplicationTestResult__Output {
  'id'?: (string);
  'status'?: (string);
  'examRegistrationApplicationCode'?: (string);
  'nameOfTheUniversityOrganizingTheExam'?: (string);
  'resultOfExam'?: (number);
  'majorId'?: (string);
  'attachPriorityDocument'?: (string);
  'attachOtherDocument'?: (string);
  'submitedAt'?: (string);
  'uipdatedAt'?: (string);
  '_id': "id";
  '_status': "status";
  '_examRegistrationApplicationCode': "examRegistrationApplicationCode";
  '_nameOfTheUniversityOrganizingTheExam': "nameOfTheUniversityOrganizingTheExam";
  '_resultOfExam': "resultOfExam";
  '_majorId': "majorId";
  '_attachPriorityDocument': "attachPriorityDocument";
  '_attachOtherDocument': "attachOtherDocument";
  '_submitedAt': "submitedAt";
  '_uipdatedAt': "uipdatedAt";
}
