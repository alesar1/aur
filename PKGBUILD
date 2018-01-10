# Maintainer: Taijian <taijian@posteo.de>
# Contributor: Andy Kluger <andykluger@gmail.com>
# Contributor: Ronald van Haren <ronald@archlinux.org>
# Contributor: Andrea Scarpino <andrea@archlinux.org>
# Contributor: Tobias Powalowski <tpowa@archlinux.org>

_pkgname=digikam
pkgname=digikam-without-akonadi-mediawiki-vkontakte
pkgver=5.8.0
pkgrel=1
pkgdesc="minimized build of Digikam for non-KDE users, without Plasma/KDE integration"
arch=('i686' 'x86_64')
license=('GPL')
url="http://www.digikam.org/"
depends=(liblqr libkipi libksane lensfun opencv knotifyconfig marble-common
	threadweaver kcalcore exiv2)
optdepends=('kipi-plugins: export to various online services'
            'hugin: panorama tool')
makedepends=(extra-cmake-modules boost doxygen eigen kdoctools)
conflicts=('digikam' 'digikam-git')
provides=('digikam')
source=("http://download.kde.org/stable/${_pkgname}/${_pkgname}-${pkgver}.tar.xz")
sha256sums=('194a44cc3ca229d501acfba67a38d483d1d64069a85e0491dd28dc2b57091c6e')

prepare() {
  cd "${_pkgname}-${pkgver}"
}

build() {
  cd "${_pkgname}-${pkgver}"

  cmake "${srcdir}/${_pkgname}-${pkgver}" \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_INSTALL_LIBDIR=lib \
    -DCMAKE_BUILD_TYPE=Release \
    -DBUILD_TESTING=OFF \
    -DDIGIKAMSC_COMPILE_KIPIPLUGINS=OFF \
    -DDIGIKAMSC_COMPILE_PO=ON \
    -DENABLE_KFILEMETADATASUPPORT=OFF \
    -DENABLE_MEDIAPLAYER=OFF \
    -DENABLE_AKONADICONTACTSUPPORT=OFF \
    -DENABLE_MYSQLSUPPORT=ON \
    -DENABLE_APPSTYLES=ON \
    -DENABLE_OPENCV3=ON
  make
}

package() {
  cd "${_pkgname}-${pkgver}/core"
  make DESTDIR="$pkgdir" install
  cd "${srcdir}/${_pkgname}-${pkgver}/doc"
  make DESTDIR="$pkgdir" install
  cd "${srcdir}/${_pkgname}-${pkgver}/po"
  make DESTDIR="$pkgdir" install

  # Provided by kipi-plugins
  rm "$pkgdir"/usr/share/locale/*/LC_MESSAGES/kipiplugin*.mo
}
