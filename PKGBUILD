# Maintainer: Jake <aur@ja-ke.tech>
# Contributor: Sergej Pupykin <pupykin.s+arch@gmail.com>
# Contributor: Chris Giles <Chris.G.27 (at) Gmail.com>

pkgname=q4wine
pkgver=1.3.9
pkgrel=1
pkgdesc="A Qt5 GUI for Wine"
arch=("x86_64")
url="http://sourceforge.net/projects/${pkgname}/"
license=("GPL3")
depends=("qt5-base" "wine" "sqlite3" "which" "icoutils")
makedepends=("cmake" "qt5-tools" "qt5-svg")
optdepends=("winetricks" "fuseiso")
options=('!emptydirs')
source=("https://github.com/brezerk/q4wine/archive/v${pkgver}.tar.gz")
sha256sums=('70ffe5e4d35ca0d2557f61576e4abb714da82d79d01cf86c7d5b9a769dafacf4')
            
build() {
  cd "$srcdir"/${pkgname}-${pkgver/_/-}
  cmake \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DLIBS_ENTRY_PATH=/usr/lib/$pkgname \
    -DQT5=ON \
    .
  make
}

package() {
  cd "$srcdir"/${pkgname}-${pkgver/_/-}
  make DESTDIR="$pkgdir" install
}
