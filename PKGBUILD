# Maintainer: Fredy García <frealgagu at gmail dot com>
# Contributor: Ronald van Haren <ronald@archlinux.org>
# Contributor: Antonio Rojas <arojas@archlinux.org>
# Contributor: Andrea Scarpino <andrea@archlinux.org>
# Contributor: damir <damir@archlinux.org>

pkgname=amarok
pkgver=2.9.0.r320.5a69fc04b4
pkgrel=1
pkgdesc="The powerful music player for KDE"
arch=("x86_64")
url="http://${pkgname}.kde.org/"
license=("FDL" "GPL2" "LGPL2.1")
depends=("kcmutils" "kdnssd" "kirigami2" "knewstuff" "ktexteditor" "libgpod" "liblastfm-qt5" "libmtp" "libmygpo-qt5" "libofa" "libssh-gnutls" "mariadb" "phonon-qt5" "qt5-webengine" "taglib-extras" "threadweaver")
makedepends=("extra-cmake-modules" "gdk-pixbuf2" "git" "knotifyconfig" "libgpod" "libmtp" "libmygpo-qt5" "loudmouth")
optdepends=("ifuse: support for Apple iPod Touch and iPhone"
            "loudmouth: backend needed by mp3tunes for syncing")
_commit="5a69fc04b4f7ed5fcd725b6db97f835d5a824b74"
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/KDE/${pkgname}/archive/${_commit}.tar.gz")
sha256sums=("b65943643fabf451985c5c99eefd67d18355ec8c8201e618fb66e19a89df2bab")

#source=("http://download.kde.org/stable/${pkgname}/${pkgver}/src/${pkgname}-${pkgver}.tar.xz"{,.sig})
#validpgpkeys=("D81C0CB38EB725EF6691C385BB463350D6EF31EF") # Heiko Becker <heirecka@exherbo.org>

prepare() {
  mkdir -p "${srcdir}/${pkgname}-${_commit}/build"
}

build() {
  cd "${srcdir}/${pkgname}-${_commit}/build"
  cmake "${srcdir}/${pkgname}-${_commit}" \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_INSTALL_LIBDIR=lib \
    -DBUILD_TESTING=OFF
  make
}

package() {
  cd "${srcdir}/${pkgname}-${_commit}/build"
  make DESTDIR="${pkgdir}" install
}
