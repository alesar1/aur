# Maintainer: Clarence <xjh.azzbcc@gmail.com>
_pkgname=sofia-sip
pkgname=(${_pkgname}-fs ${_pkgname}-docs)
pkgver=1.13.4
pkgrel=1
pkgdesc="An open-source SIP User-Agent library (FreeSWITCH version)"
arch=('x86_64')
url="https://github.com/freeswitch/sofia-sip"
license=('LGPL')
source=("${_pkgname}-${pkgver}.tar.gz::https://github.com/freeswitch/$_pkgname/archive/v$pkgver.tar.gz")
sha256sums=('3f3f7b7b26cc150dae7e1cae95a0fe2c65905311fe143145b4bcda8f97d7ed4e')

build() {
  cd "$_pkgname-$pkgver"
  ./autogen.sh
  ./configure --prefix=/usr --disable-static
  make
}

package_sofia-sip-fs() {
  depends=('glib2' 'openssl' 'gawk')
  optdepends=('sofia-sip-docs: Documentation')
  provides=('sofia-sip')
  conflicts=('sofia-sip')

  cd "$_pkgname-$pkgver"
  make DESTDIR="$pkgdir" install
}

package_sofia-sip-docs() {
  pkgdesc="An open-source SIP User-Agent library documentation (FreeSWITCH version)"

  cd "$_pkgname-$pkgver"

  make doxygen
  install -dm755 "${pkgdir}/usr/share/doc/$_pkgname"
  cp -frv "libsofia-sip-ua/docs/html" "${pkgdir}/usr/share/doc/$_pkgname"
  cp -frv "libsofia-sip-ua-glib/docs/html" "${pkgdir}/usr/share/doc/$_pkgname"
  find "${pkgdir}/usr/share/doc/$_pkgname" -name "*.map" | xargs rm -fv
}
