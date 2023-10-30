import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';


type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  application_registration: {
    ApplicationRegistration: MessageTypeDefinition
    ApplicationRegistrationResponse: MessageTypeDefinition
    ApplicationRegistrationWithCandidate: MessageTypeDefinition
    ApplicationRegistrations: MessageTypeDefinition
    ApplicationRegistrationsResponse: MessageTypeDefinition
    UpdateApplicationRegistration: MessageTypeDefinition
  }
  candidate: {
    Candidate: MessageTypeDefinition
    CandidateResponse: MessageTypeDefinition
    Candidates: MessageTypeDefinition
    CandidatesResponse: MessageTypeDefinition
    UpdateCandidate: MessageTypeDefinition
  }
}

