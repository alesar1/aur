# $Id$
# Maintainer: Andy Kluger <https://t.me/andykluger>
# Contributor: Antonio Rojas <arojas@archlinux,org>
# Contributor: Felix Yan <felixonmars@archlinux.org>
# Contributor: Andrea Scarpino <andrea@archlinux.org>
# Contributor: Pierre Schmitz <pierre@archlinux.de>

_pkgname=dolphin
pkgname=dolphin-meld
pkgver=18.04.0
pkgrel=2
pkgdesc="KDE File Manager, using Meld rather than Kompare"
arch=(x86_64)
url="https://kde.org/applications/system/dolphin/"
license=(LGPL)
provides=("$_pkgname=$pkgver")
conflicts=("$_pkgname=$pkgver")
depends=(baloo-widgets knewstuff kio-extras kuiserver kcmutils kparts kinit)
makedepends=(extra-cmake-modules kdoctools)
optdepends=('kde-cli-tools: for editing file type options' 'ffmpegthumbs: video thumbnails' 
            'meld: file comparisons'
            'ruby: installing new service menus from KDE Store' 'kdegraphics-thumbnailers: PDF and PS thumbnails' 'konsole: terminal panel')
groups=(kde-applications kdebase)
source=("https://download.kde.org/stable/applications/$pkgver/src/$_pkgname-$pkgver.tar.xz"{,.sig}
        kdebug-393528.patch::"https://cgit.kde.org/dolphin.git/patch/?id=0c05b992")
sha256sums=('b5068a26b34e2edac25f3528799ce48c7d211ee70113751275b01a5c87ba6d53'
            'SKIP'
            '5b05a6658ebc633e36fd86b8e8f90751a200bb1aa15a11cc5500fa87e017bf89')
validpgpkeys=(CA262C6C83DE4D2FB28A332A3A6A4DB839EAA6D7  # Albert Astals Cid <aacid@kde.org>
              F23275E4BF10AFC1DF6914A6DBD2CE893E2D1C87) # Christoph Feck <cfeck@kde.org>

prepare() {
  mkdir -p build
  cd $_pkgname-$pkgver/src
  sed -i 's/kompare -c/meld/g' dolphinmainwindow.cpp
  sed -i 's/findExecutable(QStringLiteral("kompare")).isEmpty()/findExecutable(QStringLiteral("meld")).isEmpty()/g' dolphinmainwindow.cpp

  cd ..
  patch -p1 -i ../kdebug-393528.patch # Fix crash with duplicated entries in user-places.xbel
}

build() {
  cd build
  cmake ../$_pkgname-$pkgver \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_INSTALL_LIBDIR=lib \
    -DBUILD_TESTING=OFF
  make
}

package() {
  cd build
  make DESTDIR="$pkgdir" install
}
