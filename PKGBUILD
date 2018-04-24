# Maintainer: David P. <megver83@parabola.nu>
# Contributor: Felix Yan <felixonmars@archlinux.org>
# Contributor: Antonio Rojas <arojas@archlinux.org>
# Contributor: Andrea Scarpino <andrea@archlinux.org>

pkgbase=kate-root
_pkgbase=${pkgbase/-root}
pkgname=('kwrite-root'
         'kate-root')
pkgver=18.04.0
pkgrel=1
arch=('armv7h' 'i686' 'x86_64')
license=(GPL LGPL FDL)
makedepends=(extra-cmake-modules kdoctools plasma-framework knewstuff ktexteditor threadweaver kitemmodels kactivities)
source=("https://download.kde.org/stable/applications/${pkgver}/src/${_pkgbase}-${pkgver}.tar.xz"{,.sig}
        "https://gitlab.com/Megver83/kdebase-root-patches/raw/master/0001-Defuse-root-block.patch"{,.sig})
sha512sums=('2962b64a123be966017408bf02d3a92d6814ff76c759e8ea6f98e58c2cfa92086c290aea23f800dfa05ecf092c421ad7225161f757c98d409d40adce61aebc93'
            'SKIP'
            'a6d1a2bf6664ac72dc9c9434c64a228eb91320d405e6cd4b4dd6b24d8ff8d0675407c0e0f76e76d3e2758238f22fe00e0cd96caa9d24bd9fa39950cafdc03fa8'
            'SKIP')
validpgpkeys=('CA262C6C83DE4D2FB28A332A3A6A4DB839EAA6D7' # Albert Astals Cid <aacid@kde.org>
              'F23275E4BF10AFC1DF6914A6DBD2CE893E2D1C87' # Christoph Feck <cfeck@kde.org>
              '6DB9C4B4F0D8C0DC432CF6E4227CA7C556B2BA78' # David P.
)

prepare() {
  mkdir -p build
  cd $srcdir/${_pkgbase}-${pkgver}
  patch -p1 -i $srcdir/0001-Defuse-root-block.patch
}

build() {
  cd build
  cmake ../${_pkgbase}-${pkgver} \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_INSTALL_LIBDIR=lib \
    -DBUILD_TESTING=OFF
  make
}

package_kwrite-root() {
  pkgdesc="Text Editor, patched to be able to run as root"
  url="https://www.kde.org/applications/utilities/kwrite/"
  depends=('ktexteditor' 'kactivities' 'hicolor-icon-theme')
  replaces=('kdebase-kwrite' 'kwrite')
  conflicts=('kdebase-kwrite' 'kwrite')
  provides=('kdebase-kwrite' 'kwrite')

  cd build
  make DESTDIR="${pkgdir}" install

  find "$pkgdir" -type f -name '*kate*' -exec rm {} \;
  rm -r "$pkgdir"/usr/lib/qt/plugins/ktexteditor \
        "$pkgdir"/usr/share/doc/HTML/*/{kate,katepart} \
        "$pkgdir"/usr/share/katexmltools \
        "$pkgdir"/usr/share/locale/*/LC_MESSAGES/{kterustcompletion,tabswitcherplugin,ktexteditorpreviewplugin}.mo \
        "$pkgdir"/usr/share/plasma/plasmoids
}

package_kate-root() {
  pkgdesc="Advanced Text Editor, patched to be able to run as root"
  url="https://www.kde.org/applications/utilities/kate/"
  depends=('knewstuff' 'ktexteditor' 'threadweaver' 'kitemmodels' 'kactivities' 'hicolor-icon-theme')
  replaces=('kdesdk-kate' 'kate')
  conflicts=('kdesdk-kate' 'kate')
  provides=('kdesdk-kate' 'kate')
  optdepends=('konsole: open a terminal in Kate')

  cd build
  make DESTDIR="${pkgdir}" install

  find "$pkgdir" -type f -name '*kwrite*' -exec rm {} \;
  rm -r "$pkgdir"/usr/share/doc/HTML/*/kwrite
}
