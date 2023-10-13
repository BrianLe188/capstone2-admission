// Original file: admission/admission.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Area as _area_Area, Area__Output as _area_Area__Output } from '../area/Area';
import type { AreaResponse as _area_AreaResponse, AreaResponse__Output as _area_AreaResponse__Output } from '../area/AreaResponse';
import type { AreasResponse as _area_AreasResponse, AreasResponse__Output as _area_AreasResponse__Output } from '../area/AreasResponse';
import type { Gender as _gender_Gender, Gender__Output as _gender_Gender__Output } from '../gender/Gender';
import type { GenderResponse as _gender_GenderResponse, GenderResponse__Output as _gender_GenderResponse__Output } from '../gender/GenderResponse';
import type { GendersResponse as _gender_GendersResponse, GendersResponse__Output as _gender_GendersResponse__Output } from '../gender/GendersResponse';
import type { GreetRequest as _admission_GreetRequest, GreetRequest__Output as _admission_GreetRequest__Output } from '../admission/GreetRequest';
import type { GreetResponse as _admission_GreetResponse, GreetResponse__Output as _admission_GreetResponse__Output } from '../admission/GreetResponse';
import type { Message as _admission_Message, Message__Output as _admission_Message__Output } from '../admission/Message';
import type { PrioritiesResponse as _priority_PrioritiesResponse, PrioritiesResponse__Output as _priority_PrioritiesResponse__Output } from '../priority/PrioritiesResponse';
import type { Priority as _priority_Priority, Priority__Output as _priority_Priority__Output } from '../priority/Priority';
import type { PriorityResponse as _priority_PriorityResponse, PriorityResponse__Output as _priority_PriorityResponse__Output } from '../priority/PriorityResponse';
import type { RequestEmpty as _admission_RequestEmpty, RequestEmpty__Output as _admission_RequestEmpty__Output } from '../admission/RequestEmpty';
import type { Target as _admission_Target, Target__Output as _admission_Target__Output } from '../admission/Target';
import type { UpdateGender as _gender_UpdateGender, UpdateGender__Output as _gender_UpdateGender__Output } from '../gender/UpdateGender';
import type { UpdateGender as _area_UpdateGender, UpdateGender__Output as _area_UpdateGender__Output } from '../area/UpdateGender';
import type { UpdatePriority as _priority_UpdatePriority, UpdatePriority__Output as _priority_UpdatePriority__Output } from '../priority/UpdatePriority';

export interface AdmissionClient extends grpc.Client {
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
  
  DeletePriority(argument: _admission_Target, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  DeletePriority(argument: _admission_Target, metadata: grpc.Metadata, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  DeletePriority(argument: _admission_Target, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  DeletePriority(argument: _admission_Target, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  deletePriority(argument: _admission_Target, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  deletePriority(argument: _admission_Target, metadata: grpc.Metadata, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  deletePriority(argument: _admission_Target, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  deletePriority(argument: _admission_Target, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  
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
  
  GetAllPriority(argument: _admission_RequestEmpty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_priority_PrioritiesResponse__Output>): grpc.ClientUnaryCall;
  GetAllPriority(argument: _admission_RequestEmpty, metadata: grpc.Metadata, callback: grpc.requestCallback<_priority_PrioritiesResponse__Output>): grpc.ClientUnaryCall;
  GetAllPriority(argument: _admission_RequestEmpty, options: grpc.CallOptions, callback: grpc.requestCallback<_priority_PrioritiesResponse__Output>): grpc.ClientUnaryCall;
  GetAllPriority(argument: _admission_RequestEmpty, callback: grpc.requestCallback<_priority_PrioritiesResponse__Output>): grpc.ClientUnaryCall;
  getAllPriority(argument: _admission_RequestEmpty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_priority_PrioritiesResponse__Output>): grpc.ClientUnaryCall;
  getAllPriority(argument: _admission_RequestEmpty, metadata: grpc.Metadata, callback: grpc.requestCallback<_priority_PrioritiesResponse__Output>): grpc.ClientUnaryCall;
  getAllPriority(argument: _admission_RequestEmpty, options: grpc.CallOptions, callback: grpc.requestCallback<_priority_PrioritiesResponse__Output>): grpc.ClientUnaryCall;
  getAllPriority(argument: _admission_RequestEmpty, callback: grpc.requestCallback<_priority_PrioritiesResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateArea(argument: _area_UpdateGender, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_area_AreaResponse__Output>): grpc.ClientUnaryCall;
  UpdateArea(argument: _area_UpdateGender, metadata: grpc.Metadata, callback: grpc.requestCallback<_area_AreaResponse__Output>): grpc.ClientUnaryCall;
  UpdateArea(argument: _area_UpdateGender, options: grpc.CallOptions, callback: grpc.requestCallback<_area_AreaResponse__Output>): grpc.ClientUnaryCall;
  UpdateArea(argument: _area_UpdateGender, callback: grpc.requestCallback<_area_AreaResponse__Output>): grpc.ClientUnaryCall;
  updateArea(argument: _area_UpdateGender, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_area_AreaResponse__Output>): grpc.ClientUnaryCall;
  updateArea(argument: _area_UpdateGender, metadata: grpc.Metadata, callback: grpc.requestCallback<_area_AreaResponse__Output>): grpc.ClientUnaryCall;
  updateArea(argument: _area_UpdateGender, options: grpc.CallOptions, callback: grpc.requestCallback<_area_AreaResponse__Output>): grpc.ClientUnaryCall;
  updateArea(argument: _area_UpdateGender, callback: grpc.requestCallback<_area_AreaResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateGender(argument: _gender_UpdateGender, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_gender_GenderResponse__Output>): grpc.ClientUnaryCall;
  UpdateGender(argument: _gender_UpdateGender, metadata: grpc.Metadata, callback: grpc.requestCallback<_gender_GenderResponse__Output>): grpc.ClientUnaryCall;
  UpdateGender(argument: _gender_UpdateGender, options: grpc.CallOptions, callback: grpc.requestCallback<_gender_GenderResponse__Output>): grpc.ClientUnaryCall;
  UpdateGender(argument: _gender_UpdateGender, callback: grpc.requestCallback<_gender_GenderResponse__Output>): grpc.ClientUnaryCall;
  updateGender(argument: _gender_UpdateGender, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_gender_GenderResponse__Output>): grpc.ClientUnaryCall;
  updateGender(argument: _gender_UpdateGender, metadata: grpc.Metadata, callback: grpc.requestCallback<_gender_GenderResponse__Output>): grpc.ClientUnaryCall;
  updateGender(argument: _gender_UpdateGender, options: grpc.CallOptions, callback: grpc.requestCallback<_gender_GenderResponse__Output>): grpc.ClientUnaryCall;
  updateGender(argument: _gender_UpdateGender, callback: grpc.requestCallback<_gender_GenderResponse__Output>): grpc.ClientUnaryCall;
  
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
  CreateArea: grpc.handleUnaryCall<_area_Area__Output, _area_AreaResponse>;
  
  CreateGender: grpc.handleUnaryCall<_gender_Gender__Output, _gender_GenderResponse>;
  
  CreatePriority: grpc.handleUnaryCall<_priority_Priority__Output, _priority_PriorityResponse>;
  
  Default: grpc.handleUnaryCall<_admission_GreetRequest__Output, _admission_GreetResponse>;
  
  DeleteArea: grpc.handleUnaryCall<_admission_Target__Output, _admission_Message>;
  
  DeleteGender: grpc.handleUnaryCall<_admission_Target__Output, _admission_Message>;
  
  DeletePriority: grpc.handleUnaryCall<_admission_Target__Output, _admission_Message>;
  
  GetAllArea: grpc.handleUnaryCall<_admission_RequestEmpty__Output, _area_AreasResponse>;
  
  GetAllGender: grpc.handleUnaryCall<_admission_RequestEmpty__Output, _gender_GendersResponse>;
  
  GetAllPriority: grpc.handleUnaryCall<_admission_RequestEmpty__Output, _priority_PrioritiesResponse>;
  
  UpdateArea: grpc.handleUnaryCall<_area_UpdateGender__Output, _area_AreaResponse>;
  
  UpdateGender: grpc.handleUnaryCall<_gender_UpdateGender__Output, _gender_GenderResponse>;
  
  UpdatePriority: grpc.handleUnaryCall<_priority_UpdatePriority__Output, _priority_PriorityResponse>;
  
}

export interface AdmissionDefinition extends grpc.ServiceDefinition {
  CreateArea: MethodDefinition<_area_Area, _area_AreaResponse, _area_Area__Output, _area_AreaResponse__Output>
  CreateGender: MethodDefinition<_gender_Gender, _gender_GenderResponse, _gender_Gender__Output, _gender_GenderResponse__Output>
  CreatePriority: MethodDefinition<_priority_Priority, _priority_PriorityResponse, _priority_Priority__Output, _priority_PriorityResponse__Output>
  Default: MethodDefinition<_admission_GreetRequest, _admission_GreetResponse, _admission_GreetRequest__Output, _admission_GreetResponse__Output>
  DeleteArea: MethodDefinition<_admission_Target, _admission_Message, _admission_Target__Output, _admission_Message__Output>
  DeleteGender: MethodDefinition<_admission_Target, _admission_Message, _admission_Target__Output, _admission_Message__Output>
  DeletePriority: MethodDefinition<_admission_Target, _admission_Message, _admission_Target__Output, _admission_Message__Output>
  GetAllArea: MethodDefinition<_admission_RequestEmpty, _area_AreasResponse, _admission_RequestEmpty__Output, _area_AreasResponse__Output>
  GetAllGender: MethodDefinition<_admission_RequestEmpty, _gender_GendersResponse, _admission_RequestEmpty__Output, _gender_GendersResponse__Output>
  GetAllPriority: MethodDefinition<_admission_RequestEmpty, _priority_PrioritiesResponse, _admission_RequestEmpty__Output, _priority_PrioritiesResponse__Output>
  UpdateArea: MethodDefinition<_area_UpdateGender, _area_AreaResponse, _area_UpdateGender__Output, _area_AreaResponse__Output>
  UpdateGender: MethodDefinition<_gender_UpdateGender, _gender_GenderResponse, _gender_UpdateGender__Output, _gender_GenderResponse__Output>
  UpdatePriority: MethodDefinition<_priority_UpdatePriority, _priority_PriorityResponse, _priority_UpdatePriority__Output, _priority_PriorityResponse__Output>
}
