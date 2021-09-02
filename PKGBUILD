# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=('pop-launcher-git' 'pop-launcher-system76-power-git')
pkgbase=pop-launcher-git
pkgver=1.0.0.r1.gbbd513a
pkgrel=2
arch=('x86_64')
url="https://github.com/pop-os/launcher"
license=('GPL3')
depends=('fd' 'gtk3' 'libqalculate')
makedepends=('cargo' 'git')
source=('git+https://github.com/pop-os/launcher.git')
sha256sums=('SKIP')

pkgver() {
  cd "$srcdir/launcher"
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  cd "$srcdir/launcher"
  cargo fetch --target "$CARCH-unknown-linux-gnu"
}


build() {
  cd "$srcdir/launcher"
  export RUSTUP_TOOLCHAIN=stable
  make
}

package_pop-launcher-git() {
  pkgdesc="Modular IPC-based desktop launcher service"
  optdepends=('pop-launcher-system76-power')
  provides=("${pkgname%-git}")
  conflicts=("${pkgname%-git}")

  cd "$srcdir/launcher"
  make DESTDIR="$pkgdir/" install

  # Fix symlink
  rm "$pkgdir/usr/lib/${pkgbase%-git}/plugins/pop_shell/pop-shell"
  ln -s "/usr/bin/${pkgbase%-git}" \
    "$pkgdir/usr/lib/${pkgbase%-git}/plugins/pop_shell/pop-shell"

  rm -rf "$pkgdir/usr/lib/${pkgbase%-git}/scripts/system76-power"
}

package_pop-launcher-system76-power-git() {
  pkgdesc="System76 Power scripts for the launcher"
  depends=('pop-launcher' 'system76-power')
  provides=("${pkgname%-git}")
  conflicts=("${pkgname%-git}")

  cd "$srcdir/launcher"
  install -d "$pkgdir/usr/lib/${pkgbase%-git}/scripts"
  cp -r scripts/system76-power "$pkgdir/usr/lib/${pkgbase%-git}/scripts"
}
