# Maintainer: Dimitris Kiziridis <ragouel at outlook dot com>

pkgname=devdash-bin
pkgver=0.4.0
pkgrel=1
pkgdesc="Highly Configurable Terminal Dashboard for Developers"
arch=('x86_64')
url="https://thedevdash.com"
license=('Apache')
provides=('devdash')
conflicts=('devdash')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/Phantas0s/devdash/releases/download/v${pkgver}/devdash_${pkgver}_Linux_x86_64.tar.gz")
sha512sums=('099048fdefc3fca66d9a969086667d67024a39f56353cca49c595ee5e9f7461d1a8238e07ad9b0dea5516c07477f6ada862840f32ad18a527420a5c113720d70')

package(){
  install -Dm755 devdash -t "${pkgdir}/usr/bin"
  install -Dm644 README.md -t "${pkgdir}/usr/share/doc/${pkgname}"
}
