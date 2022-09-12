# Maintainer: Caleb Maclennan <caleb@alerque.com>
# Contributor: mrxx <mrxx at cyberhome dot at>
# Contributor: rmanne <rahul_manne@hotmail.com>

# See Debian packaging for details, rules and control files linked here:
# https://tracker.debian.org/pkg/praat

# To bump, a build has to be available here:
# http://http.at.debian.org/debian/pool/main/p/praat/

pkgname=praat-bin
pkgver=6.2.18
# versioning snafu, see https://github.com/praat/praat/issues/2207
_pkgver=6.2.22
_debver=1
pkgrel=1
pkgdesc='Doing Phonetics by computer (speech analysis)'
url='http://www.praat.org/'
arch=(x86_64)
license=(GPL)
depends=(alsa-lib
         gtk2
         jack
         libpulse
         ttf-charis-sil
         ttf-sil-doulos)
optdepends=(ttf-sil-fonts)
provides=("${pkgname%-bin}")
conflicts=("${pkgname%-bin}")
source=("http://http.at.debian.org/debian/pool/main/p/${pkgname%-bin}/${pkgname%-bin}_$_pkgver-${_debver}_amd64.deb")
sha256sums=('99329ef6fa006322f8b706d242e817ae7b022f9097519888d3f068a595da4bab')

prepare() {
	bsdtar -xf data.tar.xz
}

package() {
	cp -r "$srcdir/usr" "$pkgdir/"
}
