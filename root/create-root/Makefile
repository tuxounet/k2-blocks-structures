ENV_NAME := $(shell git rev-parse --abbrev-ref HEAD)
INVENTORY_FOLDER := $(shell  git rev-parse --show-toplevel )
nuke: unapply
	@npm run nuke

install:
	@npm install
	@npx lerna bootstrap
	@npx @tuxounet-k2/cli apply
	@npm install
	@npx lerna bootstrap

clean:
	@make -C ./packages clean

build:
	@make -C ./packages build
	@npx lerna bootstrap

build-all: 
	@K2_ENV=${ENV_NAME} K2_INVENTORY=${INVENTORY_FOLDER} npx lerna run build

test:
	@make -C ./packages test

test-all: 
	@K2_ENV=${ENV_NAME} K2_INVENTORY=${INVENTORY_FOLDER} npx lerna run test

deploy: build-all test-all
	@make -C ./packages deploy
	
undeploy: build-all
	@make -C ./packages undeploy

apply:
	@K2_ENV=${ENV_NAME} K2_INVENTORY=${INVENTORY_FOLDER} npx @tuxounet-k2/cli apply
	@npx lerna bootstrap

unapply:
	@npx @tuxounet-k2/cli clean

list:
	@npx @tuxounet-k2/cli list