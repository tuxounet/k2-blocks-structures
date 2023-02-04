import "source-map-support/register";

<% for(const component of components) { %>
import <%= component.name %>Infra from "@<%= partition %>/<%= name %>-<%= component.segment %>-infra";
<% } %>

import { formats, types } from "@k2/builder";
import path from "path";
import fs from "fs";
import * as cdk from "aws-cdk-lib";

const env = process.env.K2_ENV || "";
const allowed_envs = ["poc"];
if (!allowed_envs.includes(env)) {
  throw `l'environnement "${env}" est incorrect`;
}


const global_config_file = path.join(
  __dirname,
  "..",
  "..",
  "..",
  "..",
  "config",
  `${env}.json`
);


const config_file = path.join(
  __dirname,
  "..",
  "..",
  "..",
  "..",
  "config",
  `${env}.json`
);
if (!fs.existsSync(config_file)) {
  throw `fichier de configuration inexistant a l'emplacement "${config_file}"`;
}
const config: types.IStackProps = JSON.parse(
  fs.readFileSync(config_file, { encoding: "utf-8" })
);

const app = new cdk.App();

<% for(const component of components) { %>
new <%= component.name %>Infra(app, formats.formatRessourceId(`<%= name %>`, `<%= component.segment %>`, "infra"), {
  "<%= component.template %>": config["<%= name %>-<%= component.segment %>"] as any,
  ...config,
  group: "<%= name %>", 
  component: "<%= component.segment %>",
});

<% } %>

 
export default app;
