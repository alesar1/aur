# Maintainer: Andy Weidenbaum <archbaum@gmail.com>

pkgname=vim-fzf
pkgver=0.11.3
pkgrel=1
pkgdesc="Fuzzy finder for Vim, inspired by ctrlp.vim and the likes"
arch=('any')
depends=('fzf' 'vim')
groups=('vim-plugins')
url="https://github.com/junegunn/fzf"
license=('MIT')
source=($pkgname-$pkgver.tar.gz::https://codeload.github.com/junegunn/${pkgname##vim-}/tar.gz/$pkgver)
sha256sums=('e8ad329ce79073db416446c28239b6519cb5a5ff3c0504ad38c2850e45147f7e')
install=vimdoc.install

prepare() {
  cd "$srcdir/${pkgname##vim-}-$pkgver"

  msg2 'Setting fzf-tmux binary location to /usr/bin/fzf-tmux...'
  sed -i "/^let s:fzf_tmux/s@expand.*@'/usr/bin/fzf-tmux'@" plugin/fzf.vim
}

package() {
  cd "$srcdir/${pkgname##vim-}-$pkgver"

  msg 'Installing docs...'
  install -Dm 644 README.md -t "$pkgdir/usr/share/doc/vim-fzf"

  msg 'Installing plugin...'
  install -dm 755 "$pkgdir/usr/share/vim/vimfiles"
  cp -dpr --no-preserve=ownership plugin "$pkgdir/usr/share/vim/vimfiles"

  msg 'Cleaning up pkgdir...'
  find "$pkgdir" -type f -name .gitignore -exec rm -r '{}' +
  find "$pkgdir" -type d -name .git -exec rm -r '{}' +
}
