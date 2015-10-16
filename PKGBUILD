# Maintainer: Gustavo Alvarez <sl1pkn07@gmail.com>

_plug=knlmeanscl
pkgname=vapoursynth-plugin-${_plug}
pkgver=0.7.1
pkgrel=1
pkgdesc="Plugin for Vapoursynth: ${_plug}"
arch=('i686' 'x86_64')
url='http://forum.doom9.org/showthread.php?t=171379'
license=('GPL')
depends=('vapoursynth' 'libcl')
makedepends=('git' 'opencl-headers')
source=("https://github.com/Khanattila/KNLMeansCL/archive/v${pkgver}.tar.gz")
sha1sums=('84cb50b48771876dc5773177d6d4c29057354d1a')

# prepare() {
#   chmod +x "KNLMeansCL-${pkgver}/configure"
# }

build() {
  cd "KNLMeansCL-${pkgver}"
  ./configure --install=/usr/lib/vapoursynth \
              --extra-cxxflags="${CXXFLAGS} ${CPPFLAGS}" \
              --extra-ldflags="${LDFLAGS}"
  make
}

package(){
  make -C "KNLMeansCL-${pkgver}" DESTDIR="${pkgdir}" install
  install -Dm644 "KNLMeansCL-${pkgver}/README.md" "${pkgdir}/usr/share/doc/vapoursynth/plugins/${_plug}/README.md"
}
