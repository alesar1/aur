# Maintainer: Tucker Boniface <tucker@boniface.tech>
# Maintainer: Jguer <joaogg3@gmail.com>
pkgname="yay-git"
_pkgname="yay"
pkgver=9.4.6.r0.g352667f
pkgrel=1
pkgdesc="Yet another yogurt. Pacman wrapper and AUR helper written in go. (development version)"
arch=('i686' 'x86_64' 'armv7h' 'aarch64')
url="https://github.com/Jguer/yay"
license=('GPL')
options=('!strip' '!emptydirs')
depends=(
  'libalpm.so>=12'
  'git'
  'sudo')
makedepends=('go')
conflicts=('yay')
provides=('yay')
source=("yay::git+https://github.com/Jguer/yay.git#branch=master")
md5sums=("SKIP")

pkgver() {
  cd "$srcdir/$_pkgname"
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "$srcdir/$_pkgname"
  EXTRA_GOFLAGS="-gcflags all=-trimpath=${PWD} -asmflags all=-trimpath=${PWD}" \
    LDFLAGS="-linkmode external -extldflags \"${LDFLAGS}\"" \
    make VERSION=$pkgver DESTDIR="$pkgdir" build
}

package() {
  cd "$srcdir/$_pkgname"
  make VERSION=$pkgver DESTDIR="$pkgdir" PREFIX=/usr install
}
