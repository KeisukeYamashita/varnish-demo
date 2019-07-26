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

.PHONY: start-varnish
start-varnish:
	/usr/local/sbin/varnishd -n /usr/local/var/varnish -f varnish/conf.vcl -s malloc,1G -T 127.0.0.1:2000 -a 0.0.0.0:8080 -F
