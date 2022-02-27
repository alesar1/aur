# Maintainer: robertfoster

pkgname=distrobox-git
pkgver=1.2.13.r15.7960dbd
pkgrel=1
pkgdesc="Use any linux distribution inside your terminal."
arch=('any')
url="https://github.com/89luca89/distrobox"
license=('GPL3')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
optdepends=(
  'docker: enable docker usage'
  'podman: enable podman usage'
)
source=("${pkgname%-git}::git+${url}")

pkgver() {
  cd "$srcdir/${pkgname%-git}"
  printf "%s" "$(git describe --tags | sed 's/\([^-]*-\)g/r\1/;s/-/./g')"
}

package() {
  cd "${srcdir}/${pkgname%-git}"
  mkdir -p "${pkgdir}/usr/bin"
  ./install -P "${pkgdir}/usr/bin"
}

sha256sums=('SKIP')
