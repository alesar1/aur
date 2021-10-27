# maintainer: libele <libele@disroot.org>

pkgname=inform-git
_gitpkg=inform6unix
pkgver=6.35.r5.0.g2a26035
pkgrel=1
pkgdesc="Interactive fiction compiler (git version)"
arch=('aarch64' 'arm' 'armv6h' 'armv7h' 'i686' 'pentium4' 'x86_64')
url="http://www.inform-fiction.org/"
license=('Artistic2.0' 'MIT')
provides=('inform')
conflicts=('inform')
groups=(inform)
source=('git+https://gitlab.com/DavidGriffith/inform6unix.git')
md5sums=('SKIP')

pkgver() {
  cd "${_gitpkg}"
  printf "%s" "$(git describe --long --tags | sed 's/v//; s/-/./g')"
}

prepare() {
  cd "${srcdir}/${_gitpkg}"
  make submodules
}

build() {
  cd "${srcdir}/${_gitpkg}"
  make PREFIX=/usr MAN_PREFIX=/usr/share
}

package() {
  cd "${srcdir}/${_gitpkg}"
  make REAL_PREFIX=/usr PREFIX="${pkgdir}"/usr MAN_PREFIX="${pkgdir}"/usr/share install

  cd "${pkgdir}"/usr/bin
  rm pblorb punyinform scanblorb
  mv punyinform.sh punyinform
}
