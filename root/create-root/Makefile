ENV_NAME := $(shell git rev-parse --abbrev-ref HEAD)
INVENTORY_FOLDER := $(shell  git rev-parse --show-toplevel )
nuke:
	@npx lerna run nuke
	@npx lerna clean -y
	@npm run nuke
	@npm install
	@npx lerna bootstrap

install:
	@npm install
	@npx lerna bootstrap
	@npx @tuxounet-k2/cli apply

clean:
	@npx lerna run clean 

build:
	@K2_ENV=${ENV_NAME} K2_INVENTORY=${INVENTORY_FOLDER} npx lerna exec npm run build
	@npx lerna bootstrap

test:
	@npx lerna run test

deploy: install build test
	@K2_ENV=${ENV_NAME} K2_INVENTORY=${INVENTORY_FOLDER} npx lerna run deploy

undeploy: install build
	@K2_ENV=${ENV_NAME} K2_INVENTORY=${INVENTORY_FOLDER} npx lerna run synth
	@K2_ENV=${ENV_NAME} K2_INVENTORY=${INVENTORY_FOLDER} npx lerna run destroy


apply:
	@npx @tuxounet-k2/cli apply
	@npx lerna bootstrap

unapply:
	@npx @tuxounet-k2/cli clean


list:
	@npx @tuxounet-k2/cli list