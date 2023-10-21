import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { AdmissionClient as _admission_AdmissionClient, AdmissionDefinition as _admission_AdmissionDefinition } from './admission/Admission';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  admission: {
    Admission: SubtypeConstructor<typeof grpc.Client, _admission_AdmissionClient> & { service: _admission_AdmissionDefinition }
    GreetRequest: MessageTypeDefinition
    GreetResponse: MessageTypeDefinition
    Message: MessageTypeDefinition
    RequestEmpty: MessageTypeDefinition
    Target: MessageTypeDefinition
  }
  area: {
    Area: MessageTypeDefinition
    AreaResponse: MessageTypeDefinition
    Areas: MessageTypeDefinition
    AreasResponse: MessageTypeDefinition
    UpdateArea: MessageTypeDefinition
  }
  gender: {
    Gender: MessageTypeDefinition
    GenderResponse: MessageTypeDefinition
    Genders: MessageTypeDefinition
    GendersResponse: MessageTypeDefinition
    UpdateGender: MessageTypeDefinition
  }
  object_admission: {
    ObjectAdmission: MessageTypeDefinition
    ObjectAdmissionResponse: MessageTypeDefinition
    ObjectAdmissions: MessageTypeDefinition
    ObjectAdmissionsResponse: MessageTypeDefinition
    UpdateObjectAdmission: MessageTypeDefinition
  }
  priority: {
    Priorities: MessageTypeDefinition
    PrioritiesResponse: MessageTypeDefinition
    Priority: MessageTypeDefinition
    PriorityResponse: MessageTypeDefinition
    UpdatePriority: MessageTypeDefinition
  }
}

