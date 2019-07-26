.PHONY: init
init: init-node 

.PHONY: init-node
.init-node:
	cd backend/node
	yarn install