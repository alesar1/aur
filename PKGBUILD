# Maintainer: Alexey Rochev <equeim@gmail.com>

pkgname='tremotesf'
pkgver=1.5.0
pkgrel=1
pkgdesc='Remote GUI for transmission-daemon'
_reponame='tremotesf2'
url="https://github.com/equeim/${_reponame}"
arch=('x86_64')
license=('GPL3')
depends=('qt5-base' 'kwidgetsaddons' 'hicolor-icon-theme')
makedepends=('qt5-tools' 'cmake' 'ninja')
source=("${url}/archive/${pkgver}.tar.gz")
sha256sums=('6c3402fc97685088ed0c8735feb25c075649f624ab64993872b8191b9f1de3c9')

prepare() {
    mkdir -p build
}

build() {
    cd build
    cmake .. ../${_reponame}-${pkgver} \
        -G Ninja \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DCMAKE_BUILD_TYPE=Release
    ninja
}

package() {
    cd build
    DESTDIR="$pkgdir" ninja install
}
