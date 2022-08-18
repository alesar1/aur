# Maintainer: Cpt_Huntsman <other.plan1133@fastmail.com>

pkgname=yakuake-alca7raz
_pkgname=yakuake
pkgver=22.08.0
pkgrel=1
pkgdesc="A drop-down terminal emulator based on KDE konsole technology"
arch=(x86_64)
url="https://apps.kde.org/yakuake/"
license=(GPL)
provides=(yakuake)
conflicts=(yakuake)
depends=(konsole kwayland hicolor-icon-theme)
makedepends=(git extra-cmake-modules)
source=("https://download.kde.org/stable/release-service/$pkgver/src/$_pkgname-$pkgver.tar.xz"
        "alca7raz.patch")
sha256sums=('deec2a5483092a1c4cb6c90be632f7399f3f3769f5dadb750017b095ac152ff1'
            'dc0ffbc6ed3c4f68e59bc1bf074d97e39e9323a95e0275e584fec9dad82312f1')

prepare() {
    cd "$srcdir"/yakuake-$pkgver
    patch -p1 < ../alca7raz.patch
}
              
build() {
  cmake -B build -S yakuake-$pkgver \
    -DBUILD_TESTING=OFF
  cmake --build build
}

package() {
  DESTDIR="$pkgdir" cmake --install build
}
