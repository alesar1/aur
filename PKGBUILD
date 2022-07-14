# Maintainer: Tiago Cardoso <tbcardoso at outlook dot com>

pkgname=evans-bin
pkgver=0.10.7
pkgrel=1
pkgdesc='More expressive universal gRPC client'
arch=('x86_64')
url='https://github.com/ktr0731/evans'
license=('MIT')
provides=('evans')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/ktr0731/evans/releases/download/v${pkgver}/evans_linux_amd64.tar.gz"
        "${pkgname}-${pkgver}-LICENSE::https://raw.githubusercontent.com/ktr0731/evans/v${pkgver}/LICENSE")
sha256sums=('ffbc9508baa6af0f3c129d5b5f034c36afbbfc988e4486c8b43e668c793bffb8'
            '1456fe7612f76bde2b443157a0755e31c31ef16f032e74328e64883a3402e46f')

package() {
  install -Dm0644 "${srcdir}"/"${pkgname}-${pkgver}-LICENSE" "${pkgdir}"/usr/share/licenses/evans/LICENSE
  install -Dm0755 "${srcdir}"/evans "${pkgdir}"/usr/bin/evans
}
