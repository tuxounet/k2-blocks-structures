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

test:
	@make -C ./packages test

deploy:  
	@make -C ./packages deploy
undeploy:  
	@make -C ./packages undeploy

apply:
	@K2_ENV=${ENV_NAME} K2_INVENTORY=${INVENTORY_FOLDER} npx @tuxounet-k2/cli apply
	@npx lerna bootstrap

unapply:
	@npx @tuxounet-k2/cli clean

list:
	@npx @tuxounet-k2/cli list