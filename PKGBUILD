# Maintainer: Niclas Meyer <niclas at countingsort dot com>

pkgname=literate-git
pkgver=1_737567e
pkgrel=1
pkgdesc="A literate programming tool for any language"
arch=('i686' 'x86_64')
url="https://github.com/zyedidia/Literate"
license=('MIT')
makedepends=('git' 'dmd' 'dub')
conflicts=('literate')
provides=('literate')
source=("${pkgname}::git+https://github.com/zyedidia/Literate.git")
sha256sums=('SKIP')

pkgver() {
  cd "${srcdir}/${pkgname}"
  echo -n "${pkgrel}_"
  git describe --always | sed -e 's/-/_/g'
}

build() {
  cd "${srcdir}/${pkgname}"
  make
}

package() {
  install -Dm755 "${srcdir}/${pkgname}/bin/lit" "${pkgdir}/usr/bin/lit"
}
