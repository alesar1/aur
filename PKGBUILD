# Maintainer: Alexander Mcmillan <linuxguy93@gmail.com> 
pkgname=carla-bridges
pkgver=2.0.0
majorver=${pkgver}
minorver=${pkgver}
pkgrel=1
pkgdesc="Carla All Bridges (Stable Branch)"
arch=('i686' 'x86_64')
url="http://kxstudio.sf.net/carla"
license=('GPL2')
conflicts=('carla-bridges-win32' 'carla-bridges-win64')
provides=("$pkgname")
depends=('wine' 'carla' 'liblo')
makedepends=('git' 'mingw-w64-gcc' 'mingw-w64-crt' 'mingw-w64-winpthreads' 'mingw-w64-pkg-config' 'gcc-multilib')
source=("$pkgname::git+https://github.com/falkTX/Carla.git#tag=v$pkgver")
md5sums=('SKIP')

_path=$PATH
_cflags=$CFLAGS
_cxxflags=$CXXFLAGS
_ldflags=$LDFLAGS
_ar=$AR
_cc=$CC
_cxx=$CXX
_pkg_config_path=$PKG_CONFIG_PATH
_win32=$WIN32
_win64=$WIN64

build() {
	## Build Carla
	cd "$srcdir/$pkgname"
	make -j$(nproc) \
		MOC_QT5=/usr/bin/moc-qt5 \
		RCC_QT5=/usr/bin/rcc-qt5 \
		UIC_QT5=/usr/bin/uic-qt5
	
	## Build 32-Bit Native Bridge
	make -j$(nproc) posix32
	
	## Build 32 Bit Wine Bridge
	cd "$srcdir/$pkgname"
	export PATH=/usr/i686-w64-mingw32/bin:$PATH
	export AR=i686-w64-mingw32-ar
	export CC=i686-w64-mingw32-gcc
	export CXX=i686-w64-mingw32-g++
	export PKG_CONFIG_PATH=/usr/i686-w64-mingw32/lib/pkgconfig
	export WIN32=true
	unset CFLAGS
	unset CXXFLAGS
	unset LDFLAGS
	export LDFLAGS="-static"
	make -j$(nproc) win32 HAVE_LIBLO=true
	export PATH=$_path
	export AR=$_ar
	export CC=gcc
	export CXX=$_cxx
	export PKG_CONFIG_PATH=$_pkg_config_path
	export CFLAGS=$_cflags
	export CXXFLAGS=$_cxxflags
	export LDFLAGS=$_ldflags
	export WIN32=$_win32
	make -j$(nproc) wine32
	
	## Build 64 Bit Wine Bridge
	export PATH=/usr/x86_64-w64-mingw32/bin:$PATH
	export AR=x86_64-w64-mingw32-ar
	export CC=x86_64-w64-mingw32-gcc
	export CXX=x86_64-w64-mingw32-g++
	export PKG_CONFIG_PATH=/usr/x86_64-w64-mingw32/lib/pkgconfig
	export WIN32=true
	export WIN64=true
	unset CFLAGS
	unset CXXFLAGS
	unset LDFLAGS
	export LDFLAGS="-static"
	cd "$srcdir/$pkgname"
	make -j$(nproc) win64 HAVE_LIBLO=true
	export PATH=$_path
	export AR=$_ar
	export CC=gcc
	export CXX=$_cxx
	export PKG_CONFIG_PATH=$_pkg_config_path
	export CFLAGS=$_cflags
	export CXXFLAGS=$_cxxflags
	export LDFLAGS=$_ldflags
	export WIN32=$_win32
	export WIN64=$_win64
	make -j$(nproc) wine64
}

package() {
	## Install Bridges To Standalone Carla
	cd "$srcdir/$pkgname"
	mkdir -p "$pkgdir/usr/lib/carla"
	cp bin/*.exe "$pkgdir/usr/lib/carla/"
	cp bin/*.dll "$pkgdir/usr/lib/carla/"
	cp bin/*posix32 "$pkgdir/usr/lib/carla/"
	
	## Install Bridges To Carla's Plugins
	mkdir -p "$pkgdir/usr/lib/lv2/carla.lv2"
	mkdir -p "$pkgdir/usr/lib/vst/carla.vst"
	cd "$pkgdir/usr/lib/carla"
	ln -sr *.exe ../lv2/carla.lv2/
	ln -sr *.exe ../vst/carla.vst/
	ln -sr *.dll ../lv2/carla.lv2/
	ln -sr *.dll ../vst/carla.vst/
	ln -sr *posix32 ../lv2/carla.lv2/
	ln -sr *posix32 ../vst/carla.vst/
}
