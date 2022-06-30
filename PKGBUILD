# Maintainer: pandada8 <pandada8@gmail.com>
pkgname=jsonnet-language-server-bin
pkgver=0.7.2
pkgrel=1
pkgdesc='A Language Server Protocol (LSP) server for Jsonnet'
arch=('x86_64')
url='https://github.com/grafana/jsonnet-language-server'
license=('AGPLv3')
provides=('jsonnet-language-server')
conflicts=('jsonnet-language-server')

source=(
  "${pkgname}-${pkgver}::https://github.com/grafana/jsonnet-language-server/releases/download/v${pkgver}/jsonnet-language-server_${pkgver}_linux_amd64"
)
sha512sums=('2b788401fb350f04e653a0f20a6b1d1e69bae9510071155158be69d5379cb0320856b78dab9d63915e07e65862aabdb821213966b3229cd18343f942e8cc76a8')

package() {
  install -D "${srcdir}/${pkgname}-${pkgver}" "${pkgdir}/usr/bin/jsonnet-language-server"
}
