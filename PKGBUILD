# Maintainer: WorMzy Tykashi <wormzy.tykashi@gmail.com>

pkgname=avp
pkgver=20170505_a1
_dirname=20170505
pkgrel=1
pkgdesc="Alien Versus Predator Gold engine"
arch=(i686 x86_64)
url="https://www.icculus.org/avp"
license=('custom')
depends=('sdl' 'libgl' 'openal')
makedepends=('cmake' 'glu' 'mesa')
optdepends=('avp-data')
install='avp.install'
source=("${url}/files/${pkgname}-${pkgver/_/-}.tar.gz"
        "avp")
sha512sums=('d67cf0620c6eec42dd9dba5ad7f71687ba40d74ecef9488ea44878afec22c5145aaaa9cf5e0ef26c3009383d1a226d0f8d0fa81aec93b217ae222a37ddc9737f'
            'b9d2923123e6ecc8703ed15e7df170ec5a8607d444800434887ec540aba51b7dc5e39f56b511584560ffab7b9c04db7e24d820b6f1fab30f8b95f332a4a176b1')

prepare() {
  mkdir -p ${pkgname}-${_dirname}/build
}

build() {
  cd ${pkgname}-${_dirname}/build

  cmake -DCMAKE_BUILD_TYPE="Release" -DOpenGL_GL_PREFERENCE="GLVND" -DSDL_TYPE="SDL" ..
  make
}

package() {
  cd ${pkgname}-${_dirname}/build

  # install binary
  install -D -m755 avp "${pkgdir}/opt/avp/avp"
  install -D -m755 "${srcdir}/avp" "${pkgdir}/usr/bin/avp"

  # install readme
  install -D -m644 ../README "${pkgdir}/opt/${pkgname}/README"

  # install license
  install -D -m644 ../LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
