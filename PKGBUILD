# Maintainer: American_Jesus <american.jesus.pt AT gmail DOT com>
pkgname=grub2-theme-preview
pkgver=1.3.2
pkgrel=1
pkgdesc="Preview a full GRUB 2.x theme (or just a background image) using KVM/QEMU"
arch=('any')
url="https://github.com/hartwork/grub2-theme-preview"
license=('GPL')
depends=('grub' 'qemu' 'mtools' 'python' 'libisoburn')
source=("git+https://github.com/hartwork/grub2-theme-preview.git#tag=${pkgver}")
sha256sums=('SKIP')

package() {
  cd "${srcdir}/$pkgname"
  make DESTDIR="$pkgdir" install
}
