srcinfo:
	makepkg --printsrcinfo > .SRCINFO
	rm -rf steampipe-*.tgz

integrity:
	rm -rf steampipe-*.tgz
	makepkg -g

generate:
	@sed -i -r "s/pkgver=.*/pkgver=$$VER/g" PKGBUILD
	@sed -i -r "s/md5sums=.*/md5sums=(\\'$$MD5\\')/g" PKGBUILD

.ONESHELL:
specificrelease:
	@export VER=0.9.0
	@export MD5=a26a9439b686c658c547db508af5c1187781eb3014964f3f312ab94042480cfa
	@make generate srcinfo

.ONESHELL:
latestrelease:
	@export VER=$(shell curl -sL https://api.github.com/repos/turbot/steampipe/releases/latest | jq -r ".name" | cut -c 2-)
	@export MD5=$(shell curl -sL https://api.github.com/repos/turbot/steampipe/releases/latest | jq -r ".assets[] | select(.name | contains(\"checksums.txt\")) | .browser_download_url" | wget -q -i - -O - | grep linux_amd64 | cut -d' ' -f1)
	@make generate srcinfo