# Maintainer: Tomasz Paś <kierek93@gmail.com>
# Contributor:  prettyvanilla <prettyvanilla@posteo.at>
# Contributor: almostalive   <almostalive2003 at gmail dot com>

pkgname=libretro-pcsx-rearmed-git
pkgver=1342.ec665d1
pkgrel=1
pkgdesc="libretro implementation of PCSX ReARMed. (PlayStation)"
arch=('i686' 'x86_64' 'arm' 'armv6h' 'armv7h')
url="https://github.com/libretro/pcsx_rearmed"
license=('GPL')
conflicts=('libretro-pcsx_rearmed-git')
depends=('zlib' 'libretro-core-info')
makedepends=('git')
groups=('libretro')

_libname=pcsx_rearmed_libretro
_gitname=pcsx_rearmed
source=("git+https://github.com/libretro/${_gitname}.git")

md5sums=('SKIP')

pkgver() {
  cd "${_gitname}"
  echo $(git rev-list --count HEAD).$(git rev-parse --short HEAD)
}

build() {
  cd "${_gitname}"
  make -f Makefile.libretro
}

package() {
  install -Dm644 "${_gitname}/${_libname}.so" "${pkgdir}/usr/lib/libretro/${_libname}.so"
 }
