# Maintainer: Logan Magee <mageelog@gmail.com>
# Contributor: Dimitris Kiziridis <ragouel at outlook dot com>
# Contributor: whoami <whoami@systemli.org>
# Contributor: Jefferson González <jgmdev@gmail.com>
# Contributor: Chloe Kudryavtsev <toast@toastin.space>

pkgname=vlang-git
pkgver=0.2.r418.g33976246c
pkgrel=3
pkgdesc='Simple, fast, safe, compiled language for developing maintainable software'
arch=('x86_64')
url='https://vlang.io'
license=('MIT')
depends=('glibc')
makedepends=('git')
optdepends=('glfw: Needed for graphics support'
      'freetype2: Needed for graphics support'
      'openssl: Needed for http support')
provides=('vlang')
conflicts=('v' 'vlang' 'vlang-bin')
source=('vlang::git+https://github.com/vlang/v')
sha256sums=('SKIP')

pkgver() {
  cd "${srcdir}/vlang"
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "${srcdir}/vlang"
  # We don't require optimizations when compiling the bootstrap executable and
  # -O2 actually breaks `./v self` (resulting in "cgen error:"), so we empty
  # CFLAGS and LDFLAGS to ensure successful compilation.
  CFLAGS="" LDFLAGS="" prod=1 make
}

package() {
  cd "${srcdir}/vlang"
  install -d "$pkgdir/usr/lib/vlang" "$pkgdir/usr/share/vlang" "$pkgdir/usr/bin"
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  install -Dm755 v "$pkgdir/usr/lib/vlang"
  cp -a cmd "$pkgdir/usr/lib/vlang/"
  chmod -R 777 "$pkgdir/usr/lib/vlang/cmd"
  cp -a examples "$pkgdir/usr/share/vlang/"
  cp -a thirdparty "$pkgdir/usr/lib/vlang/"
  cp -a vlib "$pkgdir/usr/lib/vlang/"
  cp v.mod "$pkgdir/usr/lib/vlang/"
  ln -s /usr/lib/vlang/v "$pkgdir/usr/bin/v"
}
