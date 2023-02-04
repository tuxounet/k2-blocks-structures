import "source-map-support/register";
<% for(const component of components) { %>
import <%= component %>Infra from "@<%= partition %>/<%= group %>-<%= component %>-infra";
<% } %>
import { config, formats } from "@tuxounet-k2/builder";
import * as cdk from "aws-cdk-lib";
 
const currentConfig: config.Config = config.loadConfig()
const app = new cdk.App();

<% for(const component of components) { %>
const <%= component %>Config: config.Config = config.loadConfig({        group : `<%= group %>`, component: `<%= component %>`,     });
new <%= component %>Infra(app, `<%= group %>`, `<%= component %>`, formats.formatRessourceId(`<%= group %>`, `<%= component %>`, "infra"), <%= component %>Config);
<% } %>

export default app;
