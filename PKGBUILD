# Maintainer: Doug Newgard <scimmia at archlinux dot info>
# Contributor: Maciej Sieczka <msieczka at sieczka dot org>

pkgname=grass
pkgver=7.0.4
pkgrel=1
_shortver=${pkgver%.*}; _shortver=${_shortver/./}
pkgdesc='Geospatial data management and analysis, image processing, graphics/maps production, spatial modeling and visualization'
arch=('i686' 'x86_64')
url='http://grass.osgeo.org/'
license=('GPL')
depends=('fftw' 'gdal' 'glu' 'python2-pillow' 'subversion' 'wxpython')
makedepends=('libxt')
optdepends=('postgresql: PostgreSQL database interface')
source=("http://grass.osgeo.org/grass$_shortver/source/$pkgname-$pkgver.tar.gz")
md5sums=('843e8942c14aa7473380ea70c9b0ec52')

prepare() {
  cd $pkgname-$pkgver

  # Change everything to use python2
  sed -i 's/\(env \|\/usr\/bin\/\)python$/&2/' $(find . -iname "*.py")
  sed -i '/os\.environ.*GRASS_PYTHON/ s/"python"/"python2"/' lib/init/grass.py
  sed -i '/^PYTHON/ s/python$/&2/' include/Make/Platform.make.in

  # Fix path
  sed -i '/^\s*INSTDIR/ s/".*"//' configure
}

build() {
  cd $pkgname-$pkgver

  # Ancient autoconf used upstream can't handle CPPFLAGS correctly, so set CPP to ignore warnings
  CPP="gcc -E -w" \
  ./configure \
    --prefix=/opt/$pkgname \
    --with-freetype-includes=/usr/include/freetype2 \
    --with-wxwidgets \
    --with-readline \
    --with-pthread \
    --with-netcdf \
    --with-nls \
    --with-geos \
    --with-postgres

  make
}

package() {
  cd $pkgname-$pkgver

  make exec_prefix="$pkgdir/usr" INST_DIR="$pkgdir/opt/$pkgname" install

  # Install linker config file, needed for qgis to find grass
  install -d "$pkgdir/etc/ld.so.conf.d/"
  echo "/opt/$pkgname/lib" > "$pkgdir/etc/ld.so.conf.d/$pkgname.conf"

  cd "$pkgdir/opt/$pkgname"

  # Fix for 3rd party python scripts
  ln -s ../../../usr/bin/python2 bin/python

  # Put freedesktop.org files in correct location
  mv share "$pkgdir/usr"

  # Fix some paths that get hard coded by make install
  sed -i "s|$pkgdir||g" demolocation/.grassrc$_shortver \
                        include/Make/{Platform,Grass}.make \
                        etc/fontcap \
                        "$pkgdir/usr/bin/grass$_shortver"
  sed -i "s|$srcdir||g" docs/html/t.connect.html
}
