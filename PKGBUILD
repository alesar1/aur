# Maintainer: Chocobo1 <chocobo1 AT archlinux DOT net>

pkgname=stalld
pkgver=1.6
pkgrel=1
pkgdesc="A daemon to prevent the starvation of operating system threads"
arch=('i686' 'x86_64')
url="https://git.kernel.org/pub/scm/utils/stalld/stalld.git/"
license=('GPL2')
depends=('glibc')
source=("https://git.kernel.org/pub/scm/utils/stalld/stalld.git/snapshot/stalld-$pkgver.tar.gz")
sha256sums=('98b846418e5861b287acc4ccaaac31366945dd33c9ca2919f64ad39cede0ad32')


build() {
  cd "stalld-$pkgver"

  make
}

package() {
  cd "stalld-$pkgver"

  make DESTDIR="$pkgdir" install
  install -Dm644 "redhat/stalld.service" -t "$pkgdir/usr/lib/systemd/system"
}
