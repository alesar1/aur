# Maintainer  : 33KK

pkgname=flameshot-33kk-git
_pkgname=flameshot
pkgver=r560.4cbb165
pkgrel=1
pkgdesc="Powerful yet simple to use screenshot software (with custom uploader and increased blur radius)"
arch=('i686' 'x86_64')
url="https://github.com/33kk/flameshot"
license=('GPL')
depends=(qt5-base hicolor-icon-theme qt5-svg)
makedepends=(qt5-tools git)
provides=(flameshot-git)
conflicts=(flameshot)
source=("git+https://github.com/33kk/flameshot.git")
sha256sums=('SKIP')

pkgver() {
  cd "${srcdir}/${_pkgname}"

  # Get the version number.
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "${srcdir}/${_pkgname}"
  qmake CONFIG+=packaging
  make
}

package() {
  cd "${srcdir}/${_pkgname}"
  make INSTALL_ROOT="${pkgdir}" install
}
