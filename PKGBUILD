# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=system-monitoring-center
pkgver=1.27.0
_pkgver="$pkgver-deb_for_stores"
pkgrel=1
pkgdesc="System performance and usage monitoring tool"
arch=('any')
url="https://github.com/hakandundar34coding/system-monitoring-center"
license=('GPL3')
depends=('bash' 'dmidecode' 'gtk3' 'iproute2' 'polkit' 'python-cairo' 'python-gobject'
         'systemd' 'util-linux')
makedepends=('python-setuptools')
source=("$pkgname-$pkgver.tar.gz::$url/archive/refs/tags/v$_pkgver.tar.gz"
        "org.freedesktop.$pkgname.policy")
sha256sums=('659ef27e7c73dc063169cc4978c263632bf51a1cc2df89cbe81dbefde71860bd'
            '468d309c8c2520ee09d68fbac8161f1034f6ea04b7b30b5127d3a83066415bd1')

build() {
  cd "$pkgname-$_pkgver"
  python setup.py build
}

package() {
  cd "$pkgname-$_pkgver"
  python setup.py install --root="$pkgdir" --optimize=1 --skip-build

  install -Dm644 "$srcdir/org.freedesktop.$pkgname.policy" -t \
    "$pkgdir/usr/share/polkit-1/actions/"
}
