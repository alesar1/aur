# Maintainer: Bas Timmer <basjetimmer at yahoo dot com >

_pkgname=okular
pkgname=okular-no-purpose
pkgver=19.08.2
pkgrel=1
pkgdesc='Okular, a document viewer, without the dependency on purpose. This disables the share menu'
arch=(x86_64)
url="https://kde.org/applications/graphics/okular/"
license=(GPL LGPL FDL)
groups=(kde-applications kdegraphics)
depends=(djvulibre libspectre libkexiv2 poppler-qt5 qca-qt5 kpty kactivities threadweaver kjs kparts discount phonon-qt5)
makedepends=(extra-cmake-modules ebook-tools kdegraphics-mobipocket kdoctools khtml chmlib)
optdepends=('ebook-tools: mobi and epub support'
            'kdegraphics-mobipocket: mobi support' 'kirigami2: mobile UI' 'libzip: CHM support'
            'khtml: CHM support' 'chmlib: CHM support' 'calligra: ODT and ODP support'
            'unrar: Comic Book Archive support' 'unarchiver: Comic Book Archive support (alternative)')
conflicts=(kdegraphics-okular)
conflicts=(okular)
replaces=(kdegraphics-okular)
replaces=(okular)
provides=(okular)
source=("https://download.kde.org/stable/applications/$pkgver/src/$_pkgname-$pkgver.tar.xz"{,.sig})
sha256sums=('ff3d2eac444a110a611add71c30b0556085f5aaccdd821a80bd070a646c9f6b3'
            'SKIP')
validpgpkeys=(CA262C6C83DE4D2FB28A332A3A6A4DB839EAA6D7  # Albert Astals Cid <aacid@kde.org>
              F23275E4BF10AFC1DF6914A6DBD2CE893E2D1C87) # Christoph Feck <cfeck@kde.org>

prepare() {
  mkdir -p build
}

build() {
  cd build
  cmake ../$_pkgname-$pkgver \
    -DCMAKE_BUILD_TYPE=Release \
    -DKDEExperimentalPurpose_FOUND=OFF \
    -DBUILD_TESTING=OFF
  make
}

package() {
  cd build
  make DESTDIR="$pkgdir" install
}
