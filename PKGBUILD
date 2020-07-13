# $Id$
# Maintainer: Alexey Trifonov <otaku [at] rambler dot ru>
# Contributor: Alexander F Rødseth <xyproto@archlinux.org>
# Contributor: Roman Kyrylych <roman@archlinux.org>
# Contributor: yosh64 <yosh64.at.gmail.dot.com>

pkgname=mtpaint-wjaguar
pkgver=3.49.29
pkgrel=1
pkgdesc='Simple paint program for creating icons and pixel based artwork (Dmitry Groshev''s fork)'
arch=('x86_64')
url='https://github.com/wjaguar/mtPaint'
license=('GPL3')
depends=('gtk3' 'giflib' 'openjpeg' 'lcms2' 'libwebp' 'libtiff')
optdepends=('gifsicle: for exporting GIF files from mtPaint')
provides=('mtpaint')
conflicts=('mtpaint')
source=("git+https://github.com/wjaguar/mtPaint.git#commit=ff0a801413e612f74fe4c5d251e4bf36c6628013")
sha256sums=('SKIP')

prepare() {
  cd "mtPaint"

  # Recommended by Mark Tyler himself
  sed -i 's:$LIBS $LDFLAGS:$LDFLAGS $LIBS:' configure
}

build() {
  cd "mtPaint"

  ./configure --prefix=/usr --mandir=/usr/share/man man intl GIF jpeg tiff cflags lcms2 jp2 webp gtk3
  make
}

package() {
  make -C "mtPaint" DESTDIR="$pkgdir" install
}
