# Maintainer: Morteza NourelahiAlamdari <m@0t1.me>

pkgname=typedb-server
_pkgname=typedb
pkgver=2.2.0
pkgrel=2
pkgdesc="TypeDB: a strongly-typed database"
arch=('i686' 'x86_64')
url="https://github.com/vaticle/${pkgname}"
license=('AGPL-3.0')
makedepends=()
depends=('jre-openjdk')
source=("https://github.com/vaticle/${_pkgname}/releases/download/${pkgver}/${pkgname}-linux-${pkgver}.tar.gz")
sha256sums=('4386fd552a940cdd2365eb7fb7a9c36ad3f0b18e8e8001735c27afa90943b49d')
_dirname="${pkgname}-linux-${pkgver}"

package() {
  mkdir -p "${pkgdir}/opt/typedb-server"
  for item in LICENSE server typedb; do
    cp -r "${srcdir}/${_dirname}/${item}" "${pkgdir}/opt/typedb-server/"
  done
  install -Dm755 "${srcdir}/${_dirname}/typedb" "$pkgdir/usr/bin/typedb-server"
  install -Dvm644 "${srcdir}/${_dirname}/LICENSE" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
