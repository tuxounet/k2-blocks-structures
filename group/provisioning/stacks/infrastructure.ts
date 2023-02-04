import "source-map-support/register";
<% for(const component of components) { %>
import <%= component %>Infra from "@<%= partition %>/<%= group %>-<%= component %>-infra";
<% } %>
import { config, formats } from "@tuxounet-k2/builder";
import * as cdk from "aws-cdk-lib";
 
const currentConfig: config.Config = config.loadConfig()
const app = new cdk.App();

<% for(const component of components) { %>
new <%= component %>Infra(app, formats.formatRessourceId(`<%= group %>`, `<%= component %>`, "infra"), currentConfig);
<% } %>

export default app;
