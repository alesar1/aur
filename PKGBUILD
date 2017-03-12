# Maintainer: Florian Bruhin (The Compiler) <archlinux.org@the-compiler.org>
# Contributor: Yannik Stein <yannik.stein [at] gmail.com>
# Contributor: Dan Serban
# Contributor: flying-sheep
# Contributor: Liu Chang <goduck777@gmail.com>

pkgname=pdftk-bin
pkgver=2.02_4_b2
# There's no b2 for i686...
_deb_pkgver_32=2.02-4+b1
_deb_pkgver_64=2.02-4+b2
pkgrel=2
pkgdesc="Swiss army knife for PDFs. Built from binary executables available in Debian repositories."
url=http://www.pdfhacks.com/pdftk
arch=(i686 x86_64)
license=(GPL)
depends=(libgcj17-bin gcc-libs)
provides=(pdftk)
conflicts=(pdftk pdfchain-all-inclusive)

source_i686=(http://httpredir.debian.org/debian/pool/main/p/pdftk/pdftk_${_deb_pkgver_32}_i386.deb)
source_x86_64=(http://httpredir.debian.org/debian/pool/main/p/pdftk/pdftk_${_deb_pkgver_64}_amd64.deb)

sha1sums_i686=('7cc5b82bef21627019eb1e908f006c3529961a2e')
sha1sums_x86_64=('21ceeaa5ea7d1628dfb0da069126468e446d0572')

package() {
  tar -xf data.tar.?z -C "$pkgdir" ./usr
}

# vim:set ts=2 sw=2 ft=sh et:
