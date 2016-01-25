# Maintainer : Antonio Orefice <kokoko3k@gmail.com>

pkgname=gopreload-git
_gitname=gopreload
pkgver=r30.3f5d2de
pkgrel=1
pkgdesc="Preloads files needed for given programs"
arch=('any')
url="http://forums.gentoo.org/viewtopic-t-622085-highlight-preload.html"
license=('GPL')
depends=('strace')
makedepends=('git')
provides=('gopreload')
conflicts=('gopreload')
backup=('etc/gopreload.conf')
install=${_gitname}.install
source=('git://github.com/kokoko3k/gopreload.git')
sha256sums=('SKIP')

pkgver() {
  cd "${srcdir}/${_gitname}"

  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "${srcdir}/${_gitname}"

  mv README "usr/share/${_gitname}/"

  cd "usr/share/${_gitname}/mapandlock.source"
  ./compile.sh && ./install.sh

  rm -R  ../mapandlock.source
}

package() { 
  cd "${srcdir}/${_gitname}"

  mv * "${pkgdir}"

  mkdir -p "${pkgdir}/usr/bin"
  ln -s /usr/share/gopreload/bin/Prepare.sh "${pkgdir}/usr/bin/gopreload-prepare"
}

# vim:set ts=2 sw=2 et:

