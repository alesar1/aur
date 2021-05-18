# Maintainer: Nico <d3sox at protonmail dot com>
pkgname=soundux
pkgver=0.2.4
pkgrel=1
pkgdesc="A cross-platform soundboard - stable version"
arch=('any')
url="https://github.com/Soundux/Soundux"
license=('GPL3')
depends=('pulseaudio' 'webkit2gtk' 'libwnck3' 'libappindicator-gtk3' 'lsb-release')
optdepends=('youtube-dl: downloader integration' 'ffmpeg: downloader integration' 'pipewire: pipewire backend')
makedepends=('git' 'cmake' 'ninja' 'pipewire')
source=("https://github.com/Soundux/Soundux/releases/download/$pkgver/soundux-$pkgver.tar.gz")
sha256sums=('e48f2482eb951e528cc6089fe41491c70284a6c3f24f4ba08ab740021fd17905')

build() {
  cd "${srcdir}/Soundux"
  mkdir -p build
  cd build
  cmake -GNinja -DCMAKE_BUILD_TYPE=Release ..
  ninja
}

package() {
  cd "${srcdir}/Soundux/build"
  DESTDIR="$pkgdir/" ninja install
  # install binary symlink
  mkdir -p "${pkgdir}/usr/bin/"
  ln -sf /opt/soundux/soundux "${pkgdir}/usr/bin/soundux"
  
  # install doc
  install -Dm 644 -t "${pkgdir}/usr/share/doc/${pkgname}" "${srcdir}/Soundux/README.md"
  # install license
  install -Dm 644 -t "${pkgdir}/usr/share/licenses/${pkgname}" "${srcdir}/Soundux/LICENSE"
}
