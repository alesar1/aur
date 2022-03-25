# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=normcap
pkgver=0.3.3
pkgrel=1
pkgdesc="OCR powered screen-capture tool to capture information instead of images"
arch=('any')
url="https://dynobo.github.io/normcap"
license=('GPL')
depends=('leptonica' 'pyside6' 'python-pytesseract' 'tesseract' 'tesseract-data-eng')
makedepends=('python-pip' 'python-poetry')
changelog="$pkgname-CHANGELOG.md"
source=("$pkgname-$pkgver.tar.gz::https://github.com/dynobo/normcap/archive/refs/tags/v$pkgver.tar.gz"
#        "https://pypi.org/packages/source/${pkgname:0:1}/$pkgname/$pkgname-$pkgver.tar.gz"
        "$pkgname.desktop")
sha256sums=('d89d6a32e55ecadaa5b3f5ed8dcfae92591630158cc1177f529373c9dd2b8b19'
            '29992fdb19773faa7582e44fe4394d4772984d5b7b9b7b347617c387f0a260f9')

build() {
  cd "$pkgname-$pkgver"
  poetry build --format wheel
}

package() {
  cd "$pkgname-$pkgver"
  PIP_CONFIG_FILE=/dev/null pip install --isolated --root="$pkgdir" --ignore-installed --no-deps dist/*.whl

  local site_packages=$(python -c "import site; print(site.getsitepackages()[0])")

  python -O -m compileall "${pkgdir}${site_packages}/"

  install -d "$pkgdir/usr/share/pixmaps/"
  ln -s "$site_packages/$pkgname/resources/$pkgname-256.png" "$pkgdir/usr/share/pixmaps/$pkgname.png"

  install -Dm644 "$srcdir/$pkgname.desktop" -t "$pkgdir/usr/share/applications/"
}
