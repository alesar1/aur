# Maintainer: Thor77 <thor77 at thor77 dot org>

pkgname=perl-magick
pkgver=7.0.4
_srcrel=3
pkgrel=1
pkgdesc="An objected-oriented Perl interface to ImageMagick"
arch=('i686' 'x86_64')
url="http://www.imagemagick.org/script/perl-magick.php"
license=('Apache 2.0')
deps=('perl')
source=("http://www.imagemagick.org/download/ImageMagick-$pkgver-$_srcrel.tar.xz")
md5sums=('94ccdcf91ce0a156ca5335fbc16536b1')

build() {
        cd "$srcdir/ImageMagick-$pkgver-$_srcrel"
        ./configure --prefix=/usr -with-perl
        make
}

test() {
	make test
}

package() {
        cd "$srcdir/ImageMagick-$pkgver-$_srcrel"
        make DESTDIR="$pkgdir/" install
}
