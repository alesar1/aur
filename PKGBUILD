# Maintainer: George Ornbo <george@shapeshed.com>

pkgname=st-solarized-dark
appname='st'
pkgver=0.7
pkgrel=2
pkgdesc='A simple virtual terminal emulator for X. Patched for solarized dark and Inconsolata font.'
arch=('i686' 'x86_64')
license=('MIT')
depends=('libxext' 'libxft')
makedepends=('ncurses')
url="http://st.suckless.org"
source=(http://dl.suckless.org/st/$appname-$pkgver.tar.gz
        http://st.suckless.org/patches/solarized/st-no_bold_colors-$pkgver.diff
        http://st.suckless.org/patches/solarized/st-solarized-dark-$pkgver.diff)

sha256sums=('f7870d906ccc988926eef2cc98950a99cc78725b685e934c422c03c1234e6000'
        '2e8cdbeaaa79ed067ffcfdcf4c5f09fb5c8c984906cde97226d4dd219dda39dc'
        '4782f52c4147a352579586c1b066f9fd1da934e580cbd3b78943f058394d9883')

prepare() {
  cd "$srcdir/$appname-$pkgver"
  patch -i "$srcdir/st-no_bold_colors-$pkgver.diff"
  patch -i "$srcdir/st-solarized-dark-$pkgver.diff"
  cp config.def.h config.h
  sed -i 's/Liberation Mono:pixelsize=12:antialias=true:autohint=true/Inconsolata:pixelsize=16:antialias=true:autohint=true/' config.h 
}

build() {
  cd "$srcdir/$appname-$pkgver"
  make X11INC=/usr/include/X11 X11LIB=/usr/lib/X11
}

package() {
  cd "$srcdir/$appname-$pkgver"
  make PREFIX=/usr DESTDIR="$pkgdir" TERMINFO="$pkgdir/usr/share/terminfo" install
  # Avoid conflict with ncurses package
  rm "$pkgdir/usr/share/terminfo/s/st"
  rm "$pkgdir/usr/share/terminfo/s/st-256color"
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  install -Dm644 README "$pkgdir/usr/share/doc/$pkgname/README"
}
