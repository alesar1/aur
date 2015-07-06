# Maintainer: Thomas Jost <schnouki@schnouki.net>
pkgname=kcc
pkgver=4.6.1
pkgrel=1
pkgdesc="Kindle Comic Converter converts comic files or folders to ePub or Panel View MOBI"
arch=(any)
url="https://github.com/ciromattia/kcc"
license=('ISC')
depends=('python' 'python-pillow>=2.8.2' 'python-psutil>=3.0.0' 'python-pyqt5' 'python-slugify>=1.1.2' 'python-scandir>=1.1')
makedepends=('zip')
optdepends=(
  'kindlegen: for .mobi generation'
  'unrar: for CBR/RAR support'
  'p7zip: for 7z/CB7 support'
)
source=(https://github.com/ciromattia/$pkgname/archive/$pkgver.tar.gz)
md5sums=('d77f1d1a6576b1b9b5546caa7292d440')
sha256sums=('eb47aec956387be58c4e63afd392b08aa987bef7f10b816f7ced0ccc716370ac')

build() {
  cd "$srcdir/$pkgname-$pkgver"
  python setup.py build
}

package() {
  cd "$srcdir/$pkgname-$pkgver"
  python setup.py install -O2 --root "$pkgdir"

  install -Dm644 icons/comic2ebook.png "$pkgdir"/usr/share/pixmaps/comic2ebook.png
  install -Dm644 LICENSE.txt "$pkgdir"/usr/share/licenses/$pkgname/LICENSE.txt

  cd "$pkgdir"/usr/share/pixmaps
  ln -s comic2ebook.png kcc.png
}
