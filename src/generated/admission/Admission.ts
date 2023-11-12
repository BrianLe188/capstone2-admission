// Original file: admission/admission.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { ApplicationHighSchoolScriptWithCandidate as _application_high_school_script_ApplicationHighSchoolScriptWithCandidate, ApplicationHighSchoolScriptWithCandidate__Output as _application_high_school_script_ApplicationHighSchoolScriptWithCandidate__Output } from '../application_high_school_script/ApplicationHighSchoolScriptWithCandidate';
import type { ApplicationHighSchoolScriptsResponse as _application_high_school_script_ApplicationHighSchoolScriptsResponse, ApplicationHighSchoolScriptsResponse__Output as _application_high_school_script_ApplicationHighSchoolScriptsResponse__Output } from '../application_high_school_script/ApplicationHighSchoolScriptsResponse';
import type { ApplicationRegistrationWithCandidate as _application_registration_ApplicationRegistrationWithCandidate, ApplicationRegistrationWithCandidate__Output as _application_registration_ApplicationRegistrationWithCandidate__Output } from '../application_registration/ApplicationRegistrationWithCandidate';
import type { ApplicationRegistrationsResponse as _application_registration_ApplicationRegistrationsResponse, ApplicationRegistrationsResponse__Output as _application_registration_ApplicationRegistrationsResponse__Output } from '../application_registration/ApplicationRegistrationsResponse';
import type { ApplicationStraightPrioritiesResponse as _application_straight_priority_ApplicationStraightPrioritiesResponse, ApplicationStraightPrioritiesResponse__Output as _application_straight_priority_ApplicationStraightPrioritiesResponse__Output } from '../application_straight_priority/ApplicationStraightPrioritiesResponse';
import type { ApplicationStraightPriorityWithCandidate as _application_straight_priority_ApplicationStraightPriorityWithCandidate, ApplicationStraightPriorityWithCandidate__Output as _application_straight_priority_ApplicationStraightPriorityWithCandidate__Output } from '../application_straight_priority/ApplicationStraightPriorityWithCandidate';
import type { ApplicationTestResultWithCandidate as _application_test_result_ApplicationTestResultWithCandidate, ApplicationTestResultWithCandidate__Output as _application_test_result_ApplicationTestResultWithCandidate__Output } from '../application_test_result/ApplicationTestResultWithCandidate';
import type { ApplicationTestResultsResponse as _application_test_result_ApplicationTestResultsResponse, ApplicationTestResultsResponse__Output as _application_test_result_ApplicationTestResultsResponse__Output } from '../application_test_result/ApplicationTestResultsResponse';
import type { Area as _area_Area, Area__Output as _area_Area__Output } from '../area/Area';
import type { AreaResponse as _area_AreaResponse, AreaResponse__Output as _area_AreaResponse__Output } from '../area/AreaResponse';
import type { AreasResponse as _area_AreasResponse, AreasResponse__Output as _area_AreasResponse__Output } from '../area/AreasResponse';
import type { Code as _admission_Code, Code__Output as _admission_Code__Output } from '../admission/Code';
import type { Gender as _gender_Gender, Gender__Output as _gender_Gender__Output } from '../gender/Gender';
import type { GenderResponse as _gender_GenderResponse, GenderResponse__Output as _gender_GenderResponse__Output } from '../gender/GenderResponse';
import type { GendersResponse as _gender_GendersResponse, GendersResponse__Output as _gender_GendersResponse__Output } from '../gender/GendersResponse';
import type { GreetRequest as _admission_GreetRequest, GreetRequest__Output as _admission_GreetRequest__Output } from '../admission/GreetRequest';
import type { GreetResponse as _admission_GreetResponse, GreetResponse__Output as _admission_GreetResponse__Output } from '../admission/GreetResponse';
import type { Message as _admission_Message, Message__Output as _admission_Message__Output } from '../admission/Message';
import type { ObjectAdmission as _object_admission_ObjectAdmission, ObjectAdmission__Output as _object_admission_ObjectAdmission__Output } from '../object_admission/ObjectAdmission';
import type { ObjectAdmissionResponse as _object_admission_ObjectAdmissionResponse, ObjectAdmissionResponse__Output as _object_admission_ObjectAdmissionResponse__Output } from '../object_admission/ObjectAdmissionResponse';
import type { ObjectAdmissionsResponse as _object_admission_ObjectAdmissionsResponse, ObjectAdmissionsResponse__Output as _object_admission_ObjectAdmissionsResponse__Output } from '../object_admission/ObjectAdmissionsResponse';
import type { PrioritiesResponse as _priority_PrioritiesResponse, PrioritiesResponse__Output as _priority_PrioritiesResponse__Output } from '../priority/PrioritiesResponse';
import type { Priority as _priority_Priority, Priority__Output as _priority_Priority__Output } from '../priority/Priority';
import type { PriorityResponse as _priority_PriorityResponse, PriorityResponse__Output as _priority_PriorityResponse__Output } from '../priority/PriorityResponse';
import type { RequestEmpty as _admission_RequestEmpty, RequestEmpty__Output as _admission_RequestEmpty__Output } from '../admission/RequestEmpty';
import type { Target as _admission_Target, Target__Output as _admission_Target__Output } from '../admission/Target';
import type { UpdateArea as _area_UpdateArea, UpdateArea__Output as _area_UpdateArea__Output } from '../area/UpdateArea';
import type { UpdateGender as _gender_UpdateGender, UpdateGender__Output as _gender_UpdateGender__Output } from '../gender/UpdateGender';
import type { UpdateObjectAdmission as _object_admission_UpdateObjectAdmission, UpdateObjectAdmission__Output as _object_admission_UpdateObjectAdmission__Output } from '../object_admission/UpdateObjectAdmission';
import type { UpdatePriority as _priority_UpdatePriority, UpdatePriority__Output as _priority_UpdatePriority__Output } from '../priority/UpdatePriority';

export interface AdmissionClient extends grpc.Client {
  AutoAccept(argument: _admission_RequestEmpty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  AutoAccept(argument: _admission_RequestEmpty, metadata: grpc.Metadata, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  AutoAccept(argument: _admission_RequestEmpty, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  AutoAccept(argument: _admission_RequestEmpty, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  autoAccept(argument: _admission_RequestEmpty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  autoAccept(argument: _admission_RequestEmpty, metadata: grpc.Metadata, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  autoAccept(argument: _admission_RequestEmpty, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  autoAccept(argument: _admission_RequestEmpty, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  
  CreateArea(argument: _area_Area, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_area_AreaResponse__Output>): grpc.ClientUnaryCall;
  CreateArea(argument: _area_Area, metadata: grpc.Metadata, callback: grpc.requestCallback<_area_AreaResponse__Output>): grpc.ClientUnaryCall;
  CreateArea(argument: _area_Area, options: grpc.CallOptions, callback: grpc.requestCallback<_area_AreaResponse__Output>): grpc.ClientUnaryCall;
  CreateArea(argument: _area_Area, callback: grpc.requestCallback<_area_AreaResponse__Output>): grpc.ClientUnaryCall;
  createArea(argument: _area_Area, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_area_AreaResponse__Output>): grpc.ClientUnaryCall;
  createArea(argument: _area_Area, metadata: grpc.Metadata, callback: grpc.requestCallback<_area_AreaResponse__Output>): grpc.ClientUnaryCall;
  createArea(argument: _area_Area, options: grpc.CallOptions, callback: grpc.requestCallback<_area_AreaResponse__Output>): grpc.ClientUnaryCall;
  createArea(argument: _area_Area, callback: grpc.requestCallback<_area_AreaResponse__Output>): grpc.ClientUnaryCall;
  
  CreateGender(argument: _gender_Gender, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_gender_GenderResponse__Output>): grpc.ClientUnaryCall;
  CreateGender(argument: _gender_Gender, metadata: grpc.Metadata, callback: grpc.requestCallback<_gender_GenderResponse__Output>): grpc.ClientUnaryCall;
  CreateGender(argument: _gender_Gender, options: grpc.CallOptions, callback: grpc.requestCallback<_gender_GenderResponse__Output>): grpc.ClientUnaryCall;
  CreateGender(argument: _gender_Gender, callback: grpc.requestCallback<_gender_GenderResponse__Output>): grpc.ClientUnaryCall;
  createGender(argument: _gender_Gender, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_gender_GenderResponse__Output>): grpc.ClientUnaryCall;
  createGender(argument: _gender_Gender, metadata: grpc.Metadata, callback: grpc.requestCallback<_gender_GenderResponse__Output>): grpc.ClientUnaryCall;
  createGender(argument: _gender_Gender, options: grpc.CallOptions, callback: grpc.requestCallback<_gender_GenderResponse__Output>): grpc.ClientUnaryCall;
  createGender(argument: _gender_Gender, callback: grpc.requestCallback<_gender_GenderResponse__Output>): grpc.ClientUnaryCall;
  
  CreateObjectAdmission(argument: _object_admission_ObjectAdmission, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_object_admission_ObjectAdmissionResponse__Output>): grpc.ClientUnaryCall;
  CreateObjectAdmission(argument: _object_admission_ObjectAdmission, metadata: grpc.Metadata, callback: grpc.requestCallback<_object_admission_ObjectAdmissionResponse__Output>): grpc.ClientUnaryCall;
  CreateObjectAdmission(argument: _object_admission_ObjectAdmission, options: grpc.CallOptions, callback: grpc.requestCallback<_object_admission_ObjectAdmissionResponse__Output>): grpc.ClientUnaryCall;
  CreateObjectAdmission(argument: _object_admission_ObjectAdmission, callback: grpc.requestCallback<_object_admission_ObjectAdmissionResponse__Output>): grpc.ClientUnaryCall;
  createObjectAdmission(argument: _object_admission_ObjectAdmission, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_object_admission_ObjectAdmissionResponse__Output>): grpc.ClientUnaryCall;
  createObjectAdmission(argument: _object_admission_ObjectAdmission, metadata: grpc.Metadata, callback: grpc.requestCallback<_object_admission_ObjectAdmissionResponse__Output>): grpc.ClientUnaryCall;
  createObjectAdmission(argument: _object_admission_ObjectAdmission, options: grpc.CallOptions, callback: grpc.requestCallback<_object_admission_ObjectAdmissionResponse__Output>): grpc.ClientUnaryCall;
  createObjectAdmission(argument: _object_admission_ObjectAdmission, callback: grpc.requestCallback<_object_admission_ObjectAdmissionResponse__Output>): grpc.ClientUnaryCall;
  
  CreatePriority(argument: _priority_Priority, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_priority_PriorityResponse__Output>): grpc.ClientUnaryCall;
  CreatePriority(argument: _priority_Priority, metadata: grpc.Metadata, callback: grpc.requestCallback<_priority_PriorityResponse__Output>): grpc.ClientUnaryCall;
  CreatePriority(argument: _priority_Priority, options: grpc.CallOptions, callback: grpc.requestCallback<_priority_PriorityResponse__Output>): grpc.ClientUnaryCall;
  CreatePriority(argument: _priority_Priority, callback: grpc.requestCallback<_priority_PriorityResponse__Output>): grpc.ClientUnaryCall;
  createPriority(argument: _priority_Priority, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_priority_PriorityResponse__Output>): grpc.ClientUnaryCall;
  createPriority(argument: _priority_Priority, metadata: grpc.Metadata, callback: grpc.requestCallback<_priority_PriorityResponse__Output>): grpc.ClientUnaryCall;
  createPriority(argument: _priority_Priority, options: grpc.CallOptions, callback: grpc.requestCallback<_priority_PriorityResponse__Output>): grpc.ClientUnaryCall;
  createPriority(argument: _priority_Priority, callback: grpc.requestCallback<_priority_PriorityResponse__Output>): grpc.ClientUnaryCall;
  
  Default(argument: _admission_GreetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_GreetResponse__Output>): grpc.ClientUnaryCall;
  Default(argument: _admission_GreetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_admission_GreetResponse__Output>): grpc.ClientUnaryCall;
  Default(argument: _admission_GreetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_GreetResponse__Output>): grpc.ClientUnaryCall;
  Default(argument: _admission_GreetRequest, callback: grpc.requestCallback<_admission_GreetResponse__Output>): grpc.ClientUnaryCall;
  default(argument: _admission_GreetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_GreetResponse__Output>): grpc.ClientUnaryCall;
  default(argument: _admission_GreetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_admission_GreetResponse__Output>): grpc.ClientUnaryCall;
  default(argument: _admission_GreetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_GreetResponse__Output>): grpc.ClientUnaryCall;
  default(argument: _admission_GreetRequest, callback: grpc.requestCallback<_admission_GreetResponse__Output>): grpc.ClientUnaryCall;
  
  DeleteArea(argument: _admission_Target, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  DeleteArea(argument: _admission_Target, metadata: grpc.Metadata, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  DeleteArea(argument: _admission_Target, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  DeleteArea(argument: _admission_Target, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  deleteArea(argument: _admission_Target, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  deleteArea(argument: _admission_Target, metadata: grpc.Metadata, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  deleteArea(argument: _admission_Target, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  deleteArea(argument: _admission_Target, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  
  DeleteGender(argument: _admission_Target, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  DeleteGender(argument: _admission_Target, metadata: grpc.Metadata, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  DeleteGender(argument: _admission_Target, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  DeleteGender(argument: _admission_Target, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  deleteGender(argument: _admission_Target, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  deleteGender(argument: _admission_Target, metadata: grpc.Metadata, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  deleteGender(argument: _admission_Target, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  deleteGender(argument: _admission_Target, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  
  DeleteObjectAdmission(argument: _admission_Target, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  DeleteObjectAdmission(argument: _admission_Target, metadata: grpc.Metadata, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  DeleteObjectAdmission(argument: _admission_Target, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  DeleteObjectAdmission(argument: _admission_Target, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  deleteObjectAdmission(argument: _admission_Target, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  deleteObjectAdmission(argument: _admission_Target, metadata: grpc.Metadata, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  deleteObjectAdmission(argument: _admission_Target, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  deleteObjectAdmission(argument: _admission_Target, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  
  DeletePriority(argument: _admission_Target, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  DeletePriority(argument: _admission_Target, metadata: grpc.Metadata, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  DeletePriority(argument: _admission_Target, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  DeletePriority(argument: _admission_Target, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  deletePriority(argument: _admission_Target, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  deletePriority(argument: _admission_Target, metadata: grpc.Metadata, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  deletePriority(argument: _admission_Target, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  deletePriority(argument: _admission_Target, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  
  GetAllApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResult(argument: _admission_RequestEmpty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_application_test_result_ApplicationTestResultsResponse__Output>): grpc.ClientUnaryCall;
  GetAllApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResult(argument: _admission_RequestEmpty, metadata: grpc.Metadata, callback: grpc.requestCallback<_application_test_result_ApplicationTestResultsResponse__Output>): grpc.ClientUnaryCall;
  GetAllApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResult(argument: _admission_RequestEmpty, options: grpc.CallOptions, callback: grpc.requestCallback<_application_test_result_ApplicationTestResultsResponse__Output>): grpc.ClientUnaryCall;
  GetAllApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResult(argument: _admission_RequestEmpty, callback: grpc.requestCallback<_application_test_result_ApplicationTestResultsResponse__Output>): grpc.ClientUnaryCall;
  getAllApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResult(argument: _admission_RequestEmpty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_application_test_result_ApplicationTestResultsResponse__Output>): grpc.ClientUnaryCall;
  getAllApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResult(argument: _admission_RequestEmpty, metadata: grpc.Metadata, callback: grpc.requestCallback<_application_test_result_ApplicationTestResultsResponse__Output>): grpc.ClientUnaryCall;
  getAllApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResult(argument: _admission_RequestEmpty, options: grpc.CallOptions, callback: grpc.requestCallback<_application_test_result_ApplicationTestResultsResponse__Output>): grpc.ClientUnaryCall;
  getAllApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResult(argument: _admission_RequestEmpty, callback: grpc.requestCallback<_application_test_result_ApplicationTestResultsResponse__Output>): grpc.ClientUnaryCall;
  
  GetAllApplicationForAdmissionWithAHighSchoolScript(argument: _admission_RequestEmpty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_application_high_school_script_ApplicationHighSchoolScriptsResponse__Output>): grpc.ClientUnaryCall;
  GetAllApplicationForAdmissionWithAHighSchoolScript(argument: _admission_RequestEmpty, metadata: grpc.Metadata, callback: grpc.requestCallback<_application_high_school_script_ApplicationHighSchoolScriptsResponse__Output>): grpc.ClientUnaryCall;
  GetAllApplicationForAdmissionWithAHighSchoolScript(argument: _admission_RequestEmpty, options: grpc.CallOptions, callback: grpc.requestCallback<_application_high_school_script_ApplicationHighSchoolScriptsResponse__Output>): grpc.ClientUnaryCall;
  GetAllApplicationForAdmissionWithAHighSchoolScript(argument: _admission_RequestEmpty, callback: grpc.requestCallback<_application_high_school_script_ApplicationHighSchoolScriptsResponse__Output>): grpc.ClientUnaryCall;
  getAllApplicationForAdmissionWithAHighSchoolScript(argument: _admission_RequestEmpty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_application_high_school_script_ApplicationHighSchoolScriptsResponse__Output>): grpc.ClientUnaryCall;
  getAllApplicationForAdmissionWithAHighSchoolScript(argument: _admission_RequestEmpty, metadata: grpc.Metadata, callback: grpc.requestCallback<_application_high_school_script_ApplicationHighSchoolScriptsResponse__Output>): grpc.ClientUnaryCall;
  getAllApplicationForAdmissionWithAHighSchoolScript(argument: _admission_RequestEmpty, options: grpc.CallOptions, callback: grpc.requestCallback<_application_high_school_script_ApplicationHighSchoolScriptsResponse__Output>): grpc.ClientUnaryCall;
  getAllApplicationForAdmissionWithAHighSchoolScript(argument: _admission_RequestEmpty, callback: grpc.requestCallback<_application_high_school_script_ApplicationHighSchoolScriptsResponse__Output>): grpc.ClientUnaryCall;
  
  GetAllApplicationForStraightAdmissionAndPriorityConsideration(argument: _admission_RequestEmpty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_application_straight_priority_ApplicationStraightPrioritiesResponse__Output>): grpc.ClientUnaryCall;
  GetAllApplicationForStraightAdmissionAndPriorityConsideration(argument: _admission_RequestEmpty, metadata: grpc.Metadata, callback: grpc.requestCallback<_application_straight_priority_ApplicationStraightPrioritiesResponse__Output>): grpc.ClientUnaryCall;
  GetAllApplicationForStraightAdmissionAndPriorityConsideration(argument: _admission_RequestEmpty, options: grpc.CallOptions, callback: grpc.requestCallback<_application_straight_priority_ApplicationStraightPrioritiesResponse__Output>): grpc.ClientUnaryCall;
  GetAllApplicationForStraightAdmissionAndPriorityConsideration(argument: _admission_RequestEmpty, callback: grpc.requestCallback<_application_straight_priority_ApplicationStraightPrioritiesResponse__Output>): grpc.ClientUnaryCall;
  getAllApplicationForStraightAdmissionAndPriorityConsideration(argument: _admission_RequestEmpty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_application_straight_priority_ApplicationStraightPrioritiesResponse__Output>): grpc.ClientUnaryCall;
  getAllApplicationForStraightAdmissionAndPriorityConsideration(argument: _admission_RequestEmpty, metadata: grpc.Metadata, callback: grpc.requestCallback<_application_straight_priority_ApplicationStraightPrioritiesResponse__Output>): grpc.ClientUnaryCall;
  getAllApplicationForStraightAdmissionAndPriorityConsideration(argument: _admission_RequestEmpty, options: grpc.CallOptions, callback: grpc.requestCallback<_application_straight_priority_ApplicationStraightPrioritiesResponse__Output>): grpc.ClientUnaryCall;
  getAllApplicationForStraightAdmissionAndPriorityConsideration(argument: _admission_RequestEmpty, callback: grpc.requestCallback<_application_straight_priority_ApplicationStraightPrioritiesResponse__Output>): grpc.ClientUnaryCall;
  
  GetAllApplicationRegistration(argument: _admission_RequestEmpty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_application_registration_ApplicationRegistrationsResponse__Output>): grpc.ClientUnaryCall;
  GetAllApplicationRegistration(argument: _admission_RequestEmpty, metadata: grpc.Metadata, callback: grpc.requestCallback<_application_registration_ApplicationRegistrationsResponse__Output>): grpc.ClientUnaryCall;
  GetAllApplicationRegistration(argument: _admission_RequestEmpty, options: grpc.CallOptions, callback: grpc.requestCallback<_application_registration_ApplicationRegistrationsResponse__Output>): grpc.ClientUnaryCall;
  GetAllApplicationRegistration(argument: _admission_RequestEmpty, callback: grpc.requestCallback<_application_registration_ApplicationRegistrationsResponse__Output>): grpc.ClientUnaryCall;
  getAllApplicationRegistration(argument: _admission_RequestEmpty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_application_registration_ApplicationRegistrationsResponse__Output>): grpc.ClientUnaryCall;
  getAllApplicationRegistration(argument: _admission_RequestEmpty, metadata: grpc.Metadata, callback: grpc.requestCallback<_application_registration_ApplicationRegistrationsResponse__Output>): grpc.ClientUnaryCall;
  getAllApplicationRegistration(argument: _admission_RequestEmpty, options: grpc.CallOptions, callback: grpc.requestCallback<_application_registration_ApplicationRegistrationsResponse__Output>): grpc.ClientUnaryCall;
  getAllApplicationRegistration(argument: _admission_RequestEmpty, callback: grpc.requestCallback<_application_registration_ApplicationRegistrationsResponse__Output>): grpc.ClientUnaryCall;
  
  GetAllArea(argument: _admission_RequestEmpty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_area_AreasResponse__Output>): grpc.ClientUnaryCall;
  GetAllArea(argument: _admission_RequestEmpty, metadata: grpc.Metadata, callback: grpc.requestCallback<_area_AreasResponse__Output>): grpc.ClientUnaryCall;
  GetAllArea(argument: _admission_RequestEmpty, options: grpc.CallOptions, callback: grpc.requestCallback<_area_AreasResponse__Output>): grpc.ClientUnaryCall;
  GetAllArea(argument: _admission_RequestEmpty, callback: grpc.requestCallback<_area_AreasResponse__Output>): grpc.ClientUnaryCall;
  getAllArea(argument: _admission_RequestEmpty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_area_AreasResponse__Output>): grpc.ClientUnaryCall;
  getAllArea(argument: _admission_RequestEmpty, metadata: grpc.Metadata, callback: grpc.requestCallback<_area_AreasResponse__Output>): grpc.ClientUnaryCall;
  getAllArea(argument: _admission_RequestEmpty, options: grpc.CallOptions, callback: grpc.requestCallback<_area_AreasResponse__Output>): grpc.ClientUnaryCall;
  getAllArea(argument: _admission_RequestEmpty, callback: grpc.requestCallback<_area_AreasResponse__Output>): grpc.ClientUnaryCall;
  
  GetAllGender(argument: _admission_RequestEmpty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_gender_GendersResponse__Output>): grpc.ClientUnaryCall;
  GetAllGender(argument: _admission_RequestEmpty, metadata: grpc.Metadata, callback: grpc.requestCallback<_gender_GendersResponse__Output>): grpc.ClientUnaryCall;
  GetAllGender(argument: _admission_RequestEmpty, options: grpc.CallOptions, callback: grpc.requestCallback<_gender_GendersResponse__Output>): grpc.ClientUnaryCall;
  GetAllGender(argument: _admission_RequestEmpty, callback: grpc.requestCallback<_gender_GendersResponse__Output>): grpc.ClientUnaryCall;
  getAllGender(argument: _admission_RequestEmpty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_gender_GendersResponse__Output>): grpc.ClientUnaryCall;
  getAllGender(argument: _admission_RequestEmpty, metadata: grpc.Metadata, callback: grpc.requestCallback<_gender_GendersResponse__Output>): grpc.ClientUnaryCall;
  getAllGender(argument: _admission_RequestEmpty, options: grpc.CallOptions, callback: grpc.requestCallback<_gender_GendersResponse__Output>): grpc.ClientUnaryCall;
  getAllGender(argument: _admission_RequestEmpty, callback: grpc.requestCallback<_gender_GendersResponse__Output>): grpc.ClientUnaryCall;
  
  GetAllObjectAdmission(argument: _admission_RequestEmpty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_object_admission_ObjectAdmissionsResponse__Output>): grpc.ClientUnaryCall;
  GetAllObjectAdmission(argument: _admission_RequestEmpty, metadata: grpc.Metadata, callback: grpc.requestCallback<_object_admission_ObjectAdmissionsResponse__Output>): grpc.ClientUnaryCall;
  GetAllObjectAdmission(argument: _admission_RequestEmpty, options: grpc.CallOptions, callback: grpc.requestCallback<_object_admission_ObjectAdmissionsResponse__Output>): grpc.ClientUnaryCall;
  GetAllObjectAdmission(argument: _admission_RequestEmpty, callback: grpc.requestCallback<_object_admission_ObjectAdmissionsResponse__Output>): grpc.ClientUnaryCall;
  getAllObjectAdmission(argument: _admission_RequestEmpty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_object_admission_ObjectAdmissionsResponse__Output>): grpc.ClientUnaryCall;
  getAllObjectAdmission(argument: _admission_RequestEmpty, metadata: grpc.Metadata, callback: grpc.requestCallback<_object_admission_ObjectAdmissionsResponse__Output>): grpc.ClientUnaryCall;
  getAllObjectAdmission(argument: _admission_RequestEmpty, options: grpc.CallOptions, callback: grpc.requestCallback<_object_admission_ObjectAdmissionsResponse__Output>): grpc.ClientUnaryCall;
  getAllObjectAdmission(argument: _admission_RequestEmpty, callback: grpc.requestCallback<_object_admission_ObjectAdmissionsResponse__Output>): grpc.ClientUnaryCall;
  
  GetAllPriority(argument: _admission_RequestEmpty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_priority_PrioritiesResponse__Output>): grpc.ClientUnaryCall;
  GetAllPriority(argument: _admission_RequestEmpty, metadata: grpc.Metadata, callback: grpc.requestCallback<_priority_PrioritiesResponse__Output>): grpc.ClientUnaryCall;
  GetAllPriority(argument: _admission_RequestEmpty, options: grpc.CallOptions, callback: grpc.requestCallback<_priority_PrioritiesResponse__Output>): grpc.ClientUnaryCall;
  GetAllPriority(argument: _admission_RequestEmpty, callback: grpc.requestCallback<_priority_PrioritiesResponse__Output>): grpc.ClientUnaryCall;
  getAllPriority(argument: _admission_RequestEmpty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_priority_PrioritiesResponse__Output>): grpc.ClientUnaryCall;
  getAllPriority(argument: _admission_RequestEmpty, metadata: grpc.Metadata, callback: grpc.requestCallback<_priority_PrioritiesResponse__Output>): grpc.ClientUnaryCall;
  getAllPriority(argument: _admission_RequestEmpty, options: grpc.CallOptions, callback: grpc.requestCallback<_priority_PrioritiesResponse__Output>): grpc.ClientUnaryCall;
  getAllPriority(argument: _admission_RequestEmpty, callback: grpc.requestCallback<_priority_PrioritiesResponse__Output>): grpc.ClientUnaryCall;
  
  GetApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResultByCode(argument: _admission_Code, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_application_test_result_ApplicationTestResultWithCandidate__Output>): grpc.ClientUnaryCall;
  GetApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResultByCode(argument: _admission_Code, metadata: grpc.Metadata, callback: grpc.requestCallback<_application_test_result_ApplicationTestResultWithCandidate__Output>): grpc.ClientUnaryCall;
  GetApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResultByCode(argument: _admission_Code, options: grpc.CallOptions, callback: grpc.requestCallback<_application_test_result_ApplicationTestResultWithCandidate__Output>): grpc.ClientUnaryCall;
  GetApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResultByCode(argument: _admission_Code, callback: grpc.requestCallback<_application_test_result_ApplicationTestResultWithCandidate__Output>): grpc.ClientUnaryCall;
  getApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResultByCode(argument: _admission_Code, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_application_test_result_ApplicationTestResultWithCandidate__Output>): grpc.ClientUnaryCall;
  getApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResultByCode(argument: _admission_Code, metadata: grpc.Metadata, callback: grpc.requestCallback<_application_test_result_ApplicationTestResultWithCandidate__Output>): grpc.ClientUnaryCall;
  getApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResultByCode(argument: _admission_Code, options: grpc.CallOptions, callback: grpc.requestCallback<_application_test_result_ApplicationTestResultWithCandidate__Output>): grpc.ClientUnaryCall;
  getApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResultByCode(argument: _admission_Code, callback: grpc.requestCallback<_application_test_result_ApplicationTestResultWithCandidate__Output>): grpc.ClientUnaryCall;
  
  GetApplicationForAdmissionWithAHighSchoolScriptByCode(argument: _admission_Code, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_application_high_school_script_ApplicationHighSchoolScriptWithCandidate__Output>): grpc.ClientUnaryCall;
  GetApplicationForAdmissionWithAHighSchoolScriptByCode(argument: _admission_Code, metadata: grpc.Metadata, callback: grpc.requestCallback<_application_high_school_script_ApplicationHighSchoolScriptWithCandidate__Output>): grpc.ClientUnaryCall;
  GetApplicationForAdmissionWithAHighSchoolScriptByCode(argument: _admission_Code, options: grpc.CallOptions, callback: grpc.requestCallback<_application_high_school_script_ApplicationHighSchoolScriptWithCandidate__Output>): grpc.ClientUnaryCall;
  GetApplicationForAdmissionWithAHighSchoolScriptByCode(argument: _admission_Code, callback: grpc.requestCallback<_application_high_school_script_ApplicationHighSchoolScriptWithCandidate__Output>): grpc.ClientUnaryCall;
  getApplicationForAdmissionWithAHighSchoolScriptByCode(argument: _admission_Code, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_application_high_school_script_ApplicationHighSchoolScriptWithCandidate__Output>): grpc.ClientUnaryCall;
  getApplicationForAdmissionWithAHighSchoolScriptByCode(argument: _admission_Code, metadata: grpc.Metadata, callback: grpc.requestCallback<_application_high_school_script_ApplicationHighSchoolScriptWithCandidate__Output>): grpc.ClientUnaryCall;
  getApplicationForAdmissionWithAHighSchoolScriptByCode(argument: _admission_Code, options: grpc.CallOptions, callback: grpc.requestCallback<_application_high_school_script_ApplicationHighSchoolScriptWithCandidate__Output>): grpc.ClientUnaryCall;
  getApplicationForAdmissionWithAHighSchoolScriptByCode(argument: _admission_Code, callback: grpc.requestCallback<_application_high_school_script_ApplicationHighSchoolScriptWithCandidate__Output>): grpc.ClientUnaryCall;
  
  GetApplicationForStraightAdmissionAndPriorityConsiderationByCode(argument: _admission_Code, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_application_straight_priority_ApplicationStraightPriorityWithCandidate__Output>): grpc.ClientUnaryCall;
  GetApplicationForStraightAdmissionAndPriorityConsiderationByCode(argument: _admission_Code, metadata: grpc.Metadata, callback: grpc.requestCallback<_application_straight_priority_ApplicationStraightPriorityWithCandidate__Output>): grpc.ClientUnaryCall;
  GetApplicationForStraightAdmissionAndPriorityConsiderationByCode(argument: _admission_Code, options: grpc.CallOptions, callback: grpc.requestCallback<_application_straight_priority_ApplicationStraightPriorityWithCandidate__Output>): grpc.ClientUnaryCall;
  GetApplicationForStraightAdmissionAndPriorityConsiderationByCode(argument: _admission_Code, callback: grpc.requestCallback<_application_straight_priority_ApplicationStraightPriorityWithCandidate__Output>): grpc.ClientUnaryCall;
  getApplicationForStraightAdmissionAndPriorityConsiderationByCode(argument: _admission_Code, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_application_straight_priority_ApplicationStraightPriorityWithCandidate__Output>): grpc.ClientUnaryCall;
  getApplicationForStraightAdmissionAndPriorityConsiderationByCode(argument: _admission_Code, metadata: grpc.Metadata, callback: grpc.requestCallback<_application_straight_priority_ApplicationStraightPriorityWithCandidate__Output>): grpc.ClientUnaryCall;
  getApplicationForStraightAdmissionAndPriorityConsiderationByCode(argument: _admission_Code, options: grpc.CallOptions, callback: grpc.requestCallback<_application_straight_priority_ApplicationStraightPriorityWithCandidate__Output>): grpc.ClientUnaryCall;
  getApplicationForStraightAdmissionAndPriorityConsiderationByCode(argument: _admission_Code, callback: grpc.requestCallback<_application_straight_priority_ApplicationStraightPriorityWithCandidate__Output>): grpc.ClientUnaryCall;
  
  GetApplicationRegistrationByCode(argument: _admission_Code, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_application_registration_ApplicationRegistrationWithCandidate__Output>): grpc.ClientUnaryCall;
  GetApplicationRegistrationByCode(argument: _admission_Code, metadata: grpc.Metadata, callback: grpc.requestCallback<_application_registration_ApplicationRegistrationWithCandidate__Output>): grpc.ClientUnaryCall;
  GetApplicationRegistrationByCode(argument: _admission_Code, options: grpc.CallOptions, callback: grpc.requestCallback<_application_registration_ApplicationRegistrationWithCandidate__Output>): grpc.ClientUnaryCall;
  GetApplicationRegistrationByCode(argument: _admission_Code, callback: grpc.requestCallback<_application_registration_ApplicationRegistrationWithCandidate__Output>): grpc.ClientUnaryCall;
  getApplicationRegistrationByCode(argument: _admission_Code, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_application_registration_ApplicationRegistrationWithCandidate__Output>): grpc.ClientUnaryCall;
  getApplicationRegistrationByCode(argument: _admission_Code, metadata: grpc.Metadata, callback: grpc.requestCallback<_application_registration_ApplicationRegistrationWithCandidate__Output>): grpc.ClientUnaryCall;
  getApplicationRegistrationByCode(argument: _admission_Code, options: grpc.CallOptions, callback: grpc.requestCallback<_application_registration_ApplicationRegistrationWithCandidate__Output>): grpc.ClientUnaryCall;
  getApplicationRegistrationByCode(argument: _admission_Code, callback: grpc.requestCallback<_application_registration_ApplicationRegistrationWithCandidate__Output>): grpc.ClientUnaryCall;
  
  UpdateArea(argument: _area_UpdateArea, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_area_AreaResponse__Output>): grpc.ClientUnaryCall;
  UpdateArea(argument: _area_UpdateArea, metadata: grpc.Metadata, callback: grpc.requestCallback<_area_AreaResponse__Output>): grpc.ClientUnaryCall;
  UpdateArea(argument: _area_UpdateArea, options: grpc.CallOptions, callback: grpc.requestCallback<_area_AreaResponse__Output>): grpc.ClientUnaryCall;
  UpdateArea(argument: _area_UpdateArea, callback: grpc.requestCallback<_area_AreaResponse__Output>): grpc.ClientUnaryCall;
  updateArea(argument: _area_UpdateArea, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_area_AreaResponse__Output>): grpc.ClientUnaryCall;
  updateArea(argument: _area_UpdateArea, metadata: grpc.Metadata, callback: grpc.requestCallback<_area_AreaResponse__Output>): grpc.ClientUnaryCall;
  updateArea(argument: _area_UpdateArea, options: grpc.CallOptions, callback: grpc.requestCallback<_area_AreaResponse__Output>): grpc.ClientUnaryCall;
  updateArea(argument: _area_UpdateArea, callback: grpc.requestCallback<_area_AreaResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateGender(argument: _gender_UpdateGender, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_gender_GenderResponse__Output>): grpc.ClientUnaryCall;
  UpdateGender(argument: _gender_UpdateGender, metadata: grpc.Metadata, callback: grpc.requestCallback<_gender_GenderResponse__Output>): grpc.ClientUnaryCall;
  UpdateGender(argument: _gender_UpdateGender, options: grpc.CallOptions, callback: grpc.requestCallback<_gender_GenderResponse__Output>): grpc.ClientUnaryCall;
  UpdateGender(argument: _gender_UpdateGender, callback: grpc.requestCallback<_gender_GenderResponse__Output>): grpc.ClientUnaryCall;
  updateGender(argument: _gender_UpdateGender, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_gender_GenderResponse__Output>): grpc.ClientUnaryCall;
  updateGender(argument: _gender_UpdateGender, metadata: grpc.Metadata, callback: grpc.requestCallback<_gender_GenderResponse__Output>): grpc.ClientUnaryCall;
  updateGender(argument: _gender_UpdateGender, options: grpc.CallOptions, callback: grpc.requestCallback<_gender_GenderResponse__Output>): grpc.ClientUnaryCall;
  updateGender(argument: _gender_UpdateGender, callback: grpc.requestCallback<_gender_GenderResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateObjectAdmission(argument: _object_admission_UpdateObjectAdmission, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_object_admission_ObjectAdmissionResponse__Output>): grpc.ClientUnaryCall;
  UpdateObjectAdmission(argument: _object_admission_UpdateObjectAdmission, metadata: grpc.Metadata, callback: grpc.requestCallback<_object_admission_ObjectAdmissionResponse__Output>): grpc.ClientUnaryCall;
  UpdateObjectAdmission(argument: _object_admission_UpdateObjectAdmission, options: grpc.CallOptions, callback: grpc.requestCallback<_object_admission_ObjectAdmissionResponse__Output>): grpc.ClientUnaryCall;
  UpdateObjectAdmission(argument: _object_admission_UpdateObjectAdmission, callback: grpc.requestCallback<_object_admission_ObjectAdmissionResponse__Output>): grpc.ClientUnaryCall;
  updateObjectAdmission(argument: _object_admission_UpdateObjectAdmission, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_object_admission_ObjectAdmissionResponse__Output>): grpc.ClientUnaryCall;
  updateObjectAdmission(argument: _object_admission_UpdateObjectAdmission, metadata: grpc.Metadata, callback: grpc.requestCallback<_object_admission_ObjectAdmissionResponse__Output>): grpc.ClientUnaryCall;
  updateObjectAdmission(argument: _object_admission_UpdateObjectAdmission, options: grpc.CallOptions, callback: grpc.requestCallback<_object_admission_ObjectAdmissionResponse__Output>): grpc.ClientUnaryCall;
  updateObjectAdmission(argument: _object_admission_UpdateObjectAdmission, callback: grpc.requestCallback<_object_admission_ObjectAdmissionResponse__Output>): grpc.ClientUnaryCall;
  
  UpdatePriority(argument: _priority_UpdatePriority, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_priority_PriorityResponse__Output>): grpc.ClientUnaryCall;
  UpdatePriority(argument: _priority_UpdatePriority, metadata: grpc.Metadata, callback: grpc.requestCallback<_priority_PriorityResponse__Output>): grpc.ClientUnaryCall;
  UpdatePriority(argument: _priority_UpdatePriority, options: grpc.CallOptions, callback: grpc.requestCallback<_priority_PriorityResponse__Output>): grpc.ClientUnaryCall;
  UpdatePriority(argument: _priority_UpdatePriority, callback: grpc.requestCallback<_priority_PriorityResponse__Output>): grpc.ClientUnaryCall;
  updatePriority(argument: _priority_UpdatePriority, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_priority_PriorityResponse__Output>): grpc.ClientUnaryCall;
  updatePriority(argument: _priority_UpdatePriority, metadata: grpc.Metadata, callback: grpc.requestCallback<_priority_PriorityResponse__Output>): grpc.ClientUnaryCall;
  updatePriority(argument: _priority_UpdatePriority, options: grpc.CallOptions, callback: grpc.requestCallback<_priority_PriorityResponse__Output>): grpc.ClientUnaryCall;
  updatePriority(argument: _priority_UpdatePriority, callback: grpc.requestCallback<_priority_PriorityResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface AdmissionHandlers extends grpc.UntypedServiceImplementation {
  AutoAccept: grpc.handleUnaryCall<_admission_RequestEmpty__Output, _admission_Message>;
  
  CreateArea: grpc.handleUnaryCall<_area_Area__Output, _area_AreaResponse>;
  
  CreateGender: grpc.handleUnaryCall<_gender_Gender__Output, _gender_GenderResponse>;
  
  CreateObjectAdmission: grpc.handleUnaryCall<_object_admission_ObjectAdmission__Output, _object_admission_ObjectAdmissionResponse>;
  
  CreatePriority: grpc.handleUnaryCall<_priority_Priority__Output, _priority_PriorityResponse>;
  
  Default: grpc.handleUnaryCall<_admission_GreetRequest__Output, _admission_GreetResponse>;
  
  DeleteArea: grpc.handleUnaryCall<_admission_Target__Output, _admission_Message>;
  
  DeleteGender: grpc.handleUnaryCall<_admission_Target__Output, _admission_Message>;
  
  DeleteObjectAdmission: grpc.handleUnaryCall<_admission_Target__Output, _admission_Message>;
  
  DeletePriority: grpc.handleUnaryCall<_admission_Target__Output, _admission_Message>;
  
  GetAllApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResult: grpc.handleUnaryCall<_admission_RequestEmpty__Output, _application_test_result_ApplicationTestResultsResponse>;
  
  GetAllApplicationForAdmissionWithAHighSchoolScript: grpc.handleUnaryCall<_admission_RequestEmpty__Output, _application_high_school_script_ApplicationHighSchoolScriptsResponse>;
  
  GetAllApplicationForStraightAdmissionAndPriorityConsideration: grpc.handleUnaryCall<_admission_RequestEmpty__Output, _application_straight_priority_ApplicationStraightPrioritiesResponse>;
  
  GetAllApplicationRegistration: grpc.handleUnaryCall<_admission_RequestEmpty__Output, _application_registration_ApplicationRegistrationsResponse>;
  
  GetAllArea: grpc.handleUnaryCall<_admission_RequestEmpty__Output, _area_AreasResponse>;
  
  GetAllGender: grpc.handleUnaryCall<_admission_RequestEmpty__Output, _gender_GendersResponse>;
  
  GetAllObjectAdmission: grpc.handleUnaryCall<_admission_RequestEmpty__Output, _object_admission_ObjectAdmissionsResponse>;
  
  GetAllPriority: grpc.handleUnaryCall<_admission_RequestEmpty__Output, _priority_PrioritiesResponse>;
  
  GetApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResultByCode: grpc.handleUnaryCall<_admission_Code__Output, _application_test_result_ApplicationTestResultWithCandidate>;
  
  GetApplicationForAdmissionWithAHighSchoolScriptByCode: grpc.handleUnaryCall<_admission_Code__Output, _application_high_school_script_ApplicationHighSchoolScriptWithCandidate>;
  
  GetApplicationForStraightAdmissionAndPriorityConsiderationByCode: grpc.handleUnaryCall<_admission_Code__Output, _application_straight_priority_ApplicationStraightPriorityWithCandidate>;
  
  GetApplicationRegistrationByCode: grpc.handleUnaryCall<_admission_Code__Output, _application_registration_ApplicationRegistrationWithCandidate>;
  
  UpdateArea: grpc.handleUnaryCall<_area_UpdateArea__Output, _area_AreaResponse>;
  
  UpdateGender: grpc.handleUnaryCall<_gender_UpdateGender__Output, _gender_GenderResponse>;
  
  UpdateObjectAdmission: grpc.handleUnaryCall<_object_admission_UpdateObjectAdmission__Output, _object_admission_ObjectAdmissionResponse>;
  
  UpdatePriority: grpc.handleUnaryCall<_priority_UpdatePriority__Output, _priority_PriorityResponse>;
  
}

export interface AdmissionDefinition extends grpc.ServiceDefinition {
  AutoAccept: MethodDefinition<_admission_RequestEmpty, _admission_Message, _admission_RequestEmpty__Output, _admission_Message__Output>
  CreateArea: MethodDefinition<_area_Area, _area_AreaResponse, _area_Area__Output, _area_AreaResponse__Output>
  CreateGender: MethodDefinition<_gender_Gender, _gender_GenderResponse, _gender_Gender__Output, _gender_GenderResponse__Output>
  CreateObjectAdmission: MethodDefinition<_object_admission_ObjectAdmission, _object_admission_ObjectAdmissionResponse, _object_admission_ObjectAdmission__Output, _object_admission_ObjectAdmissionResponse__Output>
  CreatePriority: MethodDefinition<_priority_Priority, _priority_PriorityResponse, _priority_Priority__Output, _priority_PriorityResponse__Output>
  Default: MethodDefinition<_admission_GreetRequest, _admission_GreetResponse, _admission_GreetRequest__Output, _admission_GreetResponse__Output>
  DeleteArea: MethodDefinition<_admission_Target, _admission_Message, _admission_Target__Output, _admission_Message__Output>
  DeleteGender: MethodDefinition<_admission_Target, _admission_Message, _admission_Target__Output, _admission_Message__Output>
  DeleteObjectAdmission: MethodDefinition<_admission_Target, _admission_Message, _admission_Target__Output, _admission_Message__Output>
  DeletePriority: MethodDefinition<_admission_Target, _admission_Message, _admission_Target__Output, _admission_Message__Output>
  GetAllApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResult: MethodDefinition<_admission_RequestEmpty, _application_test_result_ApplicationTestResultsResponse, _admission_RequestEmpty__Output, _application_test_result_ApplicationTestResultsResponse__Output>
  GetAllApplicationForAdmissionWithAHighSchoolScript: MethodDefinition<_admission_RequestEmpty, _application_high_school_script_ApplicationHighSchoolScriptsResponse, _admission_RequestEmpty__Output, _application_high_school_script_ApplicationHighSchoolScriptsResponse__Output>
  GetAllApplicationForStraightAdmissionAndPriorityConsideration: MethodDefinition<_admission_RequestEmpty, _application_straight_priority_ApplicationStraightPrioritiesResponse, _admission_RequestEmpty__Output, _application_straight_priority_ApplicationStraightPrioritiesResponse__Output>
  GetAllApplicationRegistration: MethodDefinition<_admission_RequestEmpty, _application_registration_ApplicationRegistrationsResponse, _admission_RequestEmpty__Output, _application_registration_ApplicationRegistrationsResponse__Output>
  GetAllArea: MethodDefinition<_admission_RequestEmpty, _area_AreasResponse, _admission_RequestEmpty__Output, _area_AreasResponse__Output>
  GetAllGender: MethodDefinition<_admission_RequestEmpty, _gender_GendersResponse, _admission_RequestEmpty__Output, _gender_GendersResponse__Output>
  GetAllObjectAdmission: MethodDefinition<_admission_RequestEmpty, _object_admission_ObjectAdmissionsResponse, _admission_RequestEmpty__Output, _object_admission_ObjectAdmissionsResponse__Output>
  GetAllPriority: MethodDefinition<_admission_RequestEmpty, _priority_PrioritiesResponse, _admission_RequestEmpty__Output, _priority_PrioritiesResponse__Output>
  GetApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResultByCode: MethodDefinition<_admission_Code, _application_test_result_ApplicationTestResultWithCandidate, _admission_Code__Output, _application_test_result_ApplicationTestResultWithCandidate__Output>
  GetApplicationForAdmissionWithAHighSchoolScriptByCode: MethodDefinition<_admission_Code, _application_high_school_script_ApplicationHighSchoolScriptWithCandidate, _admission_Code__Output, _application_high_school_script_ApplicationHighSchoolScriptWithCandidate__Output>
  GetApplicationForStraightAdmissionAndPriorityConsiderationByCode: MethodDefinition<_admission_Code, _application_straight_priority_ApplicationStraightPriorityWithCandidate, _admission_Code__Output, _application_straight_priority_ApplicationStraightPriorityWithCandidate__Output>
  GetApplicationRegistrationByCode: MethodDefinition<_admission_Code, _application_registration_ApplicationRegistrationWithCandidate, _admission_Code__Output, _application_registration_ApplicationRegistrationWithCandidate__Output>
  UpdateArea: MethodDefinition<_area_UpdateArea, _area_AreaResponse, _area_UpdateArea__Output, _area_AreaResponse__Output>
  UpdateGender: MethodDefinition<_gender_UpdateGender, _gender_GenderResponse, _gender_UpdateGender__Output, _gender_GenderResponse__Output>
  UpdateObjectAdmission: MethodDefinition<_object_admission_UpdateObjectAdmission, _object_admission_ObjectAdmissionResponse, _object_admission_UpdateObjectAdmission__Output, _object_admission_ObjectAdmissionResponse__Output>
  UpdatePriority: MethodDefinition<_priority_UpdatePriority, _priority_PriorityResponse, _priority_UpdatePriority__Output, _priority_PriorityResponse__Output>
}
