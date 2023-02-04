ENV_NAME := $(shell git rev-parse --abbrev-ref HEAD)
INVENTORY_FOLDER := $(shell  git rev-parse --show-toplevel )

clean: 
<% for(const group of groups) { %>
	@make -C ./<%= group %> clean
<% } %>

nuke: clean
<% for(const group of groups) { %>
	@make -C ./<%= group %> nuke
<% } %>

build:
<% for(const group of groups) { %>
	@make -C ./<%= group %> build
<% } %>

test:
<% for(const group of groups) { %>
	@make -C ./<%= group %> build
<% } %>

deploy: 
<% for(const group of groups) { %>
	@make -C ./<%= group %> deploy
<% } %>

undeploy: 
<% for(const group of groups) { %>
	@make -C ./<%= group %> undeploy
<% } %>


 