# Maintainer: Jaryl Chng <mrciku@gmail.com>
pkgname=libbde-git
pkgver=20161214.4f6fd39
pkgrel=1
pkgdesc='Library to access the BitLocker Drive Encryption (BDE) format'
arch=('i686' 'x86_64')
url='https://github.com/libyal/libbde'
license=('LGPL')
provides=('libbde-git')
conflicts=('libbde')
groups=()
depends=()
makedepends=('git')
optdepends=()
options=()
source=('git+https://github.com/libyal/libbde.git')
sha1sums=('SKIP')

_gitname="libbde"

pkgver() {
  cd "$srcdir/$_gitname"
  git log -1 --format='%cd.%h' --date=short | tr -d -
}

build() {
  cd "$_gitname"

  ./synclibs.sh
  ./autogen.sh
  ./configure \
    --prefix=/usr \
    --sysconfdir=/etc

  make
}

package() {
  cd "$_gitname"

  make DESTDIR="$pkgdir/" install
}