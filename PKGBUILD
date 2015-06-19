# Maintainer: Jack L. Frost <fbt@fleshless.org>
# % Trigger: 1434721091 %
# vim: ft=sh syn=sh ts=2 et

pkgdesc="Standalone systemd libs (including -compat)"
pkgname=( 'libsystemd-standalone' 'libsystemd-login' 'libsystemd-journal' 'libsystemd-id128' 'libsystemd-daemon' 'libsystemd-udev' )
pkgver=219
pkgrel=2
arch=('i686' 'x86_64')
url="http://www.freedesktop.org/wiki/Software/systemd"
license=('GPL2' 'LGPL2.1' 'MIT')
makedepends=('acl' 'cryptsetup' 'docbook-xsl' 'gobject-introspection' 'gperf'
             'gtk-doc' 'intltool' 'kmod' 'libcap' 'libgcrypt'  'libmicrohttpd' 'libxslt'
             'linux-api-headers' 'pam' 'python' 'python-lxml' 'quota-tools' 'xz')
options=('strip')
source=("http://www.freedesktop.org/software/systemd/systemd-$pkgver.tar.xz")

build() {
  cd "systemd-$pkgver"

  ./configure --enable-compat-libs

  make
}

package_libsystemd-standalone() {
  install='libsystemd.install'
  provides=( 'libsystemd.so' 'libsystemd' )

  cd "$srcdir/systemd-${pkgver}"
  install -Dm644 .libs/libsystemd.so.0.6.0 "${pkgdir}/usr/lib/libsystemd.so.0.6.0"
  ln -s libsystemd.so.0.6.0 "${pkgdir}/usr/lib/libsystemd.so"

  install -Dm644 src/systemd/_sd-common.h "${pkgdir}/usr/include/systemd/_sd-common.h"
  install -Dm644 src/systemd/sd-messages.h "${pkgdir}/usr/include/systemd/sd-messages.h"
  install -Dm644 src/libsystemd/libsystemd.pc "${pkgdir}/usr/lib/pkgconfig/libsystemd.pc"
}

package_libsystemd-login() {
  install='libsystemd.install'
  provides=( 'libsystemd-login.so' )

  cd "$srcdir/systemd-${pkgver}"
  install -Dm644 .libs/libsystemd-login.so.0.9.3 "${pkgdir}/usr/lib/libsystemd-login.so.0.9.3"
  ln -s libsystemd-login.so.0.9.3  "${pkgdir}/usr/lib/libsystemd-login.so"

  install -Dm644 src/systemd/sd-login.h "${pkgdir}/usr/include/systemd/sd-login.h"
  install -Dm644 src/compat-libs/libsystemd-login.pc "${pkgdir}/usr/lib/pkgconfig/libsystemd-login.pc"
}

package_libsystemd-journal() {
  install='libsystemd.install'
  provides=( 'libsystemd-journal.so' )

  cd "$srcdir/systemd-${pkgver}"
  install -Dm644 .libs/libsystemd-journal.so.0.11.5 "${pkgdir}/usr/lib/libsystemd-journal.so.0.11.5"
  ln -s libsystemd-journal.so.0.11.5 "${pkgdir}/usr/lib/libsystemd-journal.so"

  install -Dm644 src/systemd/sd-journal.h "${pkgdir}/usr/include/systemd/sd-journal.h"
  install -Dm644 src/compat-libs/libsystemd-journal.pc "${pkgdir}/usr/lib/pkgconfig/libsystemd-journal.pc"
}

package_libsystemd-id128() {
  install='libsystemd.install'
  provides=( 'libsystemd-id128.so' )

  cd "$srcdir/systemd-${pkgver}"
  install -Dm644 .libs/libsystemd-id128.so.0.0.28 "${pkgdir}/usr/lib/libsystemd-id128.so.0.0.28"
  ln -s libsystemd-id128.so.0.0.28 "${pkgdir}/usr/lib/libsystemd-id128.so"

  install -Dm644 src/systemd/sd-id128.h "${pkgdir}/usr/include/systemd/sd-id128.h"
  install -Dm644 src/compat-libs/libsystemd-id128.pc "${pkgdir}/usr/lib/pkgconfig/libsystemd-id128.pc"
}

package_libsystemd-daemon() {
  install='libsystemd.install'
  provides=( 'libsystemd-daemon.so' )

  cd "$srcdir/systemd-${pkgver}"
  install -Dm644 .libs/libsystemd-daemon.so.0.0.12 "${pkgdir}/usr/lib/libsystemd-daemon.so.0.0.12"
  ln -s libsystemd-daemon.so.0.0.12 "${pkgdir}/usr/lib/libsystemd-daemon.so"

  install -Dm644 src/systemd/sd-daemon.h "${pkgdir}/usr/include/systemd/sd-daemon.h"
  install -Dm644 src/compat-libs/libsystemd-daemon.pc "${pkgdir}/usr/lib/pkgconfig/libsystemd-daemon.pc"
}

package_libsystemd-udev() {
  install='libsystemd.install'
  provides=( 'libgudev-1.0.so' 'libudev.so' 'libudev' )

  cd "$srcdir/systemd-${pkgver}"
  install -Dm644 .libs/libudev.so.1.6.2 "${pkgdir}/usr/lib/libudev.so.1.6.2"
  ln -s libgudev-1.0.so.0.2.0 "${pkgdir}/usr/lib/libgudev-1.0.so"
  ln -s libudev.so.1.6.2 "${pkgdir}/usr/lib/libudev.so"

  install -Dm644 src/libudev/libudev.pc "${pkgdir}/usr/lib/pkgconfig/libudev.pc"
  install -Dm644 src/libudev/libudev.h "${pkgdir}/usr/include/libudev.h"

  # gudev
  install -Dm644 .libs/libgudev-1.0.so.0.2.0 "${pkgdir}/usr/lib/libgudev-1.0.so.0.2.0"
  install -Dm644 src/gudev/gudev-1.0.pc "${pkgdir}/usr/lib/pkgconfig/gudev-1.0.pc"
  for i in src/gudev/*.h; do
    install -Dm644 "$i" "${pkgdir}/usr/include/gudev-1.0/gudev/$i"
  done
}

sha1sums=('307d1c3e48b3bca1039cb66df2d7def074efe2ef')
