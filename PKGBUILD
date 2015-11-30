# Maintainer: Andy Weidenbaum <archbaum@gmail.com>
# Contributor: foalsrock <foalsrock at gmail dot-com>
# Contributor: jebaum <jebaum at ucla dot edu>

pkgname=fzf
pkgver=0.11.1
pkgrel=1
pkgdesc="Command-line fuzzy finder"
arch=('armv6h' 'i686' 'x86_64')
depends=('ncurses')
makedepends=('git' 'go' 'make')
optdepends=('fish: fish keybindings'
            'fzf-extras: fzf keybindings from junegunn wiki and dotfiles'
            'tmux: fzf-tmux script for launching fzf in a tmux pane'
            'vim-fzf: vim plugin'
            'zsh: zsh keybindings')
url="https://github.com/junegunn/fzf"
license=('MIT')
source=($pkgname-$pkgver.tar.gz::https://codeload.github.com/junegunn/$pkgname/tar.gz/$pkgver
        git+https://github.com/junegunn/$pkgname.wiki
        key-bindings.bash.patch
        key-bindings.zsh.patch)
sha256sums=('611cf1c2da6a7c0d5b582a203774c4d1145c55b601413eb1e7c03e9410bb6733'
            'SKIP'
            'fc981d036d85d0b9a5e6ba65f84b1c0f86bcee2dabb09238e1edfa1f49a85b63'
            '0b89bf1d6d372b9a8d5927e58151157d42848086a252979006b89b72242c52e6')
install=fzf.install

prepare() {
  cd "$srcdir/$pkgname-$pkgver"

  msg2 'Fixing bash and zsh key bindings...'

  msg2 'Making fzf key-bindings.bash source bash completions...'
  patch -p1 < "$srcdir/key-bindings.bash.patch"

  msg2 'Making fzf key-bindings.zsh source zsh completions...'
  patch -p1 < "$srcdir/key-bindings.zsh.patch"

  msg2 'Removing instances of "source ~/.fzf.bash"...'
  sed -i 's@source ~/.fzf.bash;\s@@' shell/key-bindings.bash

  msg2 'Removing instances of "source ~/.fzf.zsh"...'
  sed -i 's@source ~/.fzf.zsh;\s@@' shell/key-bindings.zsh
}

build() {
  cd "$srcdir/$pkgname-$pkgver"

  msg2 'Building...'
  GOPATH="$srcdir" TMPDIR=/tmp go get -u github.com/junegunn/fzf/...
}

package() {
  cd "$srcdir/$pkgname-$pkgver"

  msg2 'Installing documentation...'
  for _doc in README.md install uninstall; do
    install -Dm 644 $_doc -t "$pkgdir/usr/share/doc/fzf"
  done

  msg2 'Installing wiki...'
  cp -dpr --no-preserve=ownership "$srcdir/fzf.wiki" \
    "$pkgdir/usr/share/doc/fzf/wiki"

  msg2 'Installing manual...'
  install -Dm 644 "man/man1/fzf.1" -t "$pkgdir/usr/share/man/man1"

  msg2 'Installing executables...'
  install -Dm 755 "$srcdir/bin/fzf" -t "$pkgdir/usr/bin"
  install -Dm 755 "bin/fzf-tmux" -t "$pkgdir/usr/bin"

  msg2 'Installing bash completion and keybindings...'
  install -Dm 644 "shell/completion.bash" \
    "$pkgdir/usr/share/bash-completion/completions/fzf"
  install -Dm 755 "shell/key-bindings.bash" "$pkgdir/etc/profile.d/fzf.bash"

  msg2 'Installing fish keybindings...'
  install -Dm 644 "shell/key-bindings.fish" \
    "$pkgdir/usr/share/fish/functions/fzf.fish"

  msg2 'Installing zsh completion and keybindings...'
  install -Dm 644 "shell/completion.zsh" \
    "$pkgdir/usr/share/zsh/site-functions/_fzf"
  install -Dm 755 "shell/key-bindings.zsh" "$pkgdir/etc/profile.d/fzf.zsh"

  msg2 'Cleaning up pkgdir...'
  find "$pkgdir" -type d -name .git -exec rm -r '{}' +
}
