image:
	docker build -t hass-minimal-ui-local -f Dockerfile.dev .

run:
	docker run -v `pwd`/src:/app/src --name local-hass-ui -dp 8080:8080 hass-minimal-ui-local

start:
	docker start local-hass-ui

stop:
	docker stop local-hass-ui