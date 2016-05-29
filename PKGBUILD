# Maintainer: Peter Ivanov <ivanovp@gmail.com>
# Contributor: Alec Ari <neotheuser@ymail.com>

pkgname=linuxcnc-sim
pkgver=20160527
pkgrel=1
pkgdesc="It can interpret G-code and simulate a CNC machine (formerly EMC2)."
arch=('i686' 'x86_64')
license=('GPL2')
url="http://linuxcnc.org/"
depends=('bc' 'bwidget' 'tcl' 'tk' 'xorg-server' 'python2-libgnome' 'python2-imaging' 'tkimg' 'python2-gtkglext' 'tclx' 'boost' 'boost-libs')
install=$pkgname.install
_gitname='linuxcnc'
source=($_gitname::'git://git.linuxcnc.org/git/linuxcnc.git' 'boost.patch' 'image-to-gcode.patch')
#source=($_gitname::'git://git.linuxcnc.org/git/linuxcnc.git#tag=739df958aca9d246daad36f439c82bfbeac681b9' 'boost.patch')
md5sums=('SKIP'
        'ba6948dc5dc155849f55039e454cdbd6'
        'c31d34a7ba567bd664f362a52f8bb03b')
makedepends=('git')
PKGEXT='.pkg.tar'

pkgver() {
  cd "$srcdir/$_gitname"
  git log -1 --format="%cd" --date=short | tr -d '-'
}

build () {
  find . -iname fixpaths.py -o -iname checkglade|xargs perl -p -i -e "s/python/python2/"
  cd $srcdir/$_gitname/src
  pwd
  patch -p0 <../../image-to-gcode.patch
#  patch -p1 <../../boost.patch
#  #This Makefile line fixes a seg fault due to changed CFLAGS
# cp -PR $srcdir/Makefile $srcdir/$pkgname-$pkgver/src/Makefile
#  #This fixes build for updated Python libraries
#  cp -PR $srcdir/Submakefile $srcdir/$pkgname-$pkgver/src/hal/drivers/Submakefile
#  #Another Python fix
#  cd $srcdir/$pkgname-$pkgver
#  patch -Np1 < $srcdir/jepler-modsilent.patch
#  cd $srcdir/$pkgname-$pkgver/src
  ./autogen.sh
  ./configure --enable-simulator --without-libmodbus --prefix=/usr --with-python=/usr/bin/python2.7 --enable-non-distributable=yes || return 1
  make || return 1
}

package() {
  cd $srcdir/linuxcnc/src
  make install DESTDIR=${pkgdir} || return 1
  #Fix lsmod
#  sed -i 's/sbin/bin/g' $pkgdir/etc/init.d/realtime
  #Stop hiding it from GNOME
  cp -PR $srcdir/linuxcnc/share/applications $pkgdir/usr/share/
  mkdir -p $pkgdir/etc/xdg
  cp -PR $srcdir/linuxcnc/share/menus $pkgdir/etc/xdg/
}

