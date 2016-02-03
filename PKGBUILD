# $Id$
# Maintainer: archaurwiki <archaurwiki at i2pmail dot org>
# Contributor: Alexander Rødseth <rodseth@gmail.com>
# Contributor: Angel Velasquez <angvp@archlinux.org>
# Contributor: Douglas Soares de Andrade <douglas@archlinux.org>
# Contributor: d'Ronin <daronin@2600.com>
# Contributor: Hexchain Tong <richard0053@gmail.com>

pkgname=botan-stable
pkgver=1.10.12
pkgrel=1
pkgdesc='Crypto library written in C++'
license=('BSD')
arch=('x86_64' 'i686')
url='http://botan.randombit.net/'
depends=('gcc-libs' 'sh' 'asio')
makedepends=('python2' 'asio' 'git')
provides=('botan-stable')
validpgpkeys=('621DAF6411E1851C4CF9A2E16211EBF1EFBADFBC')
source=("https://botan.randombit.net/releases/Botan-${pkgver}.tgz"{,.asc})
sha256sums+=('affc3a79919577943f896e64d3e4a4dcc4970c5bf80cc98c7f3a3144745eac27'
           'd72a80abd20450a6308b420f16585d5f6e54a689d116dc1374a09ce96e5f9da4')

prepare() {
  # Use python2 for the installation scripts
  find . -name '*.py' -exec sed -i -e '1s,python$,python2,' {} +
}

build() {
  cd Botan-${pkgver}
  python2 configure.py --prefix=/usr --enable-modules=cvc --with-openssl --with-gnump --with-bzip2 --with-zlib
  make
}

package() {
  cd Botan-${pkgver}
  make DESTDIR="$pkgdir/usr" install
  find "$pkgdir/usr/share/doc" -type f -exec chmod 0644 {} \;
  install -Dm644 doc/license.txt "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

# vim:set ts=2 sw=2 et:
