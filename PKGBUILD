# Maintainer: Jakob Gahde <j5lx@fmail.co.uk>

pkgname=editorconfig-qtcreator
_pkgver=0.3.1
_qtcreatorver=4.11.1
pkgver=${_pkgver}+${_qtcreatorver}
pkgrel=1
pkgdesc="EditorConfig Plugin for QtCreator"
url="https://github.com/editorconfig/editorconfig-qtcreator"
arch=('i686' 'x86_64')
license=('LGPL')
depends=("qtcreator=${_qtcreatorver}" "editorconfig-core-c")
source=("${pkgname}-${_pkgver}.tar.gz::https://github.com/editorconfig/${pkgname}/archive/${_pkgver}.tar.gz"
        "http://download.qt.io/official_releases/qtcreator/${_qtcreatorver%.*}/${_qtcreatorver}/qt-creator-opensource-src-${_qtcreatorver}.tar.xz")
sha512sums=('53d4f9a875d5aaebd4df0310a4f44a087de8c4f63f5e54387c0e7ea0b5792c455c4b6d41f993b72d23ad5317867b91db5bafc727f6bc9514460f7918ff2c3a2e'
            '725e509eedde385bc84087a917ea22cf522733a2298d1579a4714f1d1d2d03f90de68fb475af88451bf36ebfceaec17b655077121233c8d9db6ec97dde829622')

build() {
  cd "${srcdir}/${pkgname}-${_pkgver}"

  mkdir -p ../pseudo-ide-build-tree/lib
  cp -a /usr/lib/qtcreator ../pseudo-ide-build-tree/lib

  mkdir build
  cd build
  qmake QTCREATOR_SOURCES="${srcdir}/qt-creator-opensource-src-${_qtcreatorver}" IDE_BUILD_TREE="${srcdir}/pseudo-ide-build-tree" \
    KSYNTAXHIGHLIGHTING_LIB_DIR=/usr/lib KSYNTAXHIGHLIGHTING_INCLUDE_DIR=/usr/include/KF5/KSyntaxHighlighting ..
  make
}

package() {
  cd "${srcdir}/${pkgname}-${_pkgver}/build"

  make install INSTALL_ROOT="${pkgdir}/usr"
}
