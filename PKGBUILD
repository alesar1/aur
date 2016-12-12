# Maintainer: Alexander F Rødseth <xyproto@archlinux.org>
# Contributor: Christoph Zeiler <rabyte*gmail>
# Contributor: Rickard Gustafsson <rickard@allyourbase.se>
# Contributor: Nathan Owe <ndowens04 at gmail>
# Contributor: Stefan Husmann <stefan-husmann@t-online.de>
# Contributor: Alexej Magura <agm2819*gmail*>
# Contributor: Joel Klinghed <the_jk@yahoo.com>
# Contributor: Paweł Tomak <pawel@tomak.eu>

pkgname=pike
pkgver=8.0.370
pkgrel=1
pkgdesc='Dynamic programming language with a syntax similar to Java and C'
arch=('x86_64' 'i686')
url='http://pike.lysator.liu.se/'
license=('GPL2' 'LGPL' 'MPL')
depends=('gtksourceview2' 'sane' 'libzip' 'libmysqlclient' 'gtkglarea' 'nettle')
makdepends=('nettle')
source=("http://pike.lysator.liu.se/pub/pike/all/$pkgver/Pike-v$pkgver.tar.gz"
        "pike-disable_libdir_reset-0.patch")
sha256sums=('fd7dc1f80d82625d3e4704941a92802312a01f5cbcf8554d14ac82d82b2daf42'
            '311916764ab9485899c603bbe51ef7b8d9b453c7e0f160ec5bcedcacf8a0ce3d')

prepare() {
  cd "Pike-v$pkgver"

  patch -p1 -i ../pike-disable_libdir_reset-0.patch
}

build() {
  cd "Pike-v$pkgver"

  # Thank you for the flags Gentoo <3
  # http://sources.gentoo.org/cgi-bin/viewvc.cgi/gentoo-x86/dev-lang/pike/pike-7.8.352-r2.ebuild?view=markup
  make CONFIGUREARGS=" \
    --prefix=/usr \
    --libdir=/usr/lib \
    --disable-make_conf \
    --disable-noopty-retry \
    --without-cdebug \
    --without-bundles \
    --without-copt \
    --without-libpdf \
    --without-ssleay \
    --with-crypt \
    --with-gif \
    --with-gmp \
    --with-bignums \
    --without-machine-code \
    --with-weak-curves"
}

package() {
  cd "Pike-v$pkgver"

  make buildroot="$pkgdir" INSTALLARGS='--traditional' install_nodoc
  rm -rf "$pkgdir/usr/"{doc,man}
  install -Dm644 man/pike.1 "$pkgdir/usr/share/man/man1/pike.1"
}

# vim:set ts=2 sw=2 et:
