# <%= partition %>/<%= group %>

<%= description %>

## Components

<% for(const component of components) { %> - [@<%= partition %>/<%= group %>-<%= component %>](./<%= component %>/README.md) 
<% } %>
