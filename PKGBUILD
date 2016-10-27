# Maintainer: Rhinoceros <https://aur.archlinux.org/account/rhinoceros>

pkgname=vim-recover-git
pkgver=r170.eed74fb
pkgrel=1
pkgdesc='A Vim plugin to show a diff, whenever recovering a buffer'
arch=('any')
url='http://www.vim.org/scripts/script.php?script_id=3068'
license=('custom') # see `:h license` in vim
groups=('vim-plugins')
depends=('vim')
optdepends=('python: for using cvim')
makedepends=('git')
provides=('vim-recover')
conflicts=('vim-recover')
install=vimdoc.install
source=('git+https://github.com/chrisbra/Recover.vim.git')
sha256sums=('SKIP')

pkgver() {
  cd 'Recover.vim'
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
  _installpath="${pkgdir}/usr/share/vim/vimfiles"
  mkdir -p "${_installpath}"
  cp -r Recover.vim/{autoload,contrib,doc,plugin} "${_installpath}"

  _licencepath="${pkgdir}/usr/share/licenses/$pkgname/"
  mkdir -p "${_licencepath}"
  ln -s /usr/share/vim/vim80/doc/uganda.txt "${_licencepath}/LICENSE"
}
