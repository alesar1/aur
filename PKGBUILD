# Maintainer: Sasha Romijn <arch at mxsasha.eu>
pkgname=rpki-client
pkgver="6.8p1"
pkgrel=1
pkgdesc="Implementation of RPKI for Relying Parties to facilitate ROA validation"
arch=('x86_64' 'aarch64')
url="https://github.com/rpki-client/rpki-client-portable"
license=('ISC')
source=("${pkgver}.tar.gz::https://github.com/rpki-client/rpki-client-portable/archive/$pkgver.tar.gz"
	"sysusers-rpki-client.conf"
	"tmpfiles-rpki-client.conf")
sha512sums=('bc7c7ed4fd573316e5732a5b0089a4e4d0d4203b13d4a2496386c78019e26589ca61f0fb3b5d8e4725ebc52b68fc77449fadfa2ebfeca566e3c7e0c706ab4105'
            '13603ff4fe582a07984dd8a2a0704c8795f5d604a9b2afee43278169d9e187300a349d2629bea0d64f0ff6a3d6347ad2a9d9010ae96d440b07ec1a1f869c0891'
            'd51b0464399d4a36af4353dd99492eff6a99d1bcb6bd95b8602c8c0c23af18e278c41b9a081b84bbd97e84e9f18917e1e0d70a3ff897bd3e261796b292f72826')
install="rpki-client.install"
depends=('glibc' 'rsync' 'openssl')
makedepends=('git')

build() {
  cd "rpki-client-portable-$pkgver"

  ./autogen.sh
  ./configure --prefix=/usr --sbindir=/usr/bin --sysconfdir=/etc --localstatedir=/var --with-user=rpki-client
  make
}

package() {
  cd "rpki-client-portable-$pkgver"

  make DESTDIR="$pkgdir" install

  # /var directories should not be in package,
  # they will be installed by systemd
  rm -rf "${pkgdir}/var"

  install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/$pkgname/LICENSE"
  install -D -m644 README.md "${pkgdir}/usr/share/doc/$pkgname/README.md"
  install -D -m644 "${srcdir}/sysusers-rpki-client.conf" "${pkgdir}/usr/lib/sysusers.d/rpki-client.conf"
  install -D -m644 "${srcdir}/tmpfiles-rpki-client.conf" "${pkgdir}/usr/lib/tmpfiles.d/rpki-client.conf"
}
