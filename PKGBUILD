# Mantainer: Bruno Galeotti <bgaleotti@gmail.com>

pkgname=php-ast
pkgver=1.0.1
pkgrel=1
pkgdesc="Extension exposing PHP 7 abstract syntax tree."
url="https://github.com/nikic/php-ast"
license=("BSD")
arch=("any")
depends=("php>=7")
makedepends=("php>=7")
backup=("etc/php/conf.d/ast.ini")
source=("https://github.com/nikic/php-ast/archive/v${pkgver}.tar.gz" "ast.ini")
sha512sums=('f06481ccb65de69ae4f04f15f29240ef064f5bc6461b00272a7a804a8b62f2e92d078f593820bbdf3191f02391dd407de8d53cd57219d1bc820443fe42543b2c'
            'a99dcb98e597dc2634f51ae9af80dce82350c0f0e45ec9c2eda23d53f40c06cfd2573fafe0660304b4ceb51f3d12a3f81445f3063ece1ca1166fb50a4d3967a8')

build() {
  cd $srcdir/$pkgname-$pkgver

  phpize
  ./configure --prefix=/usr
  make
}

package() {
  cd $srcdir/$pkgname-$pkgver

  install -Dm644 README.md $pkgdir/usr/share/doc/$pkgname/README.md
  install -Dm644 LICENSE $pkgdir/usr/share/licenses/$pkgname/LICENSE
  install -Dm644 $srcdir/ast.ini $pkgdir/etc/php/conf.d/ast.ini
  install -Dm744 modules/ast.so $pkgdir/usr/lib/php/modules/ast.so
}

# vim:set ts=2 sw=2 et:
