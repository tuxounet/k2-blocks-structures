import "source-map-support/register";
<% for(const component of components) { %>
import <%= component %>Infra from "@<%= partition %>/<%= system %>-<%= group %>-<%= component %>-infra";
<% } %>
import { config, formats } from "@tuxounet-k2/builder";
import * as cdk from "aws-cdk-lib";
 
 
const app = new cdk.App();

<% for(const component of components) { %>
  
const <%= component.name %>Config: config.Config = config.loadConfig({ group : `<%= group %>`, component: `<%= component.name %>` });
const <%= component.name %>Stack = new <%= component.name %>Infra(app, formats.formatRessourceId(`<%= group %>`, `<%= component %>`, "infra"), <%= component.name %>Config);
<% if(component.needs && component.needs.length > 0) { %>
<% for(const need of component.needs) { %>
    <%= component.name %>Stack.node.addDependency(<%= need %>Stack)
<% } %>
<% } %>
<% } %>

export default app;
