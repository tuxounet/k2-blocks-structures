# <%= partition %>/<%= system %>

<%= description %>

## Components

<% for(const group of groups) { %>- [@<%= partition %>/<%= group %>](./<%= group %>/README.md) 
<% } %>
