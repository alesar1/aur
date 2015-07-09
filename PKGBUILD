# Maintainer: Mantas Mikulėnas <grawity@gmail.com>
# Contributor: Thiago Yukio Kikuchi Oliveira <stratust@gmail.com>

pkgname=globus-toolkit
pkgver=6.0.1433516164
pkgrel=1
pkgdesc="Toolkit for building grids"
arch=('i686' 'x86_64')
url="http://toolkit.globus.org/"
license=('APACHE')
provides=("globus=$pkgver")
replaces=(globus)
conflicts=(globus)
source=(http://toolkit.globus.org/ftppub/gt6/installers/src/globus_toolkit-$pkgver.tar.gz)
sha1sums=(2f6c451664d01d238906519ca33a4b4d9fb1217d)
install="globus.install"

build() {
  cd globus_toolkit-$pkgver
  ./configure --prefix=/usr --sysconfdir=/etc
  make
}

package() {
  cd globus_toolkit-$pkgver
  make DESTDIR="$pkgdir" install
}

# vim: ft=sh:ts=2:sw=2:et
