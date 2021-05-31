# Contributor: Michał Przybyś <michal@przybys.eu>
# Maintainer: Thomas Bork <sudoBash418@gmail.com>
pkgname=strawberry-qt5
pkgver=0.9.1
pkgrel=1
pkgdesc="A music player aimed at audio enthusiasts and music collectors (Qt5 version)"
arch=(x86_64)
url="https://strawberrymusicplayer.org/"
license=(GPL3)

depends=(chromaprint
         protobuf
         gst-plugins-base
         gst-plugins-good
         qt5-x11extras
         udisks2
         libcdio
         libgpod
         libmtp
         fftw)
makedepends=(cmake
             boost
             qt5-tools)
optdepends=('gst-libav: additional codecs'
            'gst-plugins-bad: additional codecs'
            'gst-plugins-ugly: additional codecs')

provides=(strawberry)
conflicts=(strawberry)

source=("https://github.com/jonaski/strawberry/releases/download/${pkgver}/strawberry-${pkgver}.tar.xz")
sha256sums=(b71da4cec9cc7b60961bbb82378d15fb79798e6b880852414ce05276084047a0)

build() {
  cmake -B build -S "strawberry-${pkgver}" \
    -DCMAKE_INSTALL_PREFIX=/usr
  cmake --build build
}

package() {
  DESTDIR="${pkgdir}" cmake --install build
}
