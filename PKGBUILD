# Maintainer: swearchnick <swearchnick[at]gmail[dot]com>
pkgname=svtplay-dl
pkgver=2.1
pkgrel=1
pkgdesc="Media downloader for play sites (e.g. SVT Play)"
url="https://github.com/spaam/svtplay-dl"
license=('MIT')
arch=('any')
depends=('rtmpdump' 'python-crypto' 'python-requests' 'ffmpeg' 'python-yaml')
optdepends=('python-pysocks: proxy support')
makedepends=('python-setuptools')
source=(https://github.com/spaam/svtplay-dl/archive/$pkgver.tar.gz)
sha256sums=('de90e41524f6ac47aba7502340cc15e1345ecefaaf99a5120af315d836a5c684')

package() {

  cd "$srcdir/$pkgname-$pkgver"

  python setup.py install --root="$pkgdir/" --optimize=1

  pod2man --section 1 --utf8 --center "${pkgname} manual" --release "${pkgname} ${pkgver}" --date "${pkgver}" ${pkgname}.pod ${pkgname}.1
  gzip -9 ${pkgname}.1
  install -Dm644 "$srcdir/$pkgname-$pkgver/${pkgname}.1.gz" "$pkgdir/usr/share/man/man1/${pkgname}.1.gz"

  install -Dm644 "$srcdir/$pkgname-$pkgver/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

}
