# Maintainer: swearchnick <swearchnick[at]gmail[dot]com>
pkgname=svtplay-dl
pkgver=4.2
pkgrel=2
pkgdesc="Media downloader for play sites (e.g. SVT Play)"
url="https://github.com/spaam/svtplay-dl"
license=('MIT')
arch=('any')
depends=('python-cryptography' 'python-requests' 'ffmpeg' 'python-yaml')
optdepends=('python-pysocks: proxy support')
makedepends=('python-setuptools' 'perl')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/spaam/svtplay-dl/archive/$pkgver.tar.gz")
sha256sums=('3a78ff59e6933018374b3f3d8b84379d35640c7068a730afb990e22cb512cc5b')

package() {

  cd "$srcdir/$pkgname-$pkgver"

  python setup.py install --root="$pkgdir/" --optimize=1

  pod2man --section 1 --utf8 --center "${pkgname} manual" --release "${pkgname} ${pkgver}" --date "${pkgver}" ${pkgname}.pod ${pkgname}.1
  gzip -9 ${pkgname}.1
  install -Dm644 "$srcdir/$pkgname-$pkgver/${pkgname}.1.gz" "$pkgdir/usr/share/man/man1/${pkgname}.1.gz"

  install -Dm644 "$srcdir/$pkgname-$pkgver/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

}
