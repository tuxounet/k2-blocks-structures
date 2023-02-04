ENV_NAME := $(shell git rev-parse --abbrev-ref HEAD)
INVENTORY_FOLDER := $(shell  git rev-parse --show-toplevel )


clean: 
<% for(const component of components) { %>
	@make -C ./<%= group %> clean
<% } %>

nuke: clean
<% for(const component of components) { %>
	@make -C ./<%= group %> nuke
<% } %>

build:
<% for(const component of components) { %>
	@make -C ./<%= group %> build
<% } %>

deploy: 
<% for(const component of components) { %>
	@make -C ./<%= group %> deploy
<% } %>

undeploy: 
<% for(const component of components) { %>
	@make -C ./<%= group %> undeploy
<% } %>


 