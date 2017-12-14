# Maintainer: David Scholl <djscholl at gmail dot com>
pkgname=leo
pkgver=5.6
pkgrel=1
pkgdesc="Literate programmer's editor, outliner, and project manager"
arch=('any')
url="http://leoeditor.com/"
license=('custom')
depends=('python-pyqt5' 'shared-mime-info' 'desktop-file-utils'  
         'python-setuptools')
optdepends=('python-pyenchant: spellchecking support'
            'python-docutils: viewrendered support' 
            'python-sphinx: documentation support')

install="leo.install"
source=(http://downloads.sourceforge.net/sourceforge/$pkgname/Leo-$pkgver.zip
        leo.desktop
        leo.xml)
sha256sums=('f1eb18bd30b229cfc3f8f38c07fb41e4619d19a6f9caef0714068e3c65045208'
            '7b326791378eefedecee2474c4e1a497838d2a06ff4259a195d817c38588395b'
            '630852279324b0d9acf656c4684f16777d64f49b4062bd101c5cddbfc33c82cb')

package() {
  cd $srcdir/Leo-$pkgver
  cp leo/dist/setup.py leo/dist/setup.cfg leo/dist/leo-install.py ./
  python setup.py install --root=$pkgdir
  install -D -m644 LICENSE.TXT $pkgdir/usr/share/licenses/$pkgname/LICENSE.TXT
  install -D -m644 $srcdir/leo.desktop $pkgdir/usr/share/applications/leo.desktop
  install -D -m644 $srcdir/leo.xml $pkgdir/usr/share/mime/packages/leo.xml
  install -D -m644 leo/Icons/application-x-leo-outline.png $pkgdir/usr/share/pixmaps/leo.png
}
