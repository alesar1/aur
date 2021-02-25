.PHONY: post clean upgrade versions

LATEST_VER_FULL   := $(shell curl -s https://get.atomicwallet.io/download/ | grep 'atomicwallet-2.*\.rpm"' | sort | tail -1 | sed 's/.*wallet-\(2[0-9.-]*\)\.rpm.*/\1/')
LATEST_VER        := $(firstword $(subst -, ,$(LATEST_VER_FULL)))
LATEST_VER_SUFFIX := $(lastword $(subst -, ,$(LATEST_VER_FULL)))

versions:
	@echo "Current version:"
	@grep '^pkgver' PKGBUILD | sed 's/.*=/  /'
	@echo "Latest version:"
	@echo "  $(LATEST_VER)"

upgrade:
	perl -pi -e 's/^pkgver=.+/pkgver=$(LATEST_VER)/' PKGBUILD
	perl -pi -e 's/^_pkgver_suffix=.+/_pkgver_suffix=$(LATEST_VER_SUFFIX)/' PKGBUILD
	bash -c 'perl -pi -e "s/^sha256sums=.+/$$(makepkg -g)/" PKGBUILD'
	make post
	git add .SRCINFO PKGBUILD
	git commit -m "Upgrade to $(LATEST_VER)" .SRCINFO PKGBUILD
	git show

post:
	makepkg --verifysource -f
	makepkg --printsrcinfo > .SRCINFO

clean:
	git clean -fX
