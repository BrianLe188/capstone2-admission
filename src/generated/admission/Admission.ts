// Original file: src/protos/admission.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GreetRequest as _admission_GreetRequest, GreetRequest__Output as _admission_GreetRequest__Output } from '../admission/GreetRequest';
import type { GreetResponse as _admission_GreetResponse, GreetResponse__Output as _admission_GreetResponse__Output } from '../admission/GreetResponse';

export interface AdmissionClient extends grpc.Client {
  Default(argument: _admission_GreetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_GreetResponse__Output>): grpc.ClientUnaryCall;
  Default(argument: _admission_GreetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_admission_GreetResponse__Output>): grpc.ClientUnaryCall;
  Default(argument: _admission_GreetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_GreetResponse__Output>): grpc.ClientUnaryCall;
  Default(argument: _admission_GreetRequest, callback: grpc.requestCallback<_admission_GreetResponse__Output>): grpc.ClientUnaryCall;
  default(argument: _admission_GreetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_GreetResponse__Output>): grpc.ClientUnaryCall;
  default(argument: _admission_GreetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_admission_GreetResponse__Output>): grpc.ClientUnaryCall;
  default(argument: _admission_GreetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_admission_GreetResponse__Output>): grpc.ClientUnaryCall;
  default(argument: _admission_GreetRequest, callback: grpc.requestCallback<_admission_GreetResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface AdmissionHandlers extends grpc.UntypedServiceImplementation {
  Default: grpc.handleUnaryCall<_admission_GreetRequest__Output, _admission_GreetResponse>;
  
}

export interface AdmissionDefinition extends grpc.ServiceDefinition {
  Default: MethodDefinition<_admission_GreetRequest, _admission_GreetResponse, _admission_GreetRequest__Output, _admission_GreetResponse__Output>
}
