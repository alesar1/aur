# Maintainer: Fredy García <frealgagu at gmail dot com>
# Contributor: Ronald van Haren <ronald@archlinux.org>
# Contributor: Antonio Rojas <arojas@archlinux.org>
# Contributor: Andrea Scarpino <andrea@archlinux.org>
# Contributor: damir <damir@archlinux.org>

pkgname=amarok
pkgver=2.9.0.r271.82018b9fcf
pkgrel=1
pkgdesc="The powerful music player for KDE"
arch=("x86_64")
url="http://amarok.kde.org/"
license=("FDL" "GPL2" "LGPL2.1")
depends=("kcmutils" "kdnssd" "kirigami2" "knewstuff" "ktexteditor" "libgpod" "liblastfm-qt5" "libmtp" "libmygpo-qt5" "libofa" "libssh-gnutls" "mariadb" "phonon-qt5" "qt5-webengine" "taglib-extras" "threadweaver")
makedepends=("extra-cmake-modules" "gdk-pixbuf2" "git" "knotifyconfig" "libgpod" "libmtp" "libmygpo-qt5" "loudmouth")
optdepends=("ifuse: support for Apple iPod Touch and iPhone"
            "loudmouth: backend needed by mp3tunes for syncing")
_commit=3be247f8a178b3656d470e9f7bbc8a208e9bf547
#source=("http://download.kde.org/stable/${pkgname}/${pkgver}/src/${pkgname}-${pkgver}.tar.xz"{,.sig})
source=("git://git.kde.org/amarok.git#commit=$_commit")

sha256sums=("SKIP")
validpgpkeys=("D81C0CB38EB725EF6691C385BB463350D6EF31EF") # Heiko Becker <heirecka@exherbo.org>

prepare() {
  mkdir -p "${srcdir}/${pkgname}/build"
}

build() {
  cd "${srcdir}/${pkgname}/build"
  cmake .. \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_INSTALL_LIBDIR=lib \
    -DBUILD_TESTING=OFF
  make
}

package() {
  cd "${srcdir}/${pkgname}/build"
  make DESTDIR="${pkgdir}" install
}
