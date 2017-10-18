# Maintainer: Baptiste Jonglez <baptiste--aur at jonglez dot org>
# Based on the lvm2 package in [core]
pkgname="python2-lvm"
pkgver=2.02.175
pkgrel=1
arch=('i686' 'x86_64')
url="http://sourceware.org/lvm2/"
license=('LGPL2.1')
pkgdesc="Python 2 bindings for LVM"
depends=('python2' 'lvm2')
source=(https://mirrors.kernel.org/sourceware/lvm2/releases/LVM2.${pkgver}.tgz{,.asc})
sha256sums=('4db7a3ec6d082be212f759279b54bcdfd3c3797a5ea67605746049b004632559'
            'SKIP')
validpgpkeys=('88437EF5C077BD113D3B7224228191C1567E2C17')

build() {
  CONFIGUREOPTS="--prefix=/usr --sysconfdir=/etc --localstatedir=/var --sbindir=/usr/bin \
      --with-udev-prefix=/usr --with-systemdsystemunitdir=/usr/lib/systemd/system \
      --with-default-pid-dir=/run --with-default-dm-run-dir=/run --with-default-run-dir=/run/lvm \
      --with-default-locking-dir=/run/lock/lvm \
      --enable-applib --enable-python2_bindings"

  cd LVM2.${pkgver}

  ./configure $CONFIGUREOPTS
  make python
}

package() {
  cd LVM2.${pkgver}

  make -C python DESTDIR="${pkgdir}" install
}
