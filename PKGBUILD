# Maintainer: Christian Rebischke <chris.rebischke[at]archlinux[dot]org>
_pkgname=nerdtree
pkgname=vim-nerdtree-git
pkgver=5.0.0.881.334fb0e
pkgrel=2
pkgdesc='Tree explorer plugin for navigating the filesystem'
arch=('any') 
url='https://github.com/scrooloose/nerdtree'
license=('custom:WTFPL')
depends=('vim')
makedepends=('git')
groups=('vim-plugins')
provides=('vim-nerdtree')
conflicts=('vim-nerdtree')
install="vimdoc.install"
source=("git+https://github.com/scrooloose/nerdtree"
        "vimdoc.install")
sha512sums=('SKIP'
            '37cb1bc1ba45d4626b6b274d39bacaa752679be31a7c16086aed71af9a071a911100748cc17df83808e95ff7bb57941b0b2246d485197a8e908b349466579c47')

pkgver() {
  cd ${_pkgname}
  printf "%s.%s.%s" "$(git describe --tags --abbrev=0)" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
  cd ${srcdir}/${_pkgname}
  install -d \
    "${pkgdir}/usr/share/vim/vimfiles/"{autoload,lib/nerdtree,doc,nerdtree_plugin,plugin,syntax}
  cp -dr lib/nerdtree/* "${pkgdir}/usr/share/vim/vimfiles/lib/nerdtree"
  cp -dr autoload/* "${pkgdir}/usr/share/vim/vimfiles/autoload"
  install -m644 doc/NERD_tree.txt "${pkgdir}/usr/share/vim/vimfiles/doc/"
  install -m644 nerdtree_plugin/{exec_menuitem,fs_menu}.vim \
    "${pkgdir}/usr/share/vim/vimfiles/nerdtree_plugin/"
  install -m644 plugin/NERD_tree.vim "${pkgdir}/usr/share/vim/vimfiles/plugin/"
  install -m644 syntax/nerdtree.vim "${pkgdir}/usr/share/vim/vimfiles/syntax/"
  install -D -m644 LICENCE "${pkgdir}/user/share/licenses/${_pkgname}/LICENSE"
}

# vim:set et sw=2 ts=2 tw=79:
