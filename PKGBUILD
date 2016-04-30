# Maintainer: Lex Black <autumn-wind at web dot de>
# Contributor: Joshua Stiefer <facedelajunk@gmail.com>
# Contributor: Arto Puranen <purcher@gmail.com>

pkgname=code-browser
pkgver=4.9
pkgrel=2
pkgdesc="folding text editor, designed to hierarchically structure any kind of text file and especially source code"
arch=(i686 x86_64)
url="http://code-browser.sourceforge.net/index.html"
license=('GPL2')
depends=('copper' 'gtk2' 'desktop-file-utils' 'gtk-update-icon-cache')
depends_x86_64=('llvm')
options=(!makeflags)
source=( #http://tibleiz.net/download/code-browser-${pkgver}-src.tar.gz
        http://tibleiz.net/download/code-browser-${pkgver}-src.zip
        code-browser.desktop
        cb.png)
md5sums=('b871f1b076ff657d3a4b1e929ceced91'
         '05b38d1b5cd303042aaaf50714655d83'
         '153dab5bcff69701d74ee911d80d6f83')


prepare() {
  cd "$pkgname-$pkgver"

  #sed -i "s/make/\$(MAKE)/" Makefile
  sed -i "s/-1.6//g" Makefile
}

build() {
  cd "$pkgname-$pkgver"

  if [ "$CARCH" == "x86_64" ];then
    make prefix=/usr llvm=1
  else
    make prefix=/usr OUTDIR=$srcdir/$pkgname-$pkgver
  fi
}

package() {
  cd "$pkgname-$pkgver"

  #install -dm755 ${pkgdir}/usr/bin/
  make prefix=/usr DESTDIR=${pkgdir} install

  install -D -m 644 ../code-browser.desktop ${pkgdir}/usr/share/applications/code-browser.desktop
  install -D -m 644 ../cb.png ${pkgdir}/usr/share/icons/hicolor/32x32/apps/cb.png
}

# vim:set ts=2 sw=2 et:
