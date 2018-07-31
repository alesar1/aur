# Maintainer: Oliver Galvin <odg at riseup dot net>

pkgname=snooscraper-git
pkgver=0.1
pkgrel=5
pkgdesc="A small program to scrape subreddits, reddit accounts and other sites, downloading content matching your criteria"
arch=('all')
url="https://notabug.org/odg/snooscraper"
license=('GPL')
depends=('sh' 'curl' 'jq' 'sed' 'grep' 'findutils')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
install=snooscraper.install
source=("${pkgname%-git}::git+${url}.git")
sha512sums=('SKIP')
validpgpkeys=('491E0D9EE7AA9E15D089950A787966257046CC21') #Oliver Galvin

package() {
	cd "$srcdir/${pkgname%-git}"
	install -m755 snooscraper "${pkgdir}/usr/bin/snooscraper"
	install -dm755 "${pkgdir}/usr/share/snooscraper"
	install -m644 config "${pkgdir}/usr/share/snooscraper"
	install -m644 README.md "${pkgdir}/usr/share/snooscraper"
}

pkgver() {
	cd "$srcdir/${pkgname%-git}"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}
