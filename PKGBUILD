# Maintainer: Rodrigo Gryzinski <rogryza@gmail.com>

pkgname=asyncomplete.vim
pkgver=2.0.0
pkgrel=1
pkgdesc="async completion in pure vim script for vim8 and neovim"
arch=('any')
url="https://github.com/prabirshrestha/asyncomplete.vim"
license=('MIT')
depends=('vim')
source=(
  LICENSE
  "${pkgname}-${pkgver}::https://github.com/prabirshrestha/asyncomplete.vim/archive/v${pkgver}.tar.gz"
)
sha512sums=('9229902712c34a246e3c711154d7e04a153c7b7e307d399ee363f5a06d9bf07d40f271c7b68757e422f28b145cf1313da5637ba75c51d2aaa4a25b4bde1075f2'
            '52e60844088ad58426738b87617c42c13254bdf1d4269a0e1a8c6bf38fe037945d4b7aa829fef6c293d8725bdbf5e15de50fe7ea0cf384ec3ef8ebe2228097e0')

package() {
  VIMFILES=$pkgdir/usr/share/vim/vimfiles
  cd ${srcdir}/${pkgname}-${pkgver}
  mkdir -p $VIMFILES
  install -Dm 644 $srcdir/LICENSE $pkgdir/usr/share/licenses/${pkgname}/LICENSE
  for dir in autoload doc plugin; do
    cp -r "$dir" $VIMFILES
    chmod 755 -R $VIMFILES/$dir
  done
}
