// Original file: admission/admission.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Gender as _gender_Gender, Gender__Output as _gender_Gender__Output } from '../gender/Gender';
import type { GenderResponse as _gender_GenderResponse, GenderResponse__Output as _gender_GenderResponse__Output } from '../gender/GenderResponse';
import type { GendersResponse as _gender_GendersResponse, GendersResponse__Output as _gender_GendersResponse__Output } from '../gender/GendersResponse';
import type { GreetRequest as _admission_GreetRequest, GreetRequest__Output as _admission_GreetRequest__Output } from '../admission/GreetRequest';
import type { GreetResponse as _admission_GreetResponse, GreetResponse__Output as _admission_GreetResponse__Output } from '../admission/GreetResponse';
import type { Message as _admission_Message, Message__Output as _admission_Message__Output } from '../admission/Message';
import type { RequestEmpty as _admission_RequestEmpty, RequestEmpty__Output as _admission_RequestEmpty__Output } from '../admission/RequestEmpty';
import type { Target as _admission_Target, Target__Output as _admission_Target__Output } from '../admission/Target';
import type { UpdateGender as _gender_UpdateGender, UpdateGender__Output as _gender_UpdateGender__Output } from '../gender/UpdateGender';

export interface AdmissionClient extends grpc.Client {
  CreateGender(argument: _gender_Gender, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_gender_GenderResponse__Output>): grpc.ClientUnaryCall;
  CreateGender(argument: _gender_Gender, metadata: grpc.Metadata, callback: grpc.requestCallback<_gender_GenderResponse__Output>): grpc.ClientUnaryCall;
  CreateGender(argument: _gender_Gender, options: grpc.CallOptions, callback: grpc.requestCallback<_gender_GenderResponse__Output>): grpc.ClientUnaryCall;
  CreateGender(argument: _gender_Gender, callback: grpc.requestCallback<_gender_GenderResponse__Output>): grpc.ClientUnaryCall;
  createGender(argument: _gender_Gender, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_gender_GenderResponse__Output>): grpc.ClientUnaryCall;
  createGender(argument: _gender_Gender, metadata: grpc.Metadata, callback: grpc.requestCallback<_gender_GenderResponse__Output>): grpc.ClientUnaryCall;
  createGender(argument: _gender_Gender, options: grpc.CallOptions, callback: grpc.requestCallback<_gender_GenderResponse__Output>): grpc.ClientUnaryCall;
  createGender(argument: _gender_Gender, callback: grpc.requestCallback<_gender_GenderResponse__Output>): grpc.ClientUnaryCall;
  
  Default(argument: _admission_GreetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_GreetResponse__Output>): grpc.ClientUnaryCall;
  Default(argument: _admission_GreetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_admission_GreetResponse__Output>): grpc.ClientUnaryCall;
  Default(argument: _admission_GreetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_GreetResponse__Output>): grpc.ClientUnaryCall;
  Default(argument: _admission_GreetRequest, callback: grpc.requestCallback<_admission_GreetResponse__Output>): grpc.ClientUnaryCall;
  default(argument: _admission_GreetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_GreetResponse__Output>): grpc.ClientUnaryCall;
  default(argument: _admission_GreetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_admission_GreetResponse__Output>): grpc.ClientUnaryCall;
  default(argument: _admission_GreetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_GreetResponse__Output>): grpc.ClientUnaryCall;
  default(argument: _admission_GreetRequest, callback: grpc.requestCallback<_admission_GreetResponse__Output>): grpc.ClientUnaryCall;
  
  DeleteGender(argument: _admission_Target, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  DeleteGender(argument: _admission_Target, metadata: grpc.Metadata, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  DeleteGender(argument: _admission_Target, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  DeleteGender(argument: _admission_Target, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  deleteGender(argument: _admission_Target, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  deleteGender(argument: _admission_Target, metadata: grpc.Metadata, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  deleteGender(argument: _admission_Target, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  deleteGender(argument: _admission_Target, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  
  GetAllGender(argument: _admission_RequestEmpty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_gender_GendersResponse__Output>): grpc.ClientUnaryCall;
  GetAllGender(argument: _admission_RequestEmpty, metadata: grpc.Metadata, callback: grpc.requestCallback<_gender_GendersResponse__Output>): grpc.ClientUnaryCall;
  GetAllGender(argument: _admission_RequestEmpty, options: grpc.CallOptions, callback: grpc.requestCallback<_gender_GendersResponse__Output>): grpc.ClientUnaryCall;
  GetAllGender(argument: _admission_RequestEmpty, callback: grpc.requestCallback<_gender_GendersResponse__Output>): grpc.ClientUnaryCall;
  getAllGender(argument: _admission_RequestEmpty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_gender_GendersResponse__Output>): grpc.ClientUnaryCall;
  getAllGender(argument: _admission_RequestEmpty, metadata: grpc.Metadata, callback: grpc.requestCallback<_gender_GendersResponse__Output>): grpc.ClientUnaryCall;
  getAllGender(argument: _admission_RequestEmpty, options: grpc.CallOptions, callback: grpc.requestCallback<_gender_GendersResponse__Output>): grpc.ClientUnaryCall;
  getAllGender(argument: _admission_RequestEmpty, callback: grpc.requestCallback<_gender_GendersResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateGender(argument: _gender_UpdateGender, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_gender_GenderResponse__Output>): grpc.ClientUnaryCall;
  UpdateGender(argument: _gender_UpdateGender, metadata: grpc.Metadata, callback: grpc.requestCallback<_gender_GenderResponse__Output>): grpc.ClientUnaryCall;
  UpdateGender(argument: _gender_UpdateGender, options: grpc.CallOptions, callback: grpc.requestCallback<_gender_GenderResponse__Output>): grpc.ClientUnaryCall;
  UpdateGender(argument: _gender_UpdateGender, callback: grpc.requestCallback<_gender_GenderResponse__Output>): grpc.ClientUnaryCall;
  updateGender(argument: _gender_UpdateGender, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_gender_GenderResponse__Output>): grpc.ClientUnaryCall;
  updateGender(argument: _gender_UpdateGender, metadata: grpc.Metadata, callback: grpc.requestCallback<_gender_GenderResponse__Output>): grpc.ClientUnaryCall;
  updateGender(argument: _gender_UpdateGender, options: grpc.CallOptions, callback: grpc.requestCallback<_gender_GenderResponse__Output>): grpc.ClientUnaryCall;
  updateGender(argument: _gender_UpdateGender, callback: grpc.requestCallback<_gender_GenderResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface AdmissionHandlers extends grpc.UntypedServiceImplementation {
  CreateGender: grpc.handleUnaryCall<_gender_Gender__Output, _gender_GenderResponse>;
  
  Default: grpc.handleUnaryCall<_admission_GreetRequest__Output, _admission_GreetResponse>;
  
  DeleteGender: grpc.handleUnaryCall<_admission_Target__Output, _admission_Message>;
  
  GetAllGender: grpc.handleUnaryCall<_admission_RequestEmpty__Output, _gender_GendersResponse>;
  
  UpdateGender: grpc.handleUnaryCall<_gender_UpdateGender__Output, _gender_GenderResponse>;
  
}

export interface AdmissionDefinition extends grpc.ServiceDefinition {
  CreateGender: MethodDefinition<_gender_Gender, _gender_GenderResponse, _gender_Gender__Output, _gender_GenderResponse__Output>
  Default: MethodDefinition<_admission_GreetRequest, _admission_GreetResponse, _admission_GreetRequest__Output, _admission_GreetResponse__Output>
  DeleteGender: MethodDefinition<_admission_Target, _admission_Message, _admission_Target__Output, _admission_Message__Output>
  GetAllGender: MethodDefinition<_admission_RequestEmpty, _gender_GendersResponse, _admission_RequestEmpty__Output, _gender_GendersResponse__Output>
  UpdateGender: MethodDefinition<_gender_UpdateGender, _gender_GenderResponse, _gender_UpdateGender__Output, _gender_GenderResponse__Output>
}
