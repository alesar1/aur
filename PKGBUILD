# Maintainer: David Scholl <djscholl at gmail dot com>
pkgname=leo
pkgver=5.1
pkgrel=1
pkgdesc="Literate programmer's editor, outliner, and project manager"
arch=('any')
url="http://leoeditor.com/"
license=('custom')
depends=('python-pyqt4' 'shared-mime-info')
optdepends=('python-pyenchant: spellchecking support'
            'python-docutils: viewrendered support' 
            'python-sphinx: documentation support')

install="leo.install"
source=(http://downloads.sourceforge.net/sourceforge/$pkgname/Leo-$pkgver-final.zip
        leo.desktop
        leo.xml)
sha256sums=('2d742f9825959ba5c7624d1179b9f3065e14e055c90272fbce199f91770de826'
            '7b326791378eefedecee2474c4e1a497838d2a06ff4259a195d817c38588395b'
            '630852279324b0d9acf656c4684f16777d64f49b4062bd101c5cddbfc33c82cb')
package() {
  cd $srcdir/Leo-$pkgver-final
  python setup.py install --root=$pkgdir
  install -D -m644 LICENSE.TXT $pkgdir/usr/share/licenses/$pkgname/LICENSE.TXT
  install -D -m644 $srcdir/leo.desktop $pkgdir/usr/share/applications/leo.desktop
  install -D -m644 $srcdir/leo.xml $pkgdir/usr/share/mime/packages/leo.xml
  install -D -m644 leo/Icons/application-x-leo-outline.png $pkgdir/usr/share/pixmaps/leo.png
}
