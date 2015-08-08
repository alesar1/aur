# Maintainer: Lukas Jirkovsky <l.jirkovsky@gmail.com>
pkgname=vogl-git
pkgver=715.c3a7466
pkgrel=1
pkgdesc="An OpenGL debugger"
arch=('i686' 'x86_64')
url="https://github.com/ValveSoftware/vogl"
license=('MIT')
# if building the glxspheres64 demo, add following dependencies:
#     'glu' 'freeglut' 'libxxf86vm' 'sdl2'
depends=('qt5-base' 'libjpeg-turbo' 'tinyxml' 'libunwind' 'sdl2')
makedepends=('git' 'cmake')
optdepends=('steam: trace games from Steam'
            'lib32-vogl-git: trace 32bit applications in 64bit Arch')
#options=('!buildflags' '!makeflags')
install=vogl.install
source=('git+https://github.com/ValveSoftware/vogl.git' 'vogl.sh' '0001-fix-qt-5.5-build-error.patch')
md5sums=('SKIP'
         'c9e00b04f42f293c10cfe3622911d345' '14d358c27719a4c317f741118b8a23ab')

[[ $CARCH == 'x86_64' ]] && _EXTRAFLAGS="-DBUILD_X64=On" || _EXTRAFLAGS="-DBUILD_X64=Off"

pkgver() {
  cd "$srcdir/vogl"
  echo $(git rev-list --count master).$(git rev-parse --short master)
}

prepare() {
  cd "$srcdir/vogl"
  git am "$srcdir/0001-fix-qt-5.5-build-error.patch"
  # disable building of glxspheres64 demo to keep the dependencies minimal
  sed -i 's|add_subdirectory.*glxspheres.*|#&|' CMakeLists.txt
  # disable tests
  sed -i 's|add_subdirectory.*vogltest.*|#&|' CMakeLists.txt
}

build() {
  mkdir -p "$srcdir/build"

  # build vogl
  cd "$srcdir/build"
  cmake ../vogl \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_SKIP_RPATH=True \
    $_EXTRAFLAGS
  make
}

package() {
  cd "$srcdir/vogl"

  install -d -m755 "$pkgdir/opt/"
  cp -a vogl_build "$pkgdir/opt/vogl"

  install -D -m755 "$srcdir/vogl.sh" "$pkgdir/etc/profile.d/vogl.sh"

  install -D -m644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
