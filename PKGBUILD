# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=normcap
pkgver=0.3.13
pkgrel=1
pkgdesc="OCR powered screen-capture tool to capture information instead of images"
arch=('any')
url="https://dynobo.github.io/normcap"
license=('GPL')
depends=('leptonica' 'pyside6' 'python-certifi' 'python-pytesseract' 'wl-clipboard')
makedepends=('python-pip' 'python-poetry')
source=("$pkgname-$pkgver.tar.gz::https://github.com/dynobo/normcap/archive/refs/tags/v$pkgver.tar.gz"
#        "https://files.pythonhosted.org/packages/source/${pkgname::1}/$pkgname/$pkgname-$pkgver.tar.gz"
        "$pkgname.desktop")
sha256sums=('2ab67e66333c37d8e118faec3ddb414d5bd8b509a15387b230e245e19811f18e'
            '29992fdb19773faa7582e44fe4394d4772984d5b7b9b7b347617c387f0a260f9')

build() {
  cd "$pkgname-$pkgver"
  poetry build --format wheel
}

package() {
  cd "$pkgname-$pkgver"
  PIP_CONFIG_FILE=/dev/null pip install --isolated --root="$pkgdir" --ignore-installed --no-deps dist/*.whl

  install -Dm644 "assets/icons/$pkgname.svg" -t "$pkgdir/usr/share/icons/hicolor/scalable/apps/"
  install -Dm644 "$srcdir/$pkgname.desktop" -t "$pkgdir/usr/share/applications/"
}
