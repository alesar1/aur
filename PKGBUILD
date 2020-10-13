# Maintainer: Jorge Araya Navarro <jorgejavieran@yahoo.com.mx>
# Contributor: Cristian Porras <porrascristian@gmail.com>
# Contributor: Matthew Bentley <matthew@mtbentley.us>

pkgname=godot-debug
_pkgname=godot
pkgver=3.2.3
pkgrel=2
pkgdesc="An advanced, feature packed, multi-platform 2D and 3D game engine"
url="http://www.godotengine.org"
license=('MIT')
arch=('i686' 'x86_64')
makedepends=('scons' 'yasm')
depends=('libxcursor' 'libxinerama' 'freetype2' 'alsa-lib' 'libxrandr' 'libxi' 'libglvnd')
conflicts=("godot-git" "godot-pulse")
_arch=''
if test "$CARCH" == x86_64; then
    _arch=('64')
else
  _arch=('32')
fi

source=(
  "https://github.com/godotengine/godot/archive/${pkgver}-stable.tar.gz"
)
sha256sums=('4c2a8e7da1ad05c6223b0ff6cf2be124dad6708b56a8ec9910dc2aaf82a553ae')

build() {
  cd "${srcdir}"/${_pkgname}-${pkgver}-stable

  scons platform=x11 \
        tools=yes \
        target=debug \
        use_llvm=no \
        colored=yes \
        pulseaudio=yes bits=${_arch} -j $((`nproc`+1))
}

package() {

  cd "${srcdir}"

  install -Dm644 "${srcdir}"/${_pkgname}-${pkgver}-stable/misc/dist/linux/org.godotengine.Godot.desktop "${pkgdir}"/usr/share/applications/godot.desktop
  install -Dm644 "${srcdir}"/${_pkgname}-${pkgver}-stable/icon.svg "${pkgdir}"/usr/share/pixmaps/godot.svg

  cd "${srcdir}"/${_pkgname}-${pkgver}-stable

  install -D -m755 bin/godot.x11.tools.${_arch} "${pkgdir}"/usr/bin/godot
  install -D -m644 "${srcdir}"/${_pkgname}-${pkgver}-stable/LICENSE.txt "${pkgdir}"/usr/share/licenses/godot/LICENSE
  install -D -m644 "${srcdir}"/${_pkgname}-${pkgver}-stable/misc/dist/linux/godot.6 "${pkgdir}"/usr/share/man/man6/godot.6
}
