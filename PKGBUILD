
# Maintainer: Vincent Grande <shoober420@gmail.com>
# Contributor: Sven-Hendrik Haase <sh@lutzhaase.com>

pkgname=sdl2-minimal-hg
pkgver=2.0.9.r22.80f861112154
pkgrel=1
pkgdesc="A library for portable low-level access to a video framebuffer, audio output, mouse, and keyboard (Version 2)"
arch=('x86_64')
url="https://www.libsdl.org"
license=('MIT')
depends=('glibc' 'libxext' 'libxrender' 'libx11' 'libgl' 'libxcursor' 'libxxf86vm')
makedepends=('alsa-lib' 'mesa' 'libxrandr' 'libxinerama' 'libxkbcommon' 'libxss' 'cmake' 'libxxf86vm' 'mercurial' 'ninja' 'hidapi')
optdepends=('alsa-lib: ALSA audio driver'
            'libpulse: PulseAudio audio driver'
            'jack: JACK audio driver'
            'fcitx: Asian language support'
            'ibus: Asian language support'
            'libibus: Asian language support'
            'tslib: Touchscreen support'
            'wayland: wayland support'
            'wayland-protocols: wayland support'
            'hidapi: hidapi support')
source=("hg+http://hg.libsdl.org/SDL#branch=default")
provides=(sdl2)
conflicts=(sdl2 sdl2-hg)
sha512sums=('SKIP')

pkgver() {

#Thanks Kozeid

  cd "SDL"
  printf "%s.r%s.%s" \
    "$(hg log -r . -T "{latesttag}" | sed 's/^release-//')" \
    "$(hg identify -n)" \
    "$(hg identify -i)"
}

prepare() {
  cd SDL

  sed -i "s/LIBUSB libusb/LIBUSB libusb-1.0/g" cmake/sdlchecks.cmake

  patch -Np1 -i "${srcdir}"/fix-hidapi.patch

  rm -rf build
  mkdir build
}

build() {
  cd SDL/build
  cmake .. \
      -Bbuild \
      -GNinja \
      -DCMAKE_INSTALL_PREFIX=/usr \
      -DSDL_STATIC=OFF \
      -DSDL_DLOPEN=ON \
      -DARTS=OFF \
      -DESD=OFF \
      -DNAS=OFF \
      -DALSA=ON \
      -DHIDAPI=ON \
      -DPULSEAUDIO_SHARED=OFF \
      -DVIDEO_WAYLAND=OFF \
      -DRPATH=OFF \
      -DCLOCK_GETTIME=ON \
      -DJACK_SHARED=OFF
  ninja -C build
}

package() {
  cd SDL/build

  DESTDIR="${pkgdir}" ninja -C build install

  sed -i "s/libSDL2\.a/libSDL2main.a/g" "$pkgdir"/usr/lib/cmake/SDL2/SDL2Targets-noconfig.cmake

  install -Dm644 ../COPYING.txt "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

# vim: ts=2 sw=2 et:
