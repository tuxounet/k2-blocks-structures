# <%= partition %>/<%= group %>

<%= description %>

## Components

<% for(const component of components) { %>- [@<%= partition %>/<%= system %>-<%= group %>-<%= component.name %>](./<%= component.name %>) 
<% if(component.needs) { %>  Needs: 
<% for(const need of component.needs) { %>    -  [@<%= partition %>/<%= system %>-<%= group %>-<%= need %>](./<%= need %>)
<% } %>
<% } %>
<% } %>
