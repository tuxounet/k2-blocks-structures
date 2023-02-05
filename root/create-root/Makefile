ENV_NAME := $(shell git rev-parse --abbrev-ref HEAD)
INVENTORY_FOLDER := $(shell  git rev-parse --show-toplevel )
nuke:
	@make -C ./packages nuke

install:
	@npm install
	@npx lerna bootstrap
	@npx @tuxounet-k2/cli apply

clean:
	@make -C ./packages clean

build:
	@make -C ./packages build
	@npx lerna bootstrap
	
test:
	@make -C ./packages test

deploy: install build test
	@make -C ./packages deploy
undeploy: install build
	@make -C ./packages undeploy

apply:
	@npx @tuxounet-k2/cli apply
	@npx lerna bootstrap

unapply:
	@npx @tuxounet-k2/cli clean

list:
	@npx @tuxounet-k2/cli list