# Maintainer : Lauri Niskanen <ape@ape3000.com>

pkgname=libretro-gambatte-git
pkgver=573.30d9e79
pkgrel=1
pkgdesc="libretro implementation of libgambatte. (Game Boy Color)"
arch=('i686' 'x86_64' 'arm' 'armv6h')
url="git@github.com:libretro/gambatte-libretro.git"
license=('GPLv2')
makedepends=('git')

_libname=gambatte_libretro
_gitname=gambatte-libretro
source=("git+https://github.com/libretro/${_gitname}.git"
        "https://raw.github.com/libretro/libretro-super/master/dist/info/${_libname}.info")
md5sums=('SKIP'
         'SKIP')

pkgver() {
  cd "${_gitname}"
  echo $(git rev-list --count HEAD).$(git rev-parse --short HEAD)
}

build() {
  cd "${_gitname}/libgambatte"
  make -f Makefile.libretro
}

package() {
  install -Dm644 "${_gitname}/libgambatte/${_libname}.so" "${pkgdir}/usr/lib/libretro/${_libname}.so"
  install -Dm644 "${_libname}.info" "${pkgdir}/usr/lib/libretro/${_libname}.info"
}
