# Maintainer: Doug Newgard <scimmia22 at outlook dot com>

pkgname=efl-svn
pkgver=81889
pkgrel=1
pkgdesc="Enlightenment Foundation Libraries - Ecore, EDbus, Eet, Efreet, Eina, Eio, Embryo, Eo, & Evas"
arch=('i686' 'x86_64')
url="http://www.enlightenment.org"
license=('BSD' 'LGPL2.1' 'custom')
depends=('mesa' 'curl' 'giflib' 'libtiff' 'libpng' 'dbus'
         'fontconfig' 'fribidi' 'harfbuzz' 'liblinebreak'
         'libxcomposite' 'libxcursor' 'libxinerama' 'libxp' 'libxrandr'
         'libxss' 'libxtst' 'libsndfile')
makedepends=('subversion')
optdepends=('python2: to compare Eina benchmarks'
            'evas_generic_loaders-svn: Extra loaders for Evas')
conflicts=('ecore' 'ecore-svn' 'edbus' 'edbus-svn' 'eet' 'eet-svn'
           'efreet' 'efreet-svn' 'eina' 'eina-svn' 'eio' 'eio-svn'
           'embryo' 'embryo-svn' 'evas' 'evas-svn')
provides=('ecore' 'ecore-svn' 'edbus' 'edbus-svn' 'eet' 'eet-svn'
          'efreet' 'efreet-svn' 'eina' 'eina-svn' 'eio' 'eio-svn'
          'embryo' 'embryo-svn' 'evas' 'evas-svn')
options=('!libtool' '!emptydirs')
         
_svntrunk="http://svn.enlightenment.org/svn/e/trunk/efl"
_svnmod="efl"

build() {
  cd "$srcdir"

  msg "Connecting to SVN server...."

  if [[ -d "$_svnmod/.svn" ]]; then
    (cd "$_svnmod" && svn up -r "$pkgver")
  else
    svn co "$_svntrunk" --config-dir ./ -r "$pkgver" "$_svnmod"
  fi

  msg "SVN checkout done or server timeout"
  msg "Starting build..."

  rm -rf "$srcdir/$_svnmod-build"
  svn export "$srcdir/$_svnmod" "$srcdir/$_svnmod-build"
  cd "$srcdir/$_svnmod-build"

  sed -i 's:#!/usr/bin/env\ python:#!/usr/bin/python2:g' \
    src/scripts/eina/eina-bench-cmp

  ./autogen.sh --prefix=/usr \
	--libexecdir=/usr/lib \
	--enable-fb \
	--disable-tslib \
	--with-x11=xlib \
	--with-opengl=full \
	--enable-harfbuzz

  make
}

package() {
  cd "$srcdir/$_svnmod-build"
  make -j1 DESTDIR="$pkgdir" install

# install license files
  install -Dm644 "$srcdir/$_svnmod-build/COPYING" \
        "$pkgdir/usr/share/licenses/$pkgname/COPYING"
  install -Dm644 "$srcdir/$_svnmod-build/AUTHORS" \
        "$pkgdir/usr/share/licenses/$pkgname/AUTHORS"
  install -Dm644 "$srcdir/$_svnmod-build/licenses/COPYING.BSD" \
        "$pkgdir/usr/share/licenses/$pkgname/COPYING.BSD"
  install -Dm644 "$srcdir/$_svnmod-build/licenses/COPYING.SMALL" \
        "$pkgdir/usr/share/licenses/$pkgname/COPYING.SMALL"

  rm -r "$srcdir/$_svnmod-build"
}
