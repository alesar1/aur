# Maintainer: Emmanuel Gil Peyrot <linkmauve@linkmauve.fr>

_realname=jaconv
pkgname=python-jaconv
pkgver=0.2.3
pkgrel=1
pkgdesc="Pure-Python Japanese character interconverter for Hiragana, Katakana, Hankaku and Zenkaku"
arch=('any')
url="https://github.com/ikegami-yukino/jaconv"
license=('MIT')
depends=('python')

source=("https://files.pythonhosted.org/packages/47/1e/2ad7d52f8b51b998c00aa1375f09d05fb5cb749ee65aa7ea0032b30c1bb6/$_realname-$pkgver.tar.gz")
sha256sums=('c8d79ad7b44adc38634476f5ff4ee42b6d92ed4b7b01d31addd98f3567132bd8')

package() {
  cd $_realname-$pkgver
  python setup.py install --root="$pkgdir"
  install -dm755 "$pkgdir"/usr/share/doc/$pkgname/
  install -Dm644 README.rst README_JP.rst "$pkgdir"/usr/share/doc/$pkgname/
  install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}
