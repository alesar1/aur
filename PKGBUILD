# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=clight-gui-git
pkgver=r91.079bd99
pkgrel=1
pkgdesc="Qt GUI for Clight"
arch=('x86_64')
url="https://github.com/nullobsi/clight-gui"
license=('GPL3')
depends=('clight' 'qt6-charts')
makedepends=('git' 'clang' 'cmake' 'qt6-tools')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=('git+https://github.com/nullobsi/clight-gui.git'
        "${pkgname%-git}.desktop")
sha256sums=('SKIP'
            '73affb7c39501d2ade8f517b07f8a2ea6e229dab0f9c28b6bd6c25b65b5f9ec2')

pkgver() {
  cd "$srcdir/${pkgname%-git}"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  cd "$srcdir/${pkgname%-git}"
  sed -i 's/QT_VERSION 5/QT_VERSION 6/g' src/CMakeLists.txt
}

build() {
  cmake -B build -S "${pkgname%-git}/src" \
    -DCMAKE_BUILD_TYPE=None \
    -DCMAKE_PREFIX_PATH=/usr/lib/cmake/Qt6 \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DGENERATE_TRANSLATIONS=ON
  make -C build
}

package() {
  make -C build DESTDIR="$pkgdir" install

  install -Dm644 "${pkgname%-git}.desktop" -t "$pkgdir/usr/share/applications"
}
