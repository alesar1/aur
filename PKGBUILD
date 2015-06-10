# Contributor: Bernard Baeyens (berbae) <berbae52 at sfr dot fr>

pkgname=pan
pkgver=0.139
pkgrel=3
pkgdesc="A powerful Newsgroup Article reader"
arch=('i686' 'x86_64')
url="http://pan.rebelbase.com/"
license=('GPL2')
depends=('gtk2' 'gmime' 'gtkspell' 'gnutls')
#depends=('gtk3' 'gmime' 'gnutls')
makedepends=('gnome-common' 'intltool')
conflicts=('pan-devel' 'pan-git')
options=('!makeflags')
source=("http://pan.rebelbase.com/download/releases/${pkgver}/source/${pkgname}-${pkgver}.tar.bz2")
sha1sums=('01ea0361a6d81489888e6abb075fd552999c3c60')

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  #./configure --prefix=/usr --with-gtk3 --without-gtkspell --with-gnutls
  ./configure --prefix=/usr --disable-gkr --without-dbus --with-gnutls
  make
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  make DESTDIR="${pkgdir}" install
}
