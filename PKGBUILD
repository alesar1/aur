# Maintainer: Vianney le Clément <vleclement AT gmail·com>
pkgname=jbig2enc-git
pkgver=20110728
pkgrel=1
pkgdesc="A JBIG2 image encoder"
arch=('i686' 'x86_64')
url="https://github.com/agl/jbig2enc"
license=('Apache')
depends=('gcc-libs' 'leptonica>=1.68' 'libpng' 'libjpeg' 'libtiff')
makedepends=('git')

_gitroot="https://github.com/agl/jbig2enc.git"
_gitname="jbig2enc"

build() {
  cd "$srcdir"
  msg "Connecting to GIT server..."

  if [ -d $_gitname ] ; then
    cd $_gitname && git pull origin
    msg "The local files are updated."
  else
    git clone $_gitroot $_gitname
  fi

  msg "GIT checkout done or server timeout"

  rm -rf "$srcdir/$_gitname-build"
  git clone "$srcdir/$_gitname" "$srcdir/$_gitname-build"
  cd "$srcdir/$_gitname-build"

  msg "Patching sources..."
  sed -i 's@-I${LEPTONICA}/src@-I/usr/include/leptonica@' Makefile
  sed -i 's@${LEPTONICA}/src/.libs/liblept.a@-llept@' Makefile

  msg "Starting make..."
  make
}

package() {
  cd "$srcdir/$_gitname-build"
  install -D jbig2 "$pkgdir/usr/bin/jbig2"
}
