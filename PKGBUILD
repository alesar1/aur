# Maintainer:  Oliver Jaksch <ojaksch@com-in.de>

pkgname=libretro-hatari-git
pkgver=5417.9f18e35
pkgrel=1
pkgdesc="libretro implementation of Hatari. (Atari ST/STE/TT/Falcon)"
arch=('i686' 'x86_64' 'arm' 'armv6h')
url="https://github.com/libretro/hatari"
license=('GPL')
depends=('zlib')
makedepends=('git')

_libname=hatari_libretro
_gitname=hatari
source=("git+https://github.com/libretro/${_gitname}.git"
        "https://raw.github.com/libretro/libretro-super/master/dist/info/${_libname}.info")
md5sums=('SKIP'
         'SKIP')

pkgver() {
  cd "${_gitname}"
  echo $(git rev-list --count HEAD).$(git rev-parse --short HEAD)
}

build() {
  cd ${_gitname}
  make -f Makefile.libretro
}

package() {
  install -Dm644 "${_gitname}/${_libname}.so" "${pkgdir}/usr/lib/libretro/${_libname}.so"
  install -Dm644 "${_libname}.info" "${pkgdir}/usr/lib/libretro/${_libname}.info"
}
