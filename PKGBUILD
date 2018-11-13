# Maintainer: Vincent Grande <shoober420@gmail.com>
# Contributor: Maxime Gauduin <alucryd@archlinux.org>
# Contributor: Jameson Pugh <imntreal@gmail.com>
# Contributor: J0k3r <moebius282@gmail.com>

pkgname=lib32-sdl2-hg
pkgver=2.0.9.r13.45038f8422c9+
pkgrel=2
pkgdesc="A library for portable low-level access to a video framebuffer, audio output, mouse, and keyboard (Version 2. 32 -bit)"
arch=('x86_64')
url="https://www.libsdl.org"
license=('MIT')
depends=('lib32-glibc' 'lib32-libxext' 'lib32-libxrender' 'lib32-libx11' 'lib32-libgl'
         'lib32-libxcursor' 'sdl2')
makedepends=('gcc-multilib' 'lib32-alsa-lib' 'lib32-mesa' 'lib32-libpulse' 'lib32-libxrandr'
             'lib32-libxinerama' 'lib32-wayland' 'lib32-libxkbcommon' 'wayland-protocols'
             'lib32-libxss' 'cmake' 'jack' 'lib32-tslib')
optdepends=('lib32-alsa-lib: ALSA audio driver'
            'lib32-libpulse: PulseAudio audio driver'
            'lib32-jack: JACK audio driver')
provides=(lib32-sdl2)
conflicts=(lib32-sdl2)
source=("hg+http://hg.libsdl.org/SDL#branch=default")
sha512sums=('SKIP')

pkgver() {

#thanks Kozeid

  cd "SDL"
  printf "%s.r%s.%s" \
    "$(hg log -r . -T "{latesttag}" | sed 's/^release-//')" \
    "$(hg identify -n)" \
    "$(hg identify -i)"
}

prepare() {
  cd SDL

  sed -i 's|lib/cmake|lib32/cmake|' CMakeLists.txt

  # Don't try to link against ibus
  sed -i '/pkg_search_module.*ibus-1.0/d' CMakeLists.txt

  mkdir build
}

build() {
  cd SDL/build

  export CC='gcc -m32'
  export CXX='g++ -m32'
  export PKG_CONFIG_PATH='/usr/lib32/pkgconfig'

  cmake .. \
      -DCMAKE_INSTALL_PREFIX=/usr \
      -DLIB_SUFFIX=32 \
      -DSDL_STATIC=OFF \
      -DSDL_DLOPEN=ON \
      -DARTS=OFF \
      -DESD=OFF \
      -DNAS=OFF \
      -DALSA=ON \
      -DPULSEAUDIO_SHARED=ON \
      -DVIDEO_WAYLAND=ON \
      -DRPATH=OFF \
      -DCLOCK_GETTIME=ON \
      -DJACK_SHARED=ON
  make
}

package() {
  cd SDL/build

  make DESTDIR="${pkgdir}" install
  rm -rf "${pkgdir}"/usr/{bin,include,share}

  sed -i "s/libSDL2\.a/libSDL2main.a/g" "$pkgdir"/usr/lib32/cmake/SDL2/SDL2Targets-noconfig.cmake

  install -dm 755 "${pkgdir}"/usr/share/licenses
  ln -s sdl2 "${pkgdir}"/usr/share/licenses/lib32-sdl2
}

# vim: ts=2 sw=2 et:
