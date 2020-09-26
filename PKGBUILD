# Maintainer: Vincent Grande <shoober420@gmail.com>
# Contributor: Maxime Gauduin <alucryd@archlinux.org>
# Contributor: Jameson Pugh <imntreal@gmail.com>
# Contributor: J0k3r <moebius282@gmail.com>

pkgname=lib32-sdl2-minimal-hg
pkgver=2.0.9.r13.45038f8422c9+
pkgrel=1
pkgdesc="A library for portable low-level access to a video framebuffer, audio output, mouse, and keyboard (Version 2. 32 -bit)"
arch=('x86_64')
url="https://www.libsdl.org"
license=('MIT')
depends=('lib32-glibc' 'lib32-libxext' 'lib32-libxrender' 'lib32-libx11' 'lib32-libgl'
         'lib32-libxcursor' 'sdl2' 'lib32-libxxf86vm')
makedepends=('lib32-alsa-lib' 'lib32-libxrandr'
             'lib32-libxinerama' 'lib32-libxkbcommon' 'lib32-libxxf86vm'
             'lib32-libxss' 'cmake' 'mercurial')
optdepends=('lib32-alsa-lib: ALSA audio driver'
            'lib32-libpulse: PulseAudio audio driver'
            'lib32-jack: JACK audio driver'
            'jack: JACK audio support'
            'lib32-tslib: Touchscreen support'
            'lib32-wayland: wayland support'
            'wayland-protocols: wayland support'
            'lib32-mesa: open source graphics support')
provides=(lib32-sdl2)
conflicts=(lib32-sdl2 lib32-sdl2-hg)
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
  #fix libdir
  sed -i 's|lib/cmake|lib32/cmake|' SDL/CMakeLists.txt

  # Don't try to link against ibus
  sed -i '/pkg_search_module.*ibus-1.0/d' SDL/CMakeLists.txt
}

build() {
  export CC='gcc -m32'
  export CXX='g++ -m32'
  export PKG_CONFIG_PATH=/usr/lib32/pkgconfig

  cmake -S SDL -B build \
      -DCMAKE_INSTALL_PREFIX=/usr \
      -DLIB_SUFFIX=32 \
      -DSDL_STATIC=OFF \
      -DSDL_DLOPEN=ON \
      -DARTS=OFF \
      -DESD=OFF \
      -DNAS=OFF \
      -DALSA=ON \
      -DPULSEAUDIO_SHARED=OFF \
      -DVIDEO_WAYLAND=OFF \
      -DRPATH=OFF \
      -DCLOCK_GETTIME=ON \
      -DJACK_SHARED=OFF
  make -C build
}

package() {
  
  make DESTDIR="${pkgdir}"  -C build install
  rm -rf "${pkgdir}"/usr/{bin,include,share}

  sed -i "s/libSDL2\.a/libSDL2main.a/g" "$pkgdir"/usr/lib32/cmake/SDL2/SDL2Targets-noconfig.cmake

  install -dm 755 "${pkgdir}"/usr/share/licenses
  ln -s sdl2 "${pkgdir}"/usr/share/licenses/lib32-sdl2
}

# vim: ts=2 sw=2 et:
