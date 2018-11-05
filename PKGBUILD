# Maintainer: Netflix, Inc. <netflixoss@netflix.com>
# Contributor: Mikhail f. Shiryaev <mr<dot>felixoid<at>gmail<dot>com>

pkgname=dynomite
pkgver=0.5.9
upstream_pkgrel=5_MuslCompatiblity
pkgrel=3
pkgdesc="Dynomite is a thin, distributed dynamo layer for different storage engines and protocols. Stable version."
arch=('i686' 'x86_64')
url="https://github.com/Netflix/dynomite"
license=('Apache-2.0')
makedepends=( 'openssl-1.0' )
conflicts=('dynomite-git')
provides=('dynomite')
source=(
  "https://github.com/Netflix/${pkgname}/archive/v${pkgver}-${upstream_pkgrel}.tar.gz"
  "0001-sysconfdir.patch"
)
md5sums=(
  '25f14fb09ef6aac6509ec01ffd942f41'
  '5f8f09361a6afb6d59726de58f86b6fb'
)

build() {
  cd "${srcdir}/${pkgname}-${pkgver}-${upstream_pkgrel}"
  patch -p1 < ../0001-sysconfdir.patch

  export CFLAGS=" -I/usr/include/openssl-1.0"
  export LDFLAGS=" -L/usr/lib/openssl-1.0 -lssl -lcrypto"
  autoreconf -fvi
  ./configure --prefix=/usr \
    --sbindir='${exec_prefix}/bin' \
    --sysconfdir=/etc/dynomite \
    --datarootdir='${exec_prefix}/share'
  make
}

check() {
  cd "${srcdir}/${pkgname}-${pkgver}-${upstream_pkgrel}"
  HOME="${srcdir}/testhome" make -k check
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}-${upstream_pkgrel}"

  make DESTDIR="${pkgdir}" install
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
