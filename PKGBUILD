# Maintainer: Frederik “Freso” S. Olesen <freso.dk@gmail.com>
# Contributor: Maxime Gauduin <alucryd@archlinux.org>

pkgname=lutris
pkgver=0.3.7
pkgrel=1
pkgdesc='Open Gaming Platform'
arch=('any')
url='https://lutris.net/'
license=('GPL3')
depends=('desktop-file-utils' 'hicolor-icon-theme' 'polkit' 'xorg-xrandr'
         'python2-dbus' 'python2-gobject' 'python2-xdg' 'python2-yaml')
makedepends=('python2-setuptools')
install='lutris.install'
source=("https://lutris.net/releases/lutris_${pkgver}.tar.gz")
sha256sums=('aff6e5d9319b3018ed605da6da53f5d98c0a5faaa5bea017fb3c2deb5f27fada')

prepare() {
  cd lutris

  sed -i 's|^#!.*python$|#!/usr/bin/python2|' $(grep -rl '^#!.*python')
}

package() {
  cd lutris

  python2 setup.py install --root="${pkgdir}" --optimize='1'
}

# vim: ts=2 sw=2 et:
