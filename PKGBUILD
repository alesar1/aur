# Maintainer: João Vitor S. Anjos <jvanjos at protonmail dot com>
# Contributor: Jeff Parent <jecxjo@sdf.lonestar.org>

pkgname=openrdate
pkgver=1.10.1
pkgrel=1
pkgdesc="Set the system's date from a remote host"
arch=('i686' 'x86_64' 'arm' 'armv6h')
url="https://github.com/resurrecting-open-source-projects/openrdate"
license=('BSD')
depends=('libbsd')
makedepends=('autoconf' 'automake')
conflicts=('rdate')
source=("${pkgname}-${pkgver}.tar.gz::${url}/archive/refs/tags/${pkgver}.tar.gz")
sha256sums=('ee2fc314fcc46d0fe489b3723d5118a36d89181d958dd19735fe07703cc4f7ae')

build() {
  cd ${pkgname}-${pkgver}
  ./autogen.sh
  ./configure --prefix=/usr --mandir=/usr/share/man
  make
}

package() {
  cd ${pkgname}-${pkgver}
  make DESTDIR="$pkgdir" install
  install -Dm 644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
  install -Dm 644 README.md ChangeLog HISTORY -t "${pkgdir}/usr/share/doc/${pkgname}"
}

# vim: ts=2 sw=2 et:
