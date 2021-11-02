# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
# Contributor: Corey Hinshaw <coreyhinshaw(at)gmail(dot)com>
pkgname=system76-io-dkms
_modname=system76-io
pkgver=1.0.1
pkgrel=2
pkgdesc="DKMS module for controlling System76 Io board"
arch=('x86_64')
url="https://github.com/pop-os/system76-io-dkms"
license=('GPL3')
depends=('dkms')
makedepends=('git')
_commit=ea5f61a2e0b2749f3f9f7add7b1d8a37085b1ff9
source=("git+https://github.com/pop-os/system76-io-dkms.git#commit=$_commit?signed")
sha256sums=('SKIP')
validpgpkeys=('DA0878FCF806089ED4FDDF58E988B49EE78A7FB1') # Jeremy Soller <jeremy@system76.com>

pkgver() {
  cd "$srcdir/$pkgname"
  git describe --tags | sed 's/-/+/g'
}

package() {
  cd "$srcdir/$pkgname"

  # Installation directory
  local install_dir="$pkgdir/usr/src/system76-io-$pkgver"

  # Install source files
  for file in {Makefile,*.c,*.h}; do
    [ -f "$file" ] || continue
    install -D -m644 -t "$install_dir/" "$file"
  done

  # Edit and install dkms configuration
  sed "s/#MODULE_VERSION#/$pkgver/" "debian/system76-io-dkms.dkms" > "$install_dir/dkms.conf"

  # Load the module at boot
  install -Dm644 "usr/share/initramfs-tools/modules.d/$pkgname.conf" \
    "$pkgdir/etc/modules-load.d/system76-io.conf"
}
