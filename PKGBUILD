# Maintainer:  JakobDev<jakobdev at gmx dot de>
# Contributor: Dimitris Kiziridis <ragouel at outlook dot com>

pkgname=jdtextedit
pkgver=9.1
pkgrel=2
pkgdesc="An advanced text editor"
arch=("any")
url="https://gitlab.com/JakobDev/jdTextEdit"
license=("GPL3")
depends=("python"
    "python-pyqt5"
    "python-qscintilla-qt5"
    "python-chardet"
    "python-requests"
    "python-cchardet"
    "python-editorconfig"
    "python-charset-normalizer"
    "python-jdtranslationhelper"
    "python-pyenchant"
    "python-setuptools")
makedepends=("python-sphinx" "gendesk" "gzip")
source=("${pkgname}-${pkgver}.tar.gz::https://gitlab.com/JakobDev/jdTextEdit/-/archive/${pkgver}/jdTextEdit-${pkgver}.tar.gz" "distribution.json")
sha256sums=("3f99bd69b3f2f9296409a08877d25ac6bb0aaa9ce9abc4dbf7bc050d76301b3e" "c0f33924bce00130cd94a64e65b633f2d633482e648388e91159eac33b712c13")

build() {
    cd "jdTextEdit-${pkgver}/doc"
    make man
    gzip -f "build/man/${pkgname}.1"
}

package() {
    cd "jdTextEdit-${pkgver}"
    python_version=$(python -c "import sys;print('{}.{}'.format(*sys.version_info))")
    python setup.py install --root="$pkgdir/" --optimize=1
    install -Dm644 "jdTextEdit/Logo.png" "${pkgdir}/usr/share/pixmaps/${pkgname}.png"
    install -Dm644 "${srcdir}/distribution.json" -t "${pkgdir}/usr/lib/python${python_version}/site-packages/jdTextEdit/"
    install -Dm644 "doc/build/man/${pkgname}.1.gz" -t "${pkgdir}/usr/share/man/man1"
    gendesk -f -n --pkgname "${pkgname}" \
        --pkgdesc "$pkgdesc" \
        --name "jdTextEdit" \
        --comment "$pkgdesc" \
        --exec jdTextEdit \
        --categories "TextEditor;Development;" \
        --icon "${pkgname}"
    install -Dm644 "${pkgname}.desktop" -t "${pkgdir}/usr/share/applications"
    install -Dm644 "LICENSE" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
