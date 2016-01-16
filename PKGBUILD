# Maintainer: Stanislaw Datskevich <me a nek0 net>
# Contributor: Thomas Bächler <thomas@archlinux.org>

pkgname=openvpn-pkcs11
pkgver=2.3.10
pkgrel=0
pkgdesc="An easy-to-use, robust, and highly configurable VPN (Virtual Private Network) with smartcard support"
arch=(i686 x86_64)
url="http://openvpn.net/index.php/open-source.html"
depends=('openssl' 'lzo' 'iproute2' 'pkcs11-helper')
license=('custom')
install=openvpn.install
source=(http://swupdate.openvpn.net/community/releases/openvpn-${pkgver}.tar.gz)
sha256sums=('f8b0b5b92e35bbca1db1a7e6b49e04639e45634e9accd460459b40b2c99ec8f6')

build() {
  cd "${srcdir}"/openvpn-$pkgver
  CFLAGS="$CFLAGS -DPLUGIN_LIBDIR=\\\"/usr/lib/openvpn\\\"" ./configure \
    --prefix=/usr \
    --sbindir=/usr/bin \
    --enable-password-save \
    --mandir=/usr/share/man \
    --enable-iproute2 \
    --enable-pkcs11
  make
}

package() {
  cd "${srcdir}"/openvpn-$pkgver
  # Install openvpn
  make DESTDIR="${pkgdir}" install
  install -d -m755 "${pkgdir}"/etc/openvpn
  # Install examples
  install -d -m755 "${pkgdir}"/usr/share/openvpn
  cp -r sample/sample-config-files "${pkgdir}"/usr/share/openvpn/examples
  # Install license
  install -d -m755 "${pkgdir}"/usr/share/licenses/${pkgname}/
  ln -sf /usr/share/doc/${pkgname}/{COPYING,COPYRIGHT.GPL} "${pkgdir}"/usr/share/licenses/${pkgname}/
  # Install contrib
  install -d -m755 "${pkgdir}"/usr/share/openvpn/contrib
  cp -r contrib "${pkgdir}"/usr/share/openvpn
}

