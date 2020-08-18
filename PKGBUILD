# Maintainer: Benjamin Manuel <ben@benmanuel.com>
pkgname=python-validity-git
_pkgdirname=python-validity
pkgver=0.9.r23.g64438d6
pkgrel=1
pkgdesc="Validity fingerprint sensor driver"
arch=(any)
license=(MIT)
depends=(python python-pyusb python-cryptography python-dbus python-gobject 
  innoextract open-fprintd fprintd-clients)
makedepends=(git python-setuptools)
conflicts=(python-validity)
provides=(python-validity)
url="https://github.com/uunicorn/python-validity"
source=("${_pkgdirname}::git+https://github.com/uunicorn/python-validity.git")
sha256sums=('SKIP')

pkgver() {
  cd "$_pkgdirname"
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd $srcdir/$_pkgdirname
  python setup.py build
}

package() {
  cd $srcdir/$_pkgdirname
  python setup.py install --prefix=/usr --root $pkgdir || return 1

  install -D -m 644 debian/python3-validity.service \
    $pkgdir/usr/lib/systemd/system/python3-validity.service

  install -D -m 644 debian/python3-validity-suspend-restart.service \
    $pkgdir/usr/lib/systemd/system/python3-validity-suspend-restart.service

  install -D -m 644 debian/python3-validity.udev \
    $pkgdir/usr/lib/udev/rules.d/60-python-validity.rules
}

# vim:set ts=2 sw=2 et:
