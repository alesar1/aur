# Maintainer: Michał Walenciak <kicer86@gmail.com>
pkgname=media-downloader
pkgver=1.0.0
pkgrel=1
pkgdesc="This project is a Qt/C++ based frontend to youtube-dl and it can be used to download any media file supported by youtube-dl"
arch=('i686' 'x86_64')
url="https://github.com/mhogomchungu/media-downloader"
license=('GPL2')
groups=()
depends=('qt5-base')
makedepends=('cmake' 'qt5-base')
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=(https://codeload.github.com/mhogomchungu/$pkgname/tar.gz/$pkgver)
noextract=()
md5sums=('3d93bacb1b4f2923db3320030f2a75d6')

build()
{
    cd $pkgname-$pkgver
    mkdir -p build
    cd build
    cmake -DCMAKE_INSTALL_PREFIX=/usr ..
    make
}

package()
{
    cd "$pkgname-$pkgver"
    cd build
    make DESTDIR="$pkgdir/" install
}
