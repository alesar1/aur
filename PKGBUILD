# Maintainer: Leela Ross <leela@leela-ross.com>
# Maintainer: Ethan Skinner <aur@etskinner.com>
pkgname=znc-push-git
pkgver=v1.0.0.r163.d2cf0d3
pkgrel=2
pkgdesc="A module for ZNC that sends notifications to push notification services"
arch=('i686' 'x86_64' 'armv6h' 'armv7h' 'aarch64')
url="http://noswap.com/projects/znc-push"
license=('MIT')
depends=('znc')
makedepends=('git')
source=("${pkgname}::git+git://github.com/jreese/znc-push.git")
md5sums=('SKIP')

pkgver() {
  cd "$srcdir/${pkgname}"
  printf "%s" "$(git describe --long | sed 's/\([^-]*-\)g/r\1/;s/-/./g')"
}

build() {
  cd "$srcdir/${pkgname}"
  make curl=yes
}

package() {
  cd "$srcdir/${pkgname}"
  install -Dm755 push.so "$pkgdir/usr/lib/znc/push.so"
  install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
