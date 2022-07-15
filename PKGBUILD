# Maintainer: Łukasz Moroz <lukaszmoroz@gmail.com>

pkgname=nautilus-copy-path
pkgver=1.6.0
pkgrel=1
pkgdesc="Configurable extension for Nautilus to copy path, URI, or name"
arch=('any')
url="https://github.com/chr314/nautilus-copy-path"
license=('MIT')
depends=('python-nautilus' 'python-gobject')
backup=("usr/share/nautilus-python/extensions/nautilus-copy-path/config.json")
install=$pkgname.install
source=("$pkgname-$pkgver.tar.gz::https://github.com/chr314/nautilus-copy-path/archive/$pkgver.tar.gz")
md5sums=('dad12e640bb7054f566bf19afecbb53f')

package() {
    cd "$pkgname-$pkgver"
    install -Dm644 -t "$pkgdir/usr/share/licenses/nautilus-copy-path" LICENSE
    install -Dm644 -t "$pkgdir/usr/share/nautilus-python/extensions" nautilus-copy-path.py
    install -Dm644 -t "$pkgdir/usr/share/nautilus-python/extensions/nautilus-copy-path" nautilus_copy_path.py config.json translation.py
    install -Dm644 -t "$pkgdir/usr/share/nautilus-python/extensions/nautilus-copy-path/translations" translations/*.json
}
