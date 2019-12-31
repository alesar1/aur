# Maintainer: Einhard Leichtfuß <alguien@respiranto.de>
# Contributor: Daniel Landau <daniel.landau@iki.fi>
# Contributor: Xyne
# Contributor: David Manouchehri <d@32t.ca>
# Contributor: Alexander Fehr <pizzapunk gmail com>
# Contributor: Thomas Jost <schnouki schnouki net>
# Contributor: Hinrich Harms <arch hinrich de>

pkgname=thunderbird-extension-enigmail-git
pkgver=2.1.r184.gd23359aa
pkgrel=1
pkgdesc="OpenPGP message encryption and authentication for Thunderbird (development version)"
arch=('any')
url="https://www.enigmail.net/"
license=('MPL' 'GPL3')
depends=('gnupg' 'thunderbird')
makedepends=('git' 'zip' 'python2' 'perl')
provides=('thunderbird-extension-enigmail' 'thunderbird-enigmail')
conflicts=('thunderbird-extension-enigmail' 'thunderbird-enigmail')
source=("enigmail-git::git+https://gitlab.com/enigmail/enigmail.git")
sha512sums=('SKIP')

pkgver()
{
	cd enigmail-git
	git describe --long | sed 's/enigmail-//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build()
{
	cd enigmail-git
	./configure
	make -j1 # fails with -j greater than 1
}

package()
{
	cd enigmail-git

	local emid="$(sed -n '/.*<em:id>\(.*\)<\/em:id>.*/{s//\1/p;q}' \
		package/install.rdf)"
	local target_dir="${pkgdir}/usr/lib/thunderbird/extensions/${emid}"

	install -d -m755 "$target_dir"
	cp -R build-tb/dist/. "$target_dir"
}
