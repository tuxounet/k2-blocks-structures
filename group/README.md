# <%= partition %>/<%= group %>

<%= description %>

## Components

<% for(const component of components) { %>- [@<%= partition %>/<%= system %>-<%= group %>-<%= component.name %>](./<%= component.name %>/README.md) 
<% if(component.needs) { %>
    Need:
<% for(const need of component.needs) %>    -  [@<%= partition %>/<%= system %>-<%= group %>-<%= need %>](./<%= need %>)
    <% } %>
<% } %>
<% } %>
