ENV_NAME := $(shell git rev-parse --abbrev-ref HEAD)

clean: 
	@K2_ENV=${ENV_NAME} npx lerna run clean --scope "@<%= partition %>/<%= name %>-*" 

build:
	@K2_ENV=${ENV_NAME} npx lerna run build --scope "@<%= partition %>/<%= name %>-*" 

deploy: 
	@K2_ENV=${ENV_NAME} npx lerna run deploy --scope "@<%= partition %>/<%= name %>-*" 

undeploy: 
	@K2_ENV=${ENV_NAME} npx lerna run destroy --scope "@<%= partition %>/<%= name %>-*" 

nuke: clean
	@K2_ENV=${ENV_NAME} npx lerna run nuke --scope "@<%= partition %>/<%= name %>-*" 
