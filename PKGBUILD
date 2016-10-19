# Maintainer:  Gustavo Alvarez <sl1pkn07@gmail.com>

_plug=mvtools_sf
pkgname=vapoursynth-plugin-${_plug}-git
pkgver=r5.0.ge549759
pkgrel=1
pkgdesc="Plugin for Vapoursynth: ${_plug} (GIT version)"
arch=('i686' 'x86_64')
url='http://forum.doom9.org/showthread.php?t=172525'
license=('GPLv2')
depends=('vapoursynth'
         'fftw'
         )
makedepends=('git')
provides=("vapoursynth-plugin-${_plug}")
conflicts=("vapoursynth-plugin-${_plug}")
source=("${_plug}::git+https://github.com/IFeelBloated/vapoursynth-mvtools-sf")
sha256sums=('SKIP')

_site_packages="$(python -c "from distutils.sysconfig import get_python_lib; print(get_python_lib())")"

pkgver() {
  cd "${_plug}"
  echo "$(git describe --long --tags | tr - .)"
}

prepare() {
  cd "${_plug}"

  rm -fr src/VapourSynth.h src/VSHelper.h

  ./autogen.sh
}

build() {
  cd "${_plug}"
  CXXFLAGS+=" $(pkg-config --cflags vapoursynth)" \
  ./configure \
    --prefix=/usr \
    --libdir=/usr/lib/vapoursynth
  make
}

package(){
  cd "${_plug}"
  make DESTDIR="${pkgdir}" install
  install -Dm644 src/mvmulti.py "${pkgdir}${_sites_packages}/mvmulti.py"
  python -m compileall -q -f -d "${_sites_packages}" "${pkgdir}${_site_packages}/mvmulti.py"
  python -OO -m compileall -q -f -d "${_sites_packages}" "${pkgdir}${_site_packages}/mvmulti.py"
}
