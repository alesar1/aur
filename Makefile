all: help

.SILENT: help current-version
.PRECIOUS: .SRCINFO PKGBUILD
.PHONY: help build update install publish update-baresrc

REPODIR := $(shell egrep -m1 '^source=' PKGBUILD | cut -d= -f2 | sed -r "s/^\('(.*)'\)\$$/\1/ ; s~^git\+https?://github.com/.*/([^/]+)/?\$$~\1~")
PKGNAME = $(shell egrep -m1 '^pkgname=' PKGBUILD | cut -d= -f2)
PKGVER = $(file < current_version)
PKGVER = $(shell egrep -m1 '^pkgver=' PKGBUILD | cut -d= -f2)
TARGET_ARCHIVE = $(PKGNAME)-$(PKGVER)-1-any.pkg.tar.zst
AUR_GIT_REMOTE = $(shell git remote show -n | head -n1)
AUR_GIT_BRANCH = $(shell git branch --show-current)

ifneq ($(findstring /, $(REPODIR)), )
  $(error Unable to determine REPODIR from PKGBUILD; got invalid value: $(REPODIR))
endif

help:
	echo "usage: make [help|update|build|install|publish]"

publish: update
	git add .SRCINFO PKGBUILD
	git commit -m 'Updated .SRCINFO and PKGBUILD changes for updated version'
	git push $(AUR_GIT_REMOTE) $(AUR_GIT_BRANCH)

install: build
	makepkg --noextract --install --needed

update: update-baresrc build

build: current-version .SRCINFO

# update-baresrc: $(REPODIR)
	git --bare --git-dir=$(REPODIR) fetch origin master

.SRCINFO: $(TARGET_ARCHIVE)
	makepkg --printsrcinfo > .SRCINFO

%.pkg.tar.zst: current-version PKGBUILD
	makepkg

current-version: update-baresrc
	cd $(REPODIR) && printf "r%s.%s" "$$(git rev-list --count HEAD)" "$$(git rev-parse --short HEAD)" > ../current-version.tmp
	if [ ! -e 'current-version' ]; then \
		mv current-version.tmp current-version ; \
	elif [ "$$( cat 'current-version' )" != "$$( cat 'current-version.tmp' )" ]; then \
		mv current-version.tmp current-version ; \
	else \
		rm current-version.tmp ; \
	fi

# PKGBUILD: $(REPODIR) $(REPODIR)/HEAD $(REPODIR)/refs/heads/*

# $(REPODIR):
	makepkg -o
