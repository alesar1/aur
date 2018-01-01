# Maintainer: Tomasz Paś <kierek93@gmail.com>

pkgname=libretro-mupen64plus-git
_gitname=mupen64plus-libretro
pkgver=633.6f80cbc
pkgrel=1
pkgdesc="libretro port of Mupen64 Plus"
arch=('i686' 'x86_64' 'arm' 'armv6h' 'armv7h')
url="https://github.com/libretro/mupen64plus-libretro"
license=('custom' 'GPL' 'LGPL')
depends=('libretro-core-info')
makedepends=('git')
source=("${_gitname}::git://github.com/libretro/${_gitname}.git")
groups=('libretro')

md5sums=('SKIP')

pkgver() {
  cd "${_gitname}"
  echo $(git rev-list --count HEAD).$(git rev-parse --short HEAD)
}

build() {
  cd "${_gitname}"
  if grep -q odroid /proc/cpuinfo ;then
   platform=odroid make WITH_DYNAREC=arm
  elif grep -q BCM /proc/cpuinfo ;then
   platform=rpi make WITH_DYNAREC=arm
  elif [ $CARCH == "i686" ];then
   make WITH_DYNAREC=x86
  else
   make WITH_DYNAREC=$CARCH
  fi
}

package() {
  install -Dm644 "${_gitname}/mupen64plus_libretro.so" "${pkgdir}/usr/lib/libretro/libretro-mupen64plus.so"
}
