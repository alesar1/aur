# Maintainer: Swift Geek
#TODO: sed for changing % of free ram to trigger
#TODO: sed for changing oom-killer method
#TODO: sed for fixing *.service executable path (syslog might be also bad)
#TODO: approperiate install messages

pkgname=kmscube-git
_pkgname=${pkgname%-*}
pkgver=a
pkgrel=1
pkgdesc="example gl app using kms/gbm"
arch=('i686' 'x86_64')
url="https://cgit.freedesktop.org/mesa/kmscube/"
license=('custom')
depends=('mesa')
makedepends=('git')
source=("git://anongit.freedesktop.org/mesa/kmscube")
md5sums=('SKIP')

pkgver() {
  cd "$srcdir/$_pkgname"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "$srcdir/${_pkgname}/"
  ./autogen.sh --prefix=/usr
  make
}

package() {
  cd "$srcdir/${_pkgname}/"
  make DESTDIR="${pkgdir}" install
}
