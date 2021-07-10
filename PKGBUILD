# Maintainer: willemw <willemw12@gmail.com>

pkgname=btrfsmaintenance-git
pkgver=0.5.r0.gbe42cb6
pkgrel=1
pkgdesc="Btrfs maintenance scripts"
arch=('any')
url="https://github.com/kdave/btrfsmaintenance"
license=('GPL')
depends=('btrfs-progs')
makedepends=('git')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
backup=('etc/default/btrfsmaintenance')
source=($pkgname::git+$url.git)
sha256sums=('SKIP')

pkgver() {
  git -C $pkgname describe --long | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

#prepare() {
#  sed -i 's| /usr/share| "'$pkgdir'"/usr/share|g' $pkgname/dist-install.sh
#}

package() {
  cd $pkgname
  install -Dm644 sysconfig.btrfsmaintenance "$pkgdir/etc/default/btrfsmaintenance"
  install -Dm755 btrfs-*.sh btrfsmaintenance-refresh-cron.sh -t "$pkgdir/usr/share/btrfsmaintenance"
  install -Dm644 btrfsmaintenance-{functions,refresh.path} README.md -t "$pkgdir/usr/share/btrfsmaintenance"
  install -Dm644 ./*.service ./*.timer -t "$pkgdir/usr/lib/systemd/system"
  #./dist-install.sh "$pkgdir/etc/default"
}

