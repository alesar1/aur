# Maintainer: Sainnhe Park <sainnhe@gmail.com>
pkgname=gruvbox-material-git
pkgdesc="gruvbox-material theme for vim"
pkgrel=1
pkgver=v1.0.1.r23.g3287311
arch=('any')
url="https://github.com/sainnhe/gruvbox-material"
license=('MIT')
md5sums=('SKIP')
makedepends=('git')
depends=('vim')
optdepends=('vim-airline-git' 'vim-lightline-git')
_pkgname=gruvbox-material
source=("git+https://github.com/sainnhe/gruvbox-material.git")

pkgver() {
  cd "$srcdir/$_pkgname"
  git describe --long --tags| sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

package() {
  cd "$srcdir/$_pkgname"
  install -Dm644 colors/gruvbox-material.vim "$pkgdir/usr/share/vim/vimfiles/colors/gruvbox-material.vim"
  install -Dm644 doc/gruvbox-material.txt "$pkgdir/usr/share/vim/vimfiles/doc/gruvbox-material.txt"
  install -Dm755 ${srcdir}/${_pkgname}/autoload/airline/themes/gruvbox_material.vim ${pkgdir}/usr/share/vim/vimfiles/autoload/airline/themes/gruvbox_material.vim
  install -Dm755 ${srcdir}/${_pkgname}/autoload/lightline/colorscheme/gruvbox_material.vim ${pkgdir}/usr/share/vim/vimfiles/autoload/lightline/colorscheme/gruvbox_material.vim
}

# vim:set ts=2 sw=2 et:
