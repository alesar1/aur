#!/bin/bash
# shellcheck disable=SC2034,SC2164
# Maintainer: Zack Emmert <zemmert@fastmail.com>
# Contributor Alexandre Bouvier <contact@amb.tf>
# Contributor: Daniel Cohen <dan@supercore.co.uk>
# Contributor: Jamesjon <universales@protonmail.com>
pkgname=plymouth-kcm
pkgver=5.17.5
pkgrel=1
pkgdesc="KCM to manage the Plymouth (Boot) theme"
arch=('any')
url="https://cgit.kde.org/plymouth-kcm.git/"
license=('GPL')
depends=('plymouth' 'knewstuff' 'kconfig' 'kconfigwidgets' 'ki18n' 'kdeclarative' 'kcmutils')
makedepends=('cmake' 'kdoctools' 'extra-cmake-modules')
source=("https://download.kde.org/stable/plasma/$pkgver/$pkgname-$pkgver.tar.xz"{,.sig})
sha256sums=('bbd6994f60ed9d63b4e4dd0abe78bf1f9c14b8ecce8ba4355d16cd52a0a86528'
            'SKIP')
validpgpkeys=('2D1D5B0588357787DE9EE225EC94D18F7F05997E')

prepare() {
	mkdir -p $srcdir/${pkgname}-$pkgver/build
}

build() {
    cd "$srcdir/${pkgname}-$pkgver/build"
    cmake .. -DCMAKE_INSTALL_PREFIX=`kf5-config --prefix` \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_PREFIX_PATH=/usr/share/ECM \
    -DBUILD_TESTING=OFF
    make
}

package() {
	cd "$srcdir/${pkgname}-$pkgver/build"
    make DESTDIR="$pkgdir" install
}
