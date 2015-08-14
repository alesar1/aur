# Maintainer: Oliver Jaksch <ojaksch@com-in.de>

pkgname=libretro-prosystem-git
pkgver=65.d37def2
pkgrel=1
pkgdesc="libretro implementation of ProSystem. (Atari 7800)"
arch=('i686' 'x86_64' 'arm' 'armv6h')
url="https://github.com/libretro/prosystem-libretro"
license=('GPL')
depends=('zlib')
makedepends=('git')

_libname=prosystem_libretro
_gitname=prosystem-libretro
source=("git+https://github.com/libretro/${_gitname}.git"
        "https://raw.github.com/libretro/libretro-super/master/dist/info/${_libname}.info")
md5sums=('SKIP'
         'SKIP')

pkgver() {
  cd "${_gitname}"
  echo $(git rev-list --count HEAD).$(git rev-parse --short HEAD)
}

build() {
  cd "${_gitname}"
  make
}

package() {
  install -Dm644 "${_gitname}/${_libname}.so" "${pkgdir}/usr/lib/libretro/${_libname}.so"
  install -Dm644 "${_libname}.info" "${pkgdir}/usr/lib/libretro/${_libname}.info"
}
