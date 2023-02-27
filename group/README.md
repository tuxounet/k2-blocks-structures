# <%= partition %>/<%= group %>

<%= description %>

## Components

<% for(const component of components) { %>- [@<%= partition %>/<%= system %>-<%= group %>-<%= component.name %>](./<%= component.name %>) 

<% } %>
