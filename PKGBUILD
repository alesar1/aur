# Maintainer: Mirko Scholz
# Contributor: Evgeniy Alekseev <arcanis at archlinux dot org>
# Contributor: Knut Franke <Knut.Franke ad gmx dot de>
# Contributor: Olaf Leidinger <leidola at newcon dot de>
# Contributor: Robal <nigrantis.tigris at gmail dot com>
# Contributor: Alexander <chronischzuspaet at gmail dot com> Kempen

# see https://svnweb.freebsd.org/ports/head/science/scidavis/Makefile?view=markup

_pkgname=scidavis
pkgname=scidavis-qt5
pkgver=2.0.10
_commit=2.0.10
pkgrel=1
pkgdesc="Application for Scientific Data Analysis and Visualization, fork of QtiPlot. Qt5 port"
arch=('x86_64')
url="http://scidavis.sourceforge.net/"
license=('GPL')
makedepends=('boost' 'cmake' 'qt5-tools' 'classdesc>=3.37')
depends=('gsl' 'glu' 'mesa' 'muparser' 'shared-mime-info'
         'desktop-file-utils' 'hicolor-icon-theme'
         'qwt5-qt5' 'qwtplot3d-qt5'
         'python-pyqt5')
conflicts=('scidavis')
source=("${_pkgname}-${pkgver}.zip::https://github.com/highperformancecoder/scidavis/archive/${_commit}.zip"
'patch-2.0.10')
sha512sums=('b2f9c86c079ac72585f95ae1ced93b9e6be9e8fd0e84a43106b1a4f1138335d1f04424131fb8bf58585d4645b76e3b919da2221ec039385ad6a0ccce56c02db1'
            'f9ae2f099cdead27f73222a5e6d72217e36d10fcd1f4edb6f23f9844b1a962d25ec873d1d676165ad4e45a550d0b65511246f4302c70a28ac2d3d12760df9eb4')

prepare() {
  cd "${_pkgname}-${_commit}"
  patch --forward --strip=1 --input="${srcdir}/patch-2.0.10"
}

build() {
  cd "${_pkgname}-${_commit}"
  qmake-qt5 \
	CONFIG+="liborigin python" \
	INCLUDEPATH+="/usr/include/qt/qwt5-qt5" \
	INCLUDEPATH+="/usr/include/qt/qwtplot3d-qt5" \
	LIBS+="-lqwt5-qt5 -lqwtplot3d-qt5" \
	QMAKE_CXXFLAGS="-Wno-deprecated-copy -Wno-deprecated-declarations -fpermissive"
  make qmake
  make
}

package() {
  cd "${_pkgname}-${_commit}"
  make INSTALL_ROOT="${pkgdir}" DESTDIR="${pkgdir}" install

  # remove liborigin files since it uses static library
  rm -rf "${pkgdir}/usr/local"

  # install translations (it looks like it does not provide target to do it)
  install -dm755 "${pkgdir}/usr/share/scidavis/translations/"
  find "scidavis/translations/" -name '*.qm' -type f -exec \
      install -Dm644 {} "${pkgdir}/usr/share/scidavis/translations/" \;
}
