# Maintainer: (epsilom) Xavier Corredor <xavier.corredor.llano (a) gmail.com>

pkgname=pycharm-professional
pkgver=4.5.2
_pkgver=4.5.2
pkgrel=1
pkgdesc="Powerful Python and Django IDE. Professional version."
arch=('any')
options=('!strip')
url="http://www.jetbrains.com/pycharm/"
conflicts=('pycharm' 'pycharm-community')
provides=('pycharm')
license=('Commercial')
install=${pkgname}.install
depends=('java-environment' 'giflib' 'python-coverage' 'python2-coverage' 'ipython' 'ipython2' 'ttf-font')
source=(http://download.jetbrains.com/python/$pkgname-$_pkgver.tar.gz
        'pycharm-professional.desktop'
        'pycharm-professional.install'
        'pycharm')
sha256sums=('a736a1d648ff7ae742b86ff278b2eeb53c61c875037d44f863b1abc78ffdf7b5'
            '016db1860a8b36d408c827f90aeb04b9d55cf21ea36788a9d8510cc54fae1c49'
            'b45a7d833ee206b9e3d680c935fe5fa7a4b1ddd8a80e304d776e61f9874487af'
            'ad59415f8ac2c623f9c61453caf70bf75b6b14db2f09807e4ea339a2dc740be9')

package() {
  # base
  cd $srcdir
  mkdir -p $pkgdir/opt/$pkgname
  cp -R $srcdir/pycharm-$_pkgver/* $pkgdir/opt/$pkgname
  mkdir -p $pkgdir/usr/share/{applications,pixmaps}
  mkdir -p $pkgdir/usr/bin/
  install -Dm644 $pkgdir/opt/$pkgname/bin/pycharm.png $pkgdir/usr/share/pixmaps/pycharm.png
  # lisense
  mkdir -p $pkgdir/usr/share/licenses/$pkgname/
  install -Dm644 $srcdir/pycharm-$_pkgver/license/PyCharm_license.txt $pkgdir/usr/share/licenses/$pkgname/PyCharm_license.txt
  # exec
  install -Dm755 $startdir/pycharm $pkgdir/usr/bin/
  # app file desktop
  install -Dm644 $startdir/pycharm-professional.desktop $pkgdir/usr/share/applications/
  
  # delete some conflicts files for i686 
  if [[ $CARCH = 'i686' ]]; then
          rm -f $pkgdir/opt/$pkgname/bin/libyjpagent-linux64.so
          rm -f $pkgdir/opt/$pkgname/bin/fsnotifier64
  fi

  # enable anti-aliasing text in pycharm options
  if [[ $CARCH = 'i686' ]]; then
	#echo '-Dawt.useSystemAAFontSettings=on' >> $pkgdir/opt/$pkgname/bin/pycharm.vmoptions
        echo '-Dswing.aatext=true' >> $pkgdir/opt/$pkgname/bin/pycharm.vmoptions
  else
	#echo '-Dawt.useSystemAAFontSettings=on' >> $pkgdir/opt/$pkgname/bin/pycharm64.vmoptions
        echo '-Dswing.aatext=true' >> $pkgdir/opt/$pkgname/bin/pycharm64.vmoptions
  fi
  
}

# vim:set ts=2 sw=2 et:
