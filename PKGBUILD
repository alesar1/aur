# Maintainer: Dominik Schrempf <dominik.schrempf@gmail.com>
pkgname=nextcloud-systemd-cron
pkgver=0.1
pkgrel=1
epoch=
pkgdesc="Systemd service and timer for Nextcloud Cron background jobs (see Nextcloud Arch Wiki entry)."
arch=('any')
url=""
license=('GPL')
groups=()
depends=()
makedepends=()
checkdepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=("nextcloudcron.service"
        "nextcloudcron.timer")
md5sums=('17b476ac2a223d8438c6097cd2073528'
         '2acabd8f016661094567de4b6d1b2914')
noextract=()

# prepare() {
#   cd "$srcdir/$pkgname-$pkgver"
#   patch -p1 -i "$srcdir/$pkgname-$pkgver.patch"
# }

# build() {
#   cd "$srcdir/$pkgname-$pkgver"
#   ./configure --prefix=/usr
#   make
# }

# check() {
#   cd "$srcdir/$pkgname-$pkgver"
#   make -k check
# }

package() {
  # cd "$srcdir/$pkgname-$pkgver"
  # make DESTDIR="$pkgdir/" install
  install -D -m 644 nextcloudcron.service $pkgdir/etc/systemd/system/nextcloudcron.service
  install -D -m 644 nextcloudcron.timer $pkgdir/etc/systemd/system/nextcloudcron.timer
}

# vim:set ts=2 sw=2 et:
