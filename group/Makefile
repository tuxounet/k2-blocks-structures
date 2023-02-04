ENV_NAME := $(shell git rev-parse --abbrev-ref HEAD)
INVENTORY_FOLDER := $(shell  git rev-parse --show-toplevel )
clean: 
	@K2_ENV=${ENV_NAME} K2_INVENTORY=${INVENTORY_FOLDER} npx lerna run clean --scope "@<%= partition %>/<%= group %>-*" 

nuke: clean
	@K2_ENV=${ENV_NAME} K2_INVENTORY=${INVENTORY_FOLDER} npx lerna run nuke --scope "@<%= partition %>/<%= group %>-*" 

build:
	@K2_ENV=${ENV_NAME} K2_INVENTORY=${INVENTORY_FOLDER} npx lerna run build --scope "@<%= partition %>/<%= group %>-*" 

deploy: 
	@K2_ENV=${ENV_NAME} K2_INVENTORY=${INVENTORY_FOLDER} npx lerna run deploy --scope "@<%= partition %>/<%= group %>-*" 

undeploy: 
	@K2_ENV=${ENV_NAME} K2_INVENTORY=${INVENTORY_FOLDER} npx lerna run destroy --scope "@<%= partition %>/<%= group %>-*" 

