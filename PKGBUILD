# Maintainer: Einhard Leichtfuß <archer@respiranto.de>
# Contributor: Daniel Landau <daniel.landau@iki.fi>
# Contributor: Xyne
# Contributor: David Manouchehri <d@32t.ca>
# Contributor: Alexander Fehr <pizzapunk gmail com>
# Contributor: Thomas Jost <schnouki schnouki net>
# Contributor: Hinrich Harms <arch hinrich de>

# This PKGBUILD is thankfully derived from thunderbird-enigmail
# which lives in https://github.com/daniellandau/AUR-thunderbird-enigmail
# pull requests are welcome

pkgname=icedove-enigmail
pkgver=1.9.5
pkgrel=1
pkgdesc="Icedove extension that enables sending and receiving signed and encrypted e-mail messages"
arch=('any')
url="https://www.enigmail.net/"
license=('MPL' 'GPL')
depends=('icedove>=38' 'gnupg>=2.0.7')
makedepends=('zip' 'python2' 'perl>=5.8')
source=("https://www.enigmail.net/download/source/enigmail-${pkgver}.tar.gz"{,.asc}) # gpg --recv-keys 9369CDF3 DD5F693B
validpgpkeys=('10B2E4A0E718BB1B2791DAC4F040E41B9369CDF3'
              '4F9F89F5505AC1D1A260631CDB1187B9DD5F693B')
sha256sums=('831e53a4add0f465241f075be9475103367aa1452675adae054d8fb272e5d3ad'
            'SKIP')

build() {
  cd "$srcdir/enigmail"
  PYTHON=/usr/bin/python2 ./configure
  make -j1 # fails with -j greater than 1
}

package() {
  cd "$srcdir/enigmail"
  emid="$(sed -n '/.*<em:id>\(.*\)<\/em:id>.*/{s//\1/p;q}' package/install.rdf)"
  install -d -m755 "$pkgdir"/usr/lib/icedove/extensions/"$emid"
  cd "$pkgdir"/usr/lib/icedove/extensions/"$emid"
  bsdtar -xf "$srcdir"/enigmail/build/enigmail-*.xpi
}
