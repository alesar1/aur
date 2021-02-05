# Maintainer: AudioLinux  <audiolinux AT fastmail DOT fm>

# Contributor: Ronald van Haren <ronald@archlinux.org>
# Contributor: Antonio Rojas <arojas@archlinux.org>
# Contributor: Andrea Scarpino <andrea@archlinux.org>
# Contributor: Tobias Powalowski <tpowa@archlinux.org>

_pkgname=digikam
pkgname=digikam-without-akonadi-mediawiki-vkontakte
_pkgver=7.1.0
pkgver=${_pkgver//-/_} # for beta versions
pkgrel=2
pkgdesc="An advanced digital photo management application"
arch=(x86_64)
license=(GPL)
url="https://www.digikam.org/"
depends=(lensfun opencv knotifyconfig libksane kfilemetadata qtav marble-common threadweaver kcalendarcore
         qt5-xmlpatterns imagemagick glu)
makedepends=(extra-cmake-modules doxygen eigen boost kdoctools jasper)
conflicts=('digikam' 'digikam-git')
provides=('digikam')
optdepends=('hugin: panorama tool' 'qt5-imageformats: support for additional image formats (WEBP, TIFF)'
            'rawtherapee: RAW import' 'darktable: RAW import'
            'perl: for digitaglinktree')
source=("https://download.kde.org/stable/$_pkgname/$pkgver/$_pkgname-$_pkgver.tar.xz"{,.sig}
showfoto-configure-crash.patch::"https://invent.kde.org/graphics/digikam/-/commit/c79a1c6b.patch")
sha256sums=('b103c8463adf04939583199e13f8e83015d8a4a9ad79ebfd502d2a50b5a5abbe'
            'SKIP'
            '86f775473462087f24fcf72257ba6f0b6001dca729fb7225ac38e88cd7a5f338')
validpgpkeys=(D1CF2444A7858C5F2FB095B74A77747BC2386E50) # digiKam.org (digiKam project) <digikamdeveloper@gmail.com>

prepare() {
  patch -d $srcdir/$_pkgname-$_pkgver -p1 -i ../showfoto-configure-crash.patch # Fix crash on showfoto configuration
}

build() {
 cd $srcdir/$_pkgname-$_pkgver
 cmake -DDIGIKAMSC_COMPILE_KIPIPLUGINS=OFF -DBUILD_TESTING=OFF -DENABLE_KFILEMETADATASUPPORT=OFF -DENABLE_MEDIAPLAYER=OFF -DENABLE_AKONADICONTACTSUPPORT=OFF -DENABLE_MYSQLSUPPORT=ON -DENABLE_APPSTYLES=ON -DENABLE_QWEBENGINE=ON
 make
}

package() {
 cd $srcdir/$_pkgname-$_pkgver
 make DESTDIR="$pkgdir" install
}
