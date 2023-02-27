ENV_NAME := $(shell git rev-parse --abbrev-ref HEAD)
INVENTORY_FOLDER := $(shell  git rev-parse --show-toplevel )

clean: 
<% for(const component of components) { %>	@make -C ./<%= component.name %>/ clean
<% } %>
 
nuke:
<% for(const component of components) { %>	@make -C ./<%= component.name %>/ nuke
<% } %>
 
build:
<% for(const component of components) { %>	@make -C ./<%= component.name %>/ build
<% } %>
	 
test:
<% for(const component of components) { %>	@make -C ./<%= component.name %>/ test
<% } %>

deploy:
<% for(const component of components) { %>	@make -C ./<%= component.name %>/ deploy
<% } %>

undeploy:
<% for(const component of components) { %>	@make -C ./<%= component.name %>/ undeploy
<% } %>
 