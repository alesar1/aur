# $Id: PKGBUILD 153157 2015-12-13 10:05:37Z lcarlier $
# Maintainer : Ionut Biru <ibiru@archlinux.org>
# x32 Maintainer: Fantix King <fantix.king at gmail.com>

pkgname=libx32-libdbus
_pkgbasename=libdbus
pkgver=1.10.4
pkgrel=1.1
pkgdesc="DBus library (x32 ABI)"
arch=('x86_64')
url="http://www.freedesktop.org/Software/dbus"
license=('GPL' 'custom')
depends=('libx32-glibc' 'libx32-expat' 'libdbus')
makedepends=('gcc-multilib-x32' 'libx32-libx11')
provides=('libx32-dbus-core' 'libx32-dbus')
conflicts=('libx32-dbus-core' 'libx32-dbus')
replaces=('libx32-dbus-core' 'libx32-dbus')
source=(http://dbus.freedesktop.org/releases/dbus/dbus-${pkgver}.tar.gz{,.asc})
md5sums=('27b8e99ffad603b8acfa25201c6e3d5c'
         'SKIP')
validpgpkeys=('DA98F25C0871C49A59EAFF2C4DE8FF2A63C7CC90'  # Simon McVittie <simon.mcvittie@collabora.co.uk>
              '3C8672A0F49637FE064AC30F52A43A1E4B77B059') # Simon McVittie <simon.mcvittie@collabora.co.uk>

build() {
    export CC="gcc -mx32"
    export CXX="g++ -mx32"
    export PKG_CONFIG_PATH="/usr/libx32/pkgconfig"

    cd "${srcdir}/dbus-${pkgver}"

    ./configure --prefix=/usr --sysconfdir=/etc --localstatedir=/var --libdir=/usr/libx32 \
        --libexecdir=/usr/lib/dbus-1.0 --with-dbus-user=81 \
        --with-system-pid-file=/run/dbus.pid \
        --with-console-auth-dir=/run/console/ \
        --enable-inotify \
        --disable-verbose-mode --disable-static \
        --disable-tests --disable-asserts --disable-systemd

    make
}

package() {
    cd "${srcdir}/dbus-${pkgver}"
    make DESTDIR=${pkgdir} install

    rm -rf "${pkgdir}"/usr/{bin,include,lib,share}
    rm -rf "${pkgdir}"/{etc,var}

    mkdir -p "${pkgdir}/usr/share/licenses"
    ln -s ${_pkgbasename} "${pkgdir}/usr/share/licenses/${pkgname}"
}
