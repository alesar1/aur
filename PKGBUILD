# Contributor: David Scholl <djscholl at gmail dot com>

pkgname=leo
pkgver=5.7.3
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
source=(${pkgname}-${pkgver}.tar.gz::https://github.com/leo-editor/leo-editor/archive/${pkgver}.tar.gz
        leo.desktop
        leo.xml)
sha256sums=('4021a614f26b0a043818e67b97a24bffb54c90efca8709c045ddbaab3c4a5512'
            '7b326791378eefedecee2474c4e1a497838d2a06ff4259a195d817c38588395b'
            '630852279324b0d9acf656c4684f16777d64f49b4062bd101c5cddbfc33c82cb')

build() {
  cd "${pkgname}-${pkgver}"
  python setup.py build
}

package() {
  cd "${pkgname}-${pkgver}"

  python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
  install -D -m644 LICENSE.TXT "$pkgdir/usr/share/licenses/$pkgname/LICENSE.TXT"
  install -D -m644 "$srcdir/leo.desktop" "$pkgdir/usr/share/applications/leo.desktop"
  install -D -m644 "$srcdir/leo.xml" "$pkgdir/usr/share/mime/packages/leo.xml"
  install -D -m644 "leo/Icons/application-x-leo-outline.png" "$pkgdir/usr/share/pixmaps/leo.png"
}
