# Maintainer: chn <g897331845@gmail.com>

pkgname=cista
pkgver=0.9
pkgrel=1
pkgdesc='Simple C++ Serialization & Reflection.'
arch=('any')
url='https://github.com/felixguendling/cista'
license=('MIT')
source=(https://github.com/felixguendling/cista/releases/download/v$pkgver/cista.h)
sha512sums=('4ae8200eb94d686809332e39f8d7f7e198c9818d4ed10b2cfeeaa4cab1e489fa6797c42317e43fd5cce28c347b461a12b6956b6f59f0cff26d70cb6f16ad64d2')
package() {
    mkdir -p "$pkgdir/usr/include"
    cp cista.h "$pkgdir/usr/include"
}
