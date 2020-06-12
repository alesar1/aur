# Maintainer: Eric Engestrom <aur [at] engestrom [dot] ch>

pkgname=drminfo-git
pkgver=7.1+4.g2d93a2dd2f
pkgrel=1
pkgdesc="print drm device information"
arch=('i686' 'x86_64')
url="https://www.kraxel.org/cgit/drminfo/"
license=('GPLv2')
source=('git://git.kraxel.org/drminfo')
sha256sums=('SKIP')
depends=('libdrm' 'mesa' 'libepoxy' 'pixman' 'gtk3')
makedepends=('meson')
checkdepends=('python-avocado')
conflicts=('drminfo')
provides=("drminfo=${pkgver%+*}")

pkgver() {
  cd drminfo
  git describe --long --abbrev=10 | sed 's/^drminfo-//; s/-/./; s/-/+/; s/-/./'
}

prepare() {
  cd drminfo
  rm -rf build
  meson build --prefix='/usr'
}

build() {
  cd drminfo
  ninja -C build
}

check() {
  cd drminfo/tests
  avocado run *.py
}

package() {
  cd drminfo
  DESTDIR="${pkgdir}" ninja -C build install

  install -dm755 "$pkgdir/usr/share/bash-completion/completions/"
  pushd "$pkgdir/usr/bin" >/dev/null
  for x in *
  do
    ./$x --complete-bash > "$pkgdir/usr/share/bash-completion/completions/$x"
  done
  popd >/dev/null
}
