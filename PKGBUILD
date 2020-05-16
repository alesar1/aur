# Maintainer: Felix Yan <felixonmars@archlinux.org>
# Maintainer: Antonio Rojas <arojas@archlinux.org>
# Contributor: Andrea Scarpino <andrea@archlinux.org>

_pkgname=gwenview
pkgname=gwenview-no-purpose
pkgver=20.04.1
pkgrel=1
pkgdesc="A fast and easy to use image viewer, without the dependency on purpose. This disables the share menu"
url='https://kde.org/applications/graphics/gwenview/'
arch=(x86_64)
license=(GPL LGPL FDL)
groups=(kde-applications kdegraphics)
depends=(kactivities baloo libkipi libkdcraw kparts kitemmodels cfitsio phonon-qt5)
optdepends=('qt5-imageformats: support for tiff, webp, and more image formats'
            'kimageformats: support for dds, xcf, exr, psd, and more image formats'
            'kipi-plugins: export to various online services'
            'kamera: import pictures from gphoto2 cameras')
conflicts=('gwenview')
replaces=('gwenview')
makedepends=(extra-cmake-modules kdoctools)
source=("https://download.kde.org/stable/release-service/$pkgver/src/$_pkgname-$pkgver.tar.xz"{,.sig})
sha256sums=('80c2103f8ec8333b8ab08949dea8c5b670a4e3f73309fbaf5172f7e8371f13e1'
            'SKIP')
validpgpkeys=(CA262C6C83DE4D2FB28A332A3A6A4DB839EAA6D7  # Albert Astals Cid <aacid@kde.org>
              F23275E4BF10AFC1DF6914A6DBD2CE893E2D1C87) # Christoph Feck <cfeck@kde.org>

prepare() {
  mkdir -p build
}

build() {
  cd build
  cmake ../$_pkgname-$pkgver \
    -DGWENVIEW_SEMANTICINFO_BACKEND="Baloo" \
    -DKDEExperimentalPurpose_FOUND=OFF \
    -DBUILD_TESTING=OFF
  make
}

package() {
  cd build
  make DESTDIR="$pkgdir" install
}
