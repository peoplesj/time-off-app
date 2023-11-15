import { DefineDatastore, Schema } from "deno-slack-sdk/mod.ts";

/**
 * Datastores are a Slack-hosted location to store
 * and retrieve data for your app.
 * https://api.slack.com/automation/datastores
 */
const TimeOffDatastore = DefineDatastore({
  name: "time_off",
  primary_key: "id",
  attributes: {
    id: {
      type: Schema.types.string,
    },
    employee: {
      type: Schema.types.string,
    },
    manager: {
      type: Schema.types.string,
    },
    start_date: {
      type: Schema.types.string,
    },
    end_date: {
      type: Schema.types.string,
    },
    reason: {
      type: Schema.types.string,
    },
  },
});

export default TimeOffDatastore;
