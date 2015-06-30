# Maintainer: roger rogerduran at gmail

pkgname=qtile
pkgver=0.9.1
pkgrel=2
pkgdesc="A full-featured, pure-Python tiling window manager."
arch=('any')
url="http://www.qtile.org"
license=('MIT')
depends=('python' 'pango' 'python-xcffib>=0.1.11' 'python-cairocffi')
makedepends=('python-distribute')
optdepends=('python-setproctitle: change the process name to qtile')
conflicts=('qtile-git')
install=${pkgname}.install
source=("https://github.com/qtile/qtile/archive/v${pkgver}.tar.gz")
md5sums=('0a24f8111d94cb07eae3b276b97fb042')

package() {
  cd "$srcdir/$pkgname-$pkgver/"
  # license
  msg "Copying license..."
  install -D -m 644 LICENSE $pkgdir/usr/share/licenses/$pkgname/LICENSE

  msg "Copying default config..."
  install -D -m 644 libqtile/resources/default_config.py $pkgdir/usr/share/doc/$pkgname/default_config.py

  msg "Copying desktop file..."
  install -D -m 644 resources/qtile.desktop $pkgdir/usr/share/xsessions/qtile.desktop

  # install
  msg "Running setup.py"
  python setup.py install --root=${pkgdir} --prefix=/usr
}
