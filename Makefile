.PHONY: init
init: init-node 

.PHONY: init-node
init-node:
	cd backend/node
	yarn install

.PHONY: start
start: start-node

.PHONY: start-node
start-node:
	cd backend/node
	yarn start