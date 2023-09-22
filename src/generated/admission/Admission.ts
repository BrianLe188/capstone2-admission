// Original file: src/protos/admission.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GreetRequest as _admission_GreetRequest, GreetRequest__Output as _admission_GreetRequest__Output } from '../admission/GreetRequest';
import type { GreetResponse as _admission_GreetResponse, GreetResponse__Output as _admission_GreetResponse__Output } from '../admission/GreetResponse';
import type { Message as _admission_Message, Message__Output as _admission_Message__Output } from '../admission/Message';
import type { Module as _module_Module, Module__Output as _module_Module__Output } from '../module/Module';
import type { ModuleResponse as _module_ModuleResponse, ModuleResponse__Output as _module_ModuleResponse__Output } from '../module/ModuleResponse';
import type { Target as _admission_Target, Target__Output as _admission_Target__Output } from '../admission/Target';
import type { UpdateModule as _module_UpdateModule, UpdateModule__Output as _module_UpdateModule__Output } from '../module/UpdateModule';

export interface AdmissionClient extends grpc.Client {
  CreateModule(argument: _module_Module, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_module_ModuleResponse__Output>): grpc.ClientUnaryCall;
  CreateModule(argument: _module_Module, metadata: grpc.Metadata, callback: grpc.requestCallback<_module_ModuleResponse__Output>): grpc.ClientUnaryCall;
  CreateModule(argument: _module_Module, options: grpc.CallOptions, callback: grpc.requestCallback<_module_ModuleResponse__Output>): grpc.ClientUnaryCall;
  CreateModule(argument: _module_Module, callback: grpc.requestCallback<_module_ModuleResponse__Output>): grpc.ClientUnaryCall;
  createModule(argument: _module_Module, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_module_ModuleResponse__Output>): grpc.ClientUnaryCall;
  createModule(argument: _module_Module, metadata: grpc.Metadata, callback: grpc.requestCallback<_module_ModuleResponse__Output>): grpc.ClientUnaryCall;
  createModule(argument: _module_Module, options: grpc.CallOptions, callback: grpc.requestCallback<_module_ModuleResponse__Output>): grpc.ClientUnaryCall;
  createModule(argument: _module_Module, callback: grpc.requestCallback<_module_ModuleResponse__Output>): grpc.ClientUnaryCall;
  
  Default(argument: _admission_GreetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_GreetResponse__Output>): grpc.ClientUnaryCall;
  Default(argument: _admission_GreetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_admission_GreetResponse__Output>): grpc.ClientUnaryCall;
  Default(argument: _admission_GreetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_GreetResponse__Output>): grpc.ClientUnaryCall;
  Default(argument: _admission_GreetRequest, callback: grpc.requestCallback<_admission_GreetResponse__Output>): grpc.ClientUnaryCall;
  default(argument: _admission_GreetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_GreetResponse__Output>): grpc.ClientUnaryCall;
  default(argument: _admission_GreetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_admission_GreetResponse__Output>): grpc.ClientUnaryCall;
  default(argument: _admission_GreetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_GreetResponse__Output>): grpc.ClientUnaryCall;
  default(argument: _admission_GreetRequest, callback: grpc.requestCallback<_admission_GreetResponse__Output>): grpc.ClientUnaryCall;
  
  DeleteModule(argument: _admission_Target, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  DeleteModule(argument: _admission_Target, metadata: grpc.Metadata, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  DeleteModule(argument: _admission_Target, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  DeleteModule(argument: _admission_Target, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  deleteModule(argument: _admission_Target, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  deleteModule(argument: _admission_Target, metadata: grpc.Metadata, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  deleteModule(argument: _admission_Target, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  deleteModule(argument: _admission_Target, callback: grpc.requestCallback<_admission_Message__Output>): grpc.ClientUnaryCall;
  
  UpdateModule(argument: _module_UpdateModule, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_module_ModuleResponse__Output>): grpc.ClientUnaryCall;
  UpdateModule(argument: _module_UpdateModule, metadata: grpc.Metadata, callback: grpc.requestCallback<_module_ModuleResponse__Output>): grpc.ClientUnaryCall;
  UpdateModule(argument: _module_UpdateModule, options: grpc.CallOptions, callback: grpc.requestCallback<_module_ModuleResponse__Output>): grpc.ClientUnaryCall;
  UpdateModule(argument: _module_UpdateModule, callback: grpc.requestCallback<_module_ModuleResponse__Output>): grpc.ClientUnaryCall;
  updateModule(argument: _module_UpdateModule, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_module_ModuleResponse__Output>): grpc.ClientUnaryCall;
  updateModule(argument: _module_UpdateModule, metadata: grpc.Metadata, callback: grpc.requestCallback<_module_ModuleResponse__Output>): grpc.ClientUnaryCall;
  updateModule(argument: _module_UpdateModule, options: grpc.CallOptions, callback: grpc.requestCallback<_module_ModuleResponse__Output>): grpc.ClientUnaryCall;
  updateModule(argument: _module_UpdateModule, callback: grpc.requestCallback<_module_ModuleResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface AdmissionHandlers extends grpc.UntypedServiceImplementation {
  CreateModule: grpc.handleUnaryCall<_module_Module__Output, _module_ModuleResponse>;
  
  Default: grpc.handleUnaryCall<_admission_GreetRequest__Output, _admission_GreetResponse>;
  
  DeleteModule: grpc.handleUnaryCall<_admission_Target__Output, _admission_Message>;
  
  UpdateModule: grpc.handleUnaryCall<_module_UpdateModule__Output, _module_ModuleResponse>;
  
}

export interface AdmissionDefinition extends grpc.ServiceDefinition {
  CreateModule: MethodDefinition<_module_Module, _module_ModuleResponse, _module_Module__Output, _module_ModuleResponse__Output>
  Default: MethodDefinition<_admission_GreetRequest, _admission_GreetResponse, _admission_GreetRequest__Output, _admission_GreetResponse__Output>
  DeleteModule: MethodDefinition<_admission_Target, _admission_Message, _admission_Target__Output, _admission_Message__Output>
  UpdateModule: MethodDefinition<_module_UpdateModule, _module_ModuleResponse, _module_UpdateModule__Output, _module_ModuleResponse__Output>
}
