# Maintainer: Tom van der Lee <t0m.vd.l33@gmail.com>
pkgname=liquidprompt
pkgver=2.0.5
pkgrel=1
pkgdesc="A useful adaptive prompt for Bash & Zsh"
arch=("any")
url="https://github.com/nojhan/liquidprompt"
license=("AGPLv3")
conflicts=("liquidprompt-git")
depends=("ncurses"
	     "grep"
	     "gawk"
	     "sed"
	     "procps-ng"
	     "coreutils")
optdepends=("acpi: Battery and temperature status"
	        "lm_sensors: Temperature status"
            "screen: Show detached GNU Screen session status"
            "tmux: Show detached tmux session status"
            "git: Show Git repository status"
            "mercurial: Show Mercurial repository status"
            "subversion: Show Subversion repository status"
            "breezy: Show Bazaar repository status"
            "fossil: Show Fossil repository status")
source=(https://github.com/nojhan/liquidprompt/archive/v$pkgver.tar.gz)
sha256sums=('aec7a1a2d2b5aee5db30895ebe8fddde2f59db0e23fbf55e627acc0551b16465')

package() {
	cd "$pkgname-$pkgver"
	install -Dm755 liquidprompt "$pkgdir/usr/bin/liquidprompt"
	install -Dm644 liquidpromptrc-dist "$pkgdir/etc/liquidpromptrc"
}

# vim: set ts=8 sw=8 tw=0 noet :
