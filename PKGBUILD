# Maintainer: yjun <jerrysteve1101 at gmail dot com>

# fork from https://aur.archlinux.org/cgit/aur.git/tree/PKGBUILD?h=onscripter-jh

pkgname=onscripter-jh-git
_gitname=${pkgname%-git}
pkgdesc="onscripter fork with custom improvements."
pkgver=2.fa80e64
pkgrel=1    
_ons_version="20140817"
arch=('x86_64' 'i686' 'aarch64' 'armv7h')
url="https://github.com/luhux/onscripter-jh"
# another fork, works as well
# url="https://github.com/LasmGratel/onscripter-jh"
license=('GPL2')
depends=('sdl_mixer'
         'sdl_ttf'
         'sdl_image'
         'libjpeg-turbo'
         'bzip2'
         'libvorbis'
         'lua51'
         'fontconfig'
         'smpeg')
makedepends=('git')
provides=('onscripter-jh')
conflicts=('onscripter-jh')
source=("git+${url}"
        "avifile-remove.patch"
        "target-optimizing.patch")
sha256sums=('SKIP'
            '11dab90831eaea86867675abef844f0bdd207545d157b49818b0557a441b8351'
            'a7f543d1d204d39ca066eea75b10142935a302b10dc9801a2eaa696950083951')

pkgver() {
  cd ${srcdir}/${_gitname}

  echo $(git rev-list --count HEAD).$(git rev-parse --short HEAD)
}

prepare() {
  cd ${srcdir}/${_gitname}

  patch -p1 < ${srcdir}/avifile-remove.patch
  patch -p1 < ${srcdir}/target-optimizing.patch
}

build() {
  cd ${srcdir}/${_gitname}

  make -f Makefile.Linux
}

package() {
  cd ${srcdir}/${_gitname}

  install -Dm 755 ${srcdir}/${_gitname}/onscripter ${pkgdir}/usr/bin/onscripter-jh
}
# vim: set sw=2 ts=2 et:
