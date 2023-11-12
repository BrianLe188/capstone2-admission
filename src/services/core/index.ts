import { ProtoGrpcType } from "../../generated/core";
import { CORE_PROTO_PATH } from "../../protos";
import { credentials, loadPackageDefinition } from "@grpc/grpc-js";
import { loadSync } from "@grpc/proto-loader";

const corePackageDefinition = loadSync(CORE_PROTO_PATH);
const coreService = loadPackageDefinition(
  corePackageDefinition
) as unknown as ProtoGrpcType;

const coreServiceClient = new coreService.core.Core(
  process.env.CORE_GRPC as string,
  credentials.createInsecure()
);

export default coreServiceClient;
