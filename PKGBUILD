# Maintainer: j.r <j.r@jugendhacker.de>
# Contributor: Matthew Murray <matt@mattmurr.xyz>
pkgname=python-validity
pkgver=0.12
pkgrel=5
pkgdesc="Validity fingerprint sensor driver"
arch=(any)
license=(MIT)
depends=(python python-yaml python-pyusb python-cryptography python-dbus python-gobject 
  innoextract "open-fprintd>=0.6" fprintd-clients)
makedepends=(python-setuptools)
conflicts=($pkgname)
provides=($pkgname)
url="https://github.com/uunicorn/${pkgname}"
source=("${url}/archive/${pkgver}.tar.gz"
        "0001-update-dbus-loader-Remove-Loader-from-safe_load.patch")
md5sums=('1e7cb6079b95541dd2dd898c868ec107'
         'ff4cb9a27f8bc75e8a2afbc6fc897c7f')

prepare() {
  cd $srcdir/$pkgname-$pkgver
  patch -p1 -i "$srcdir/0001-update-dbus-loader-Remove-Loader-from-safe_load.patch"
}

build() {
  cd $srcdir/$pkgname-$pkgver
  python setup.py build
}

package() {
  cd $srcdir/$pkgname-$pkgver
  python setup.py install --prefix=/usr --root $pkgdir || return 1

  install -D -m 644 debian/python3-validity.service \
    $pkgdir/usr/lib/systemd/system/python3-validity.service

  install -D -m 644 debian/python3-validity.udev \
    $pkgdir/usr/lib/udev/rules.d/60-python-validity.rules

  install -Dm644 LICENSE \
    ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE
}

# vim:set ts=2 sw=2 et:
