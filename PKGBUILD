# Maintainer: Ronuk Raval <ronuk.raval at gmail dot com>
# Contributor: Narrat <autumn-wind at web dot de>
# Contributor: David Scholl <djscholl at gmail dot com>

pkgname=leo
pkgver=5.9
pkgrel=1
pkgdesc="Literate programmer's editor, outliner, and project manager"
arch=('any')
url="http://leoeditor.com/"
license=('custom')
depends=(
    python
    python-setuptools
    desktop-file-utils
    shared-mime-info

    python-pyqt5
    python-docutils
    python-flexx
    jupyter-nbformat
    python-pylint
    python-pyflakes
    python-sphinx
    python-future
    python-six
)
optdepends=('python-pyenchant: spellchecking support')
source=(
    ${pkgname}-${pkgver}.tar.gz::https://github.com/leo-editor/leo-editor/archive/v${pkgver}.tar.gz
    leo.desktop
    leo.xml
)
sha256sums=(
    5636da46f167630c6515636c8057fb8dfa819351f3eac7d0d9137122a9234bd5
    7b326791378eefedecee2474c4e1a497838d2a06ff4259a195d817c38588395b
    630852279324b0d9acf656c4684f16777d64f49b4062bd101c5cddbfc33c82cb
)

build() {
    cd "leo-editor-${pkgver}"
    python setup.py build
}

package() {
    cd "leo-editor-${pkgver}"

    python setup.py install --skip-build --root="$pkgdir/" --optimize=1
    install -D -m644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
    install -D -m644 "$srcdir/leo.desktop" "$pkgdir/usr/share/applications/leo.desktop"
    install -D -m644 "$srcdir/leo.xml" "$pkgdir/usr/share/mime/packages/leo.xml"
    install -D -m644 "leo/Icons/application-x-leo-outline.png" "$pkgdir/usr/share/pixmaps/leo.png"
}
