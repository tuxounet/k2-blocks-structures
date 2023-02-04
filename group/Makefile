ENV_NAME := $(shell git rev-parse --abbrev-ref HEAD)

clean: 
	@K2_ENV=${ENV_NAME} npx lerna run clean --scope "@<%= partition %>/<%= group %>-*" 

nuke: clean
	@K2_ENV=${ENV_NAME} npx lerna run nuke --scope "@<%= partition %>/<%= group %>-*" 

build:
	@K2_ENV=${ENV_NAME} npx lerna run build --scope "@<%= partition %>/<%= group %>-*" 

deploy: 
	@K2_ENV=${ENV_NAME} npx lerna run deploy --scope "@<%= partition %>/<%= group %>-*" 

undeploy: 
	@K2_ENV=${ENV_NAME} npx lerna run destroy --scope "@<%= partition %>/<%= group %>-*" 

