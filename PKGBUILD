# Maintainer: Stephan Springer <buzo+arch@Lini.de>
# Contributor: Samuel Fernando Mesa <samuel.mesa at linuxmail dot org>
# Contributor: Andrea Scarpino <andrea@archlinux.org>
# Contributor: Pierre Schmitz <pierre@archlinux.de>s

pkgname=qca-qt4
_pkgname=qca
pkgver=2.2.0
pkgrel=1
pkgdesc="Qt Cryptographic Architecture. Qt4 Build"
arch=('i686' 'x86_64')
license=('LGPL')
url='https://userbase.kde.org/QCA'
depends=(qt4 nss)
optdepends=('pkcs11-helper: PKCS-11 plugin' 'botan: botan plugin')
makedepends=('cmake' 'doxygen' 'botan' 'pkcs11-helper' 'libsasl' 'libgcrypt')
source=("http://download.kde.org/stable/$_pkgname/$pkgver/$_pkgname-$pkgver.tar.xz"{,.sig})
sha256sums=('3b479826858099c9ac1bd7992a0e2f1cd68d684d9a32910dbc4372bef592318a'
            'SKIP')
validpgpkeys=('CB9387521E1EE0127DA804843FDBB55084CC5D84')

prepare() {
    mkdir -p build
}

build() {
    cd build
    cmake ../"$_pkgname-$pkgver" \
          -DCMAKE_INSTALL_PREFIX=/usr \
          -DBUILD_TESTS=OFF \
          -DQCA_LIBRARY_INSTALL_DIR=/usr/lib \
          -DQCA_FEATURE_INSTALL_DIR=/usr/share/qt4/mkspecs/features/ \
          -DQT4_BUILD=ON
    make
}

package() {
    cd build
    make DESTDIR="$pkgdir" install
}
