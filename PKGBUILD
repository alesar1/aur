# Maintainer: Joffrey <j-off@live.fr>
# Contributor: eolianoe <eolianoe [at] gmail [DoT] com>
# Contributor: localizator <localizator@ukr.net>
# Contributor: Edvinas Valatka <edacval@gmail.com>

pkgname=seafile-client
pkgver=8.0.8
pkgrel=1
pkgdesc='GUI client for synchronizing your local files with seafile server'
arch=('i686' 'x86_64' 'armv7h' 'armv6h' 'aarch64')
url="https://github.com/haiwen/$pkgname"
license=('Apache')
depends=(
    "seafile>=$pkgver"
    'qt6-base'
    'qt6-webengine'
    'qt6-5compat'
)
optdepends=('gtk-update-icon-cache')
makedepends=('cmake' 'qt6-tools')
source=(
    "$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz"
    'fix_build_with_QT6.diff'
)
sha256sums=(
    '4490128f7f8a1691d43fb9d3152b7a842af3542332b2a43e346f1c62ab2c37bc'
    '5fc54daff54d3ea4e263aea6c23b8c812fe5287e487a56bbf05cf935dd149229'
)

prepare() {
    cd "$srcdir/$pkgname-$pkgver"
    patch -p1 -i "$srcdir/fix_build_with_QT6.diff"
}

build() {
    cmake -B build -S "$srcdir/$pkgname-$pkgver" \
        -DCMAKE_BUILD_TYPE=Release \
        -DCMAKE_INSTALL_PREFIX='/usr' \
        -DBUILD_SHIBBOLETH_SUPPORT=ON
    cmake --build build
}

package() {
    DESTDIR="$pkgdir" cmake --install build
}
