import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';


type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  application_straight_priority: {
    ApplicationStraightPriorities: MessageTypeDefinition
    ApplicationStraightPrioritiesResponse: MessageTypeDefinition
    ApplicationStraightPriority: MessageTypeDefinition
    ApplicationStraightPriorityResponse: MessageTypeDefinition
    ApplicationStraightPriorityWithCandidate: MessageTypeDefinition
    UpdateApplicationStraightPriorityScript: MessageTypeDefinition
  }
  candidate: {
    Candidate: MessageTypeDefinition
    CandidateResponse: MessageTypeDefinition
    Candidates: MessageTypeDefinition
    CandidatesResponse: MessageTypeDefinition
    UpdateCandidate: MessageTypeDefinition
  }
}

