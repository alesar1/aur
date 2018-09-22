# Maintainer: Chih-Hsuan Yen <yan12125@gmail.com>
# This package is forked from community/gpac; original contributors:
# Contributor: Eric Bélanger <eric@archlinux.org>

_pkgname=gpac
pkgname=$_pkgname-git
pkgver=0.5.2.r3540.g96ec5b596
pkgrel=2
epoch=1
pkgdesc="A multimedia framework based on the MPEG-4 Systems standard (git version)"
arch=('i686' 'x86_64')
url="https://gpac.wp.imt.fr/"
license=('LGPL')
depends=('ffmpeg' 'glu' 'libxv' 'openssl')
makedepends=('git' 'jack' 'a52dec' 'freetype2' 'faad2' 'libmad' 'mesa' 'sdl2')
optdepends=('jack: for jack support'
            'a52dec: for A52 support'
            'faad2: for AAC support'
            'libmad: for mp3 support'
            'sdl2: for sdl support')
provides=("$_pkgname=$pkgver")
conflicts=("$_pkgname")
source=(git+https://github.com/gpac/gpac.git)
sha256sums=('SKIP')

pkgver() {
  cd $_pkgname
  ( set -o pipefail
    git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g;s/^v//g'
  )
}

build() {
  cd $_pkgname
  ./configure --prefix=/usr --use-js=no
  make
}

package() {
  cd $_pkgname
  make DESTDIR="$pkgdir" install install-lib
}
