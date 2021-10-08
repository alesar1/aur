.PHONY: all
all: build git install

.PHONY: clean
clean:
	rm -r src pkg || true

.PHONY: geninteg
geninteg:
	sed -i '/.*sums=(/,$$d' PKGBUILD
	makepkg --geninteg >> PKGBUILD

.PHONY: srcinfo
srcinfo:
	makepkg --printsrcinfo > .SRCINFO

.PHONY: makepkg
makepkg:
	makepkg --syncdeps --force

.PHONY: build
build: geninteg srcinfo makepkg

.PHONY: git
git: git_add git_commit

.PHONY: git_add
git_add:
	git add PKGBUILD .SRCINFO Makefile

.PHONY: git_commit
git_commit: VERSION = "$(shell grep pkgver .SRCINFO | cut -d '=' -f 2 | xargs)"
git_commit: GIT_STATUS = "$(shell git status --porcelain)"
git_commit:
	[ -n ${GIT_STATUS} ] && git commit -m "Update to ${VERSION}"

.PHONY: install
install:
	makepkg --repackage --install --force

.PHONY: open
open: URL = "$(shell grep url .SRCINFO | cut -d '=' -f 2 | xargs)"
open:
	xdg-open $(URL)
