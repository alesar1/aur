# Maintainer: Matthew Murray <matt@mattmurr.xyz>
pkgname=python-validity
pkgver=0.7
pkgrel=1
pkgdesc="Validity fingerprint sensor driver"
arch=(any)
license=(MIT)
depends=(python python-pyusb python-cryptography python-dbus python-gobject 
  innoextract open-fprintd fprintd-clients)
makedepends=(python-setuptools)
conflicts=($pkgname)
provides=($pkgname)
url="https://github.com/uunicorn/${pkgname}"
source=("${url}/archive/${pkgver}.tar.gz")
md5sums=('9a327e7ff6cd55720d2cf62fa6d86b6b')

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
}

# vim:set ts=2 sw=2 et:
