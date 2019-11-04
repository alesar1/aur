# Maintainer: Argyros Argyridis <arargyridis@gmail.com>
# Contributor: Samuel Mesa <samuelmesa@linuxmail.org>

pkgname=orfeo-toolbox
pkgver=7.0.0
_pkgver=7.0
minorver=1
pkgrel=4
pkgdesc="ORFEO Toolbox (OTB) is an open source library of image processing algorithms"
arch=(x86_64 i686)
url="http://www.orfeo-toolbox.org/otb/"
license=('CeCILL')
groups=()
depends=('gdal' 'agg' 'freeglut' 'curl' 'fftw' 'tinyxml' 'muparser' 'fltk' 'python2' 'openthreads' 'boost'
		'hdf5'  'insight-toolkit' 'ossim' 'libsvm' 'qwt' 'opencv' 'glfw' 'openmpi')
makedepends=('boost' 'swig' 'cmake' 'qt5-base')
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=

source=(https://www.orfeo-toolbox.org/packages/OTB-$pkgver.tar.gz
		git://github.com/jmichel-otb/GKSVM.git)
noextract=()

md5sums=('314b985d112dab6d407dd6d35bccc790'
         'SKIP')


_gitname="GKSVM"

prepare() {
	## Module for monteverdi build
	cd 	$srcdir/  
	cp -ra $srcdir/GKSVM $srcdir/Modules/Remote
}

build() {  
  cd $srcdir/  
  msg "Extracting archive..."
  msg "starting make..."
 
  if  [ -d "$srcdir/build/" ]; then
    rm -rf $srcdir/build/
   fi
  mkdir $srcdir/build/
 
   cd $srcdir/build
 
   cmake ../ \
  -DCMAKE_BUILD_TYPE=Release \
      -DCMAKE_CXX_FLAGS="$CXXFLAGS -fPIC" \
      -DCMAKE_C_FLAGS="$CFLAGS -fPIC" \
          -DCMAKE_INSTALL_PREFIX=/usr \
          -DOTB_USE_CURL=ON \
          -DBUILD_EXAMPLES=OFF \
          -DBUILD_TESTING=OFF \
          -DOTB_WRAP_PYTHON=ON \
          -DBUILD_SHARED_LIBS=ON \
          -DOTB_USE_QT=ON \
          -DOTB_USE_OPENCV=ON \
          -DOTB_USE_MUPARSER=ON \
          -DOTB_USE_LIBKML=OFF \
          -DOTB_USE_LIBSVM=ON \
          -DOTB_USE_OPENMP=ON \
          -DOTB_USE_6S=ON \
          -DOTB_DATA_USE_LARGEINPUT=ON
         
  make
 
}
 
package() {
  # Install an ldconfig conf for Orfeo libs to be visible on the
  # system. Arch runs `ldconfig' after install automatically:
  echo "/usr/lib/otb
 /usr/lib/otb/applications" > "${srcdir}/${pkgname}.conf"
  install -D -m644 "${srcdir}/${pkgname}.conf" "${pkgdir}/etc/ld.so.conf.d/${pkgname}.conf"
 
  cd "$srcdir/"build
  make DESTDIR="$pkgdir" install
}
