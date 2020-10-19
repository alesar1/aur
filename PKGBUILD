# Maintainer: Llewelyn Trahaearn <WoefulDerelict at GMail dot com>
# Contributor: quequotion <quequotion at bugmenot dot com>
# Contributor: Tom Gundersen <teg at jklm dot no>
# Contributor: Andrea Scarpino <andrea at archlinux dot org>
# Contributor: Geoffroy Carrier <geoffroy at archlinux dot org>

pkgbase=lib32-bluez-libs
pkgname=("${pkgbase}" 'lib32-bluez-plugins')
pkgver=5.55
pkgrel=1
url="http://www.bluez.org/"
arch=('x86_64')
license=('LGPL2.1')
makedepends=('lib32-dbus' 'lib32-gcc-libs' 'lib32-glib2' 'lib32-systemd')
source=("https://www.kernel.org/pub/linux/bluetooth/bluez-${pkgver}.tar."{xz,sign})
# see https://www.kernel.org/pub/linux/bluetooth/sha256sums.asc
sha256sums=('8863717113c4897e2ad3271fc808ea245319e6fd95eed2e934fae8e0894e9b88'
            'SKIP')
validpgpkeys=('E932D120BC2AEC444E558F0106CA9F5D1DCF2659') # Marcel Holtmann <marcel@holtmann.org>

build() {
  # Modify environment to generate 32-bit ELF. Respects flags defined in makepkg.conf
  export CFLAGS="-m32 ${CFLAGS}"
  export CXXFLAGS="-m32 ${CXXFLAGS}"
  export LDFLAGS="-m32 ${LDFLAGS}"
  export PKG_CONFIG_PATH='/usr/lib32/pkgconfig'
#  export PKG_CONFIG_LIBDIR='/usr/lib32/pkgconfig'

  cd "bluez-${pkgver}"
  ./configure \
    --build=i686-pc-linux-gnu \
    --prefix=/usr \
    --mandir=/usr/share/man \
    --sysconfdir=/etc \
    --localstatedir=/var \
    --libdir=/usr/lib32 \
    --libexecdir=/usr/lib32 \
    --with-dbusconfdir=/usr/share/dbus-1 \
    --disable-monitor \
    --disable-cups \
    --disable-obex \
    --disable-client \
    --disable-tools \
    --disable-systemd \
    --disable-datafiles \
    --enable-sixaxis \
    --enable-library # this is deprecated
  make
}

check() {
  cd "bluez-${pkgver}"
  make check
}

package_lib32-bluez-libs() {
  pkgdesc="Deprecated libraries for the bluetooth protocol stack (32-bit)"
  depends=('bluez-libs' 'lib32-glibc')

  cd "bluez-${pkgver}"
  make DESTDIR=${pkgdir} \
    install-libLTLIBRARIES \
    install-pkgconfigDATA
}

package_lib32-bluez-plugins() {
  pkgdesc="bluez plugins (PS3 Sixaxis controller) (32-bit)"
  depends=('lib32-systemd')

  cd "bluez-${pkgver}"
  make DESTDIR=${pkgdir} \
       install-pluginLTLIBRARIES
}
