# Maintainer: swearchnick <swearchnick[at]gmail[dot]com>
pkgname=svtplay-dl
pkgver=4.7
pkgrel=1
pkgdesc="Media downloader for play sites (e.g. SVT Play)"
url="https://github.com/spaam/svtplay-dl"
license=('MIT')
arch=('any')
depends=('python-cryptography' 'python-requests' 'ffmpeg' 'python-yaml')
optdepends=('python-pysocks: proxy support')
makedepends=('python-setuptools' 'perl')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/spaam/svtplay-dl/archive/$pkgver.tar.gz")
sha256sums=('bc4300917b1d1d2be7b5e81d192429dd9f74ca6d4e06ed83c7bcb72a7f28652d')

package() {

  cd "$srcdir/$pkgname-$pkgver"

  python setup.py install --root="$pkgdir/" --optimize=1

  pod2man --section 1 --utf8 --center "${pkgname} manual" --release "${pkgname} ${pkgver}" --date "${pkgver}" ${pkgname}.pod ${pkgname}.1
  gzip -9 ${pkgname}.1
  install -Dm644 "$srcdir/$pkgname-$pkgver/${pkgname}.1.gz" "$pkgdir/usr/share/man/man1/${pkgname}.1.gz"

  install -Dm644 "$srcdir/$pkgname-$pkgver/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

}
