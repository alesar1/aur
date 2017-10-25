# Maintainer: Lukas Lamper <lukash.lamper@gmail.com>
_name=openhantek
pkgname=$_name-git
pkgver=r145.5913ecb
pkgrel=1
pkgdesc="Qt5 UI for Hantek DSO2xxx/DSO52xx/6022BE/BL oscilloscopes. Including firmware"
arch=('i686' 'x86_64')
url="http://www.openhantek.org/"
license=('GPL-3.0')
depends=('bzip2' 'double-conversion' 'fftw' 'freetype2'
         'gcc-libs' 'glib2' 'glibc' 'graphite' 'harfbuzz'
         'icu' 'libgcrypt' 'libglvnd' 'libgpg-error' 
         'libpng' 'libsystemd' 'libusb' 'libx11' 'libxau'
         'libxcb' 'libxdmcp' 'libxext' 'lz4' 'pcre'
         'pcre2' 'qt5-base' 'xz' 'zlib')
provides=("$_name")
makedepends=('git' 'cmake' 'binutils' 'fakeroot')
install=$pkgname.install
source=("git+https://github.com/OpenHantek/openhantek.git")
sha256sums=('SKIP')


pkgver() {
  cd "$srcdir/$_name"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "$srcdir/$_name"

  mkdir build
  cd build

  cmake                               \
       -DCMAKE_INSTALL_PREFIX=/usr    \
       -DCMAKE_INSTALL_LIBDIR=lib ../

  make -j
}

package() {
  cd $srcdir/$_name/build
  make DESTDIR="$pkgdir" install

  sed -i  "s;/usr/local/share/hantek;/usr/share/openhantek;g"\
          $srcdir/$_name/firmware/90-hantek.rules

  mkdir -p $pkgdir/usr/share/openhantek
  cp -a $srcdir/$_name/firmware/*.hex $pkgdir/usr/share/openhantek/

  mkdir -p $pkgdir/etc/udev/rules.d/
  cp $srcdir/$_name/firmware/90-hantek.rules $pkgdir/etc/udev/rules.d/

  mv $pkgdir/usr/bin/OpenHantek $pkgdir/usr/bin/openhantek
}
