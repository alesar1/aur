# Maintainer: Nanda Vera <codeharuka.yusa@gmail.com>
pkgname=clearine-git
pkgver=0.2.r0.ga068eba
pkgrel=1
pkgdesc="Yet Another GTK3-based logout-window overlay for independent windowmanager. Inspired from oblogout and Android Oreo's power menu"
arch=('any')
url="https://github.com/yuune/clearine"
license=('MIT')
depends=('python-gobject' 'python-cairo')
makedepends=('git')
backup=('etc/clearine.conf')
source=("clearine-git::git+https://github.com/yuune/clearine.git")
md5sums=('SKIP')

pkgver() {
  cd $pkgname
  git describe --long --tags | sed "s/-/.r/;s/-/./g"
}

package() {
  cd $pkgname
  make DESTDIR="$pkgdir" install
  install -D -m644 LICENSE "$pkgdir/usr/share/licenses/clearine/LICENSE.md"
}