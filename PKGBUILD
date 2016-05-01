# Maintainer: Thomas Jost <schnouki@schnouki.net>
pkgname=kcc
pkgver=5.1.1
pkgrel=1
pkgdesc="Kindle Comic Converter converts comic files or folders to ePub or Panel View MOBI"
arch=(any)
url="https://github.com/ciromattia/kcc"
license=('ISC')
depends=('python>=3.5' 'python-pillow>=3.2.0' 'python-psutil>=3.2.2' 'python-pyqt5' 'python-raven>=5.13.0' 'python-slugify>=1.2.0')
makedepends=('zip')
optdepends=(
  'kindlegen: for .mobi generation'
  'unrar: for CBR/RAR support'
  'p7zip: for 7z/CB7 support'
)
source=(https://github.com/ciromattia/$pkgname/archive/$pkgver.tar.gz)
md5sums=('82eb1edfcf623994e31d3042ec0f8440')
sha256sums=('3f1f24202f7fac353d292c83009eabed46ae3fc4f61b045d3937a6de81c9d2a3')

build() {
  cd "$srcdir/$pkgname-$pkgver"
  python setup.py build_binary --pyz

  # Patch desktop file
  sed -i 's#kindlecomicconverter/comic2ebook#pixmaps/kcc#' other/linux/kindlecomicconverter.desktop

  # Madness...
  mkdir -p dist/"${pkgver}"
  cd dist/"${pkgver}"
  tar xf ../KindleComicConverter_linux_"${pkgver}".tar.gz

}

package() {
  cd "$srcdir/$pkgname-$pkgver/"

  # Desktop file
  install -Dm644 other/linux/kindlecomicconverter.desktop "$pkgdir/usr/share/applications/kindlecomicconverter.desktop"

  # "Built" files
  cd "dist/${pkgver}"

  for f in kcc kcc-c2e kcc-c2p; do
    install -Dm755 "$f" "$pkgdir/usr/bin/$f"
  done
  install -Dm644 kcc.png "$pkgdir/usr/share/pixmaps/kcc.png"
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/${pkgname}/LICENSE"
  install -Dm644 README.md "$pkgdir/usr/share/docs/${pkgname}/README.md"
}
