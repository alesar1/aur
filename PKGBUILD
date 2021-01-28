# Maintainer: Stephan Springer <buzo+arch@Lini.de>
# Contributor: Doug Newgard <scimmia at archlinux dot info>
# Contributor: SaultDon <sault.don gmail>
# Contributor: Lantald <lantald at gmx.com>
# Contributor: Thomas Dziedzic <gostrc at gmail>
# Contributor: dibblethewrecker <dibblethewrecker.at.jiwe.dot.org>
# Contributor: Gerardo Exequiel Pozzi <vmlinuz386@yahoo.com.ar>
# Contributor: Eric Forgeot <http://esclinux.tk>

_pkgname=qgis
pkgname="$_pkgname"-ltr
pkgver=3.10.14
pkgrel=1
pkgdesc='Geographic Information System (GIS); Long Term Release'
url='https://qgis.org/'
license=(GPL)
arch=(x86_64)
depends=(exiv2 gdal hicolor-icon-theme libzip python-qscintilla-qt5 python-sip4 qca qt5-3d
         qt5-serialport qt5-webkit qtkeychain qwtpolar spatialindex)
makedepends=(cmake ninja fcgi gsl python-setuptools python-six qt5-tools txt2tags sip4)
optdepends=('fcgi: Map server'
            'gpsbabel: GPS Tools plugin'
            'gsl: Georeferencer plugin'
            'python-gdal: DB Manager plugin; Processing plugin'
            'python-jinja: MetaSearch plugin'
            'python-owslib: MetaSearch plugin'
            'python-psycopg2: DB Manager plugin; Processing plugin'
            'python-pygments: MetaSearch plugin'
            'python-numpy: Processing plugin'
            'python-yaml: Processing plugin')
provides=("$_pkgname=$pkgver")
conflicts=("$_pkgname")
source=("https://qgis.org/downloads/$_pkgname-$pkgver.tar.bz2"
        qgis-pyqt5-sip5.patch
        t2t-toc-level.patch
)
# curl https://qgis.org/downloads/qgis-latest-ltr.tar.bz2.sha256
sha256sums=('add0a24cb6ec0ed5120cdcfceb478d5941936c7187ed85f2f7e7d22628e36131'
            '47fdab75c94ecf5b61a41b334e23714226e895cef507c35a3bc4b46c7d307981'
            'f7e91914cfe366a63383b39c63d5731f6f20a1a0a0d7e9f3d16809a40bb5acff')

prepare() {
  mkdir -p build
  cd "$_pkgname-$pkgver"
  patch -p1 -i ../qgis-pyqt5-sip5.patch  # Use new pyqt sip file location
  patch -p1 -i ../t2t-toc-level.patch  # --toc-level has been removed in txt2tags
}

build() {
  cmake -B build "$_pkgname-$pkgver" \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DWITH_3D=TRUE \
    -DWITH_SERVER=TRUE \
    -DWITH_CUSTOM_WIDGETS=TRUE \
    -DBINDINGS_GLOBAL_INSTALL=TRUE \
    -DQGIS_MANUAL_SUBDIR=share/man \
    -DWITH_QWTPOLAR=TRUE \
    -DWITH_INTERNAL_QWTPOLAR=FALSE
  cmake --build build
}

package() {
  DESTDIR="$pkgdir" cmake --install build
}
