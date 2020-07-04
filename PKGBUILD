# Maintainer : bartus <arch-user-repoᘓbartus.33mail.com>
# shellcheck disable=SC2034
# Notice: 0.10.2 is the last version supporting qt4

pkgname=phonon-qt4-vlc
pkgver=0.10.2
pkgrel=1
arch=(x86_64)
pkgdesc="Phonon VLC backend for Qt4"
depends=(vlc phonon-qt4)
provides=(phonon-qt4-backend)
url='https://phonon.kde.org/'
license=(LGPL)
makedepends=(vlc extra-cmake-modules phonon-qt4)
source=("http://download.kde.org/stable/phonon/phonon-backend-vlc/$pkgver/phonon-backend-vlc-$pkgver.tar.xz"{,.sig})
sha256sums=('490915d02b64143ee1372511b675671e57c386c50c4cec04771ed8740bc67298'
            'SKIP')
validpgpkeys=(CB9387521E1EE0127DA804843FDBB55084CC5D84) # Harald Sitter <sitter@kde.org>

build() {
  cmake \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_SKIP_RPATH=ON \
    -D__KDE_HAVE_GCC_VISIBILITY=NO \
    -DPLUGIN_INSTALL_DIR=/usr/lib/kde4 \
    -S ${pkgname/-qt4/}-$pkgver \
    -B build-qt4
  make -C build-qt4
}

package() {
  make -C build-qt4 DESTDIR="$pkgdir" install
}
