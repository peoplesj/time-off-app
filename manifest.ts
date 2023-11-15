import { Manifest } from "deno-slack-sdk/mod.ts";
import { CreateTimeOffRequestWorkflow } from "./workflows/CreateTimeOffRequestWorkflow.ts";
import { SendTimeOffRequestToManagerFunction } from "./functions/send_time_off_request_to_manager/definition.ts";
import TimeOffDatastore from "./datastores/datastore.ts";

export default Manifest({
  name: "time off app",
  description: "Ask your manager for some time off",
  icon: "assets/default_new_app_icon.png",
  workflows: [CreateTimeOffRequestWorkflow],
  functions: [SendTimeOffRequestToManagerFunction],
  datastores: [TimeOffDatastore],
  outgoingDomains: [],
  botScopes: [
    "commands",
    "chat:write",
    "chat:write.public",
    "datastore:read",
    "datastore:write",
  ],
});
