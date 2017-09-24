# Contributor: shacristo <shacristo at gmail dot com>
# Maintainer: Zeph <zeph33@gmail.com>

pkgname=workbench
_pkgname=WorkBench
pkgver=1.8.1
pkgrel=1
pkgdesc="Subversion client written in python."
arch=('i686' 'x86_64')
url="http://pysvn.tigris.org/"
license=('APACHE')
depends=('python2-pysvn>=1.8.0' 'wxpython')
source=(http://pysvn.barrys-emacs.org/source_kits/pysvn-$pkgname-$pkgver.tar.gz \
  workbench \
  workbench.desktop)
md5sums=('3b707a95f09e3fb4d674b8a73df7631a'
         '53bfd152b2c12ab2ead9b2d3f01c4f45'
         '671568d7cf11a327e21f2b3f89a80495')

build() {
  cd $srcdir/pysvn-$pkgname-$pkgver/Source
	sed -i -e "s/\['2.9'\]/\['2.8'\]/g" wb_main.py
}
package() {
  _pyver=`python2 -V 2>&1|sed -e 's/.* 2\.\([0-9]\).*/\1/'`
  cd $srcdir/pysvn-$pkgname-$pkgver
  mkdir -p ${pkgdir}/usr/share/doc/
  install -Dm644 Source/wb.png $pkgdir/usr/share/pixmaps/wb.png
  install -Dm644 $srcdir/workbench.desktop $pkgdir/usr/share/applications/workbench.desktop
  mv Docs ${pkgdir}/usr/share/doc/workbench
  mkdir -p ${pkgdir}/usr/lib/python2.${_pyver}/site-packages
  mv Source ${pkgdir}/usr/lib/python2.${_pyver}/site-packages/workbench
  install -D -m755 ${srcdir}/workbench ${pkgdir}/usr/bin/workbench
}

