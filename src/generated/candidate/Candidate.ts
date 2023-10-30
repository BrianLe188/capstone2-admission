// Original file: admission/candidate.proto


export interface Candidate {
  'id'?: (string);
  'fullName'?: (string);
  'birthday'?: (string);
  'birthplace'?: (string);
  'cccd'?: (string);
  'highschoolAddress'?: (string);
  'highschoolGraduateYear'?: (number);
  'phonenumber'?: (string);
  'email'?: (string);
  'permanentResidence'?: (string);
  'addressToReceiveAdmissionNotice'?: (string);
  'avatar'?: (string);
  '_id'?: "id";
  '_birthplace'?: "birthplace";
  '_avatar'?: "avatar";
}

export interface Candidate__Output {
  'id'?: (string);
  'fullName': (string);
  'birthday': (string);
  'birthplace'?: (string);
  'cccd': (string);
  'highschoolAddress': (string);
  'highschoolGraduateYear': (number);
  'phonenumber': (string);
  'email': (string);
  'permanentResidence': (string);
  'addressToReceiveAdmissionNotice': (string);
  'avatar'?: (string);
  '_id': "id";
  '_birthplace': "birthplace";
  '_avatar': "avatar";
}
