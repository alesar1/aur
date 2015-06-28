# Maintainer: Lukas Jirkovsky <l.jirkovsky@gmail.com>
pkgname=luxrender-hg
pkgver=4690.517f6816eeb1
pkgrel=1
pkgdesc="Rendering system for physically correct, unbiased image synthesis"
arch=('i686' 'x86_64')
url="http://www.luxrender.net/"
license=('GPL')
depends=('boost-libs' 'freeimage' 'openexr' 'openimageio' 'libpng' 'libcl' 'libgl' 'fftw' 'embree')
optdepends=('luxblend25: Blender exporter' 'qt4: Qt GUI' \
            'python: pylux Python interface'
            'opencl-nvidia: OpenCL support for nVidia GPUs' \
            'amdapp-sdk: OpenCL support for AMD GPUs' \
            'intel-opencl-runtime: OpenCL support for Intel CPUs')
makedepends=('mercurial' 'cmake' 'boost' 'mesa' 'qt4' "luxrays-hg" 'python' 'opencl-headers')
provides=('luxrender')
conflicts=('luxrender')
source=('lux::hg+https://bitbucket.org/luxrender/lux'
        force_python3.diff)
md5sums=('SKIP'
         '42692e65eabc5828693e2682e94b7c64')

pkgver() {
  cd "$srcdir/lux"
  echo $(hg identify -n).$(hg identify -i)
}

prepare() {
  cd "$srcdir/lux"

  patch -Np1 < "$srcdir/force_python3.diff" || true
}

build() {
  cd "$srcdir/lux"

  cmake -DCMAKE_INSTALL_PREFIX=/usr \
    -DLUXRAYS_DISABLE_OPENCL=OFF \
    -DPYTHON_CUSTOM=ON \
    -DPYTHON_LIBRARIES=/usr/lib/libpython3.4m.so \
    -DPYTHON_INCLUDE_PATH=/usr/include/python3.4m/ \
    .
  make
}

package() {
  cd "$srcdir/lux"
  make DESTDIR="$pkgdir" install

  # fix library path on x86_64
  [ "$CARCH" = "x86_64" ] && mv "$pkgdir"/usr/lib64 "$pkgdir"/usr/lib

  # install pylux
  install -D -m644 pylux.so "$pkgdir"/usr/lib/python3.4/pylux.so
}

# vim:set ts=2 sw=2 et:
