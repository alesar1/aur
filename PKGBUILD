# Maintainer :  Kr1ss $(echo \<kr1ss+x-yandex+com\>|sed s/\+/./g\;s/\-/@/)
# Contributor : ccorn


pkgname=git-delta
_name="${pkgname#*-}"
pkgver=0.8.0
pkgrel=3

pkgdesc='A syntax-highlighting pager for git and diff output'
arch=('i686' 'x86_64' 'arm' 'armv7h' 'armv6h' 'aarch64')
url="https://github.com/dandavison/$_name"
license=('MIT')

makedepends=('rust')
depends=('git' 'libgit2')

backup=("etc/gitconfig.$_name")
source=("$pkgname-$pkgver.tgz::$url/archive/$pkgver.tar.gz")
sha256sums=('706b55667de221b651b0d938dfbb468112b322ed41a634d3ca5c8bd861b19e8a')

# lto fails, ref: https://aur.archlinux.org/packages/git-delta/#comment-811625
options=('!lto')


_setup_build_env() {
  # Assist chroot builds with a persistent cargo cache
  if [ -d "$startdir/.cargo" ]; then
    export CARGO_HOME="${CARGO_HOME:-$startdir/.cargo}"
  elif [ "$1" = "-v" ]; then
    msg2 "NOTE : If you're building in a (clean) chroot and want a persistant
            cargo cache folder specific for this package, you can create
            an empty '.cargo' directory next to the PKGBUILD.  This will
            then be recognized and used as the CARGO_HOME cache. (Except
            when the CARGO_HOME variable is already set in your environ-
            ment.)"
  fi

  # git2 cannot be built with current nightly due to a regression; for ref.:
  # https://github.com/rust-lang/rust/issues/85574
  export RUSTUP_TOOLCHAIN=stable
}

prepare() {
  sed -i "/path *=/s|=.*|= /etc/gitconfig.$_name|" "$_name-$pkgver/themes.gitconfig"
}

build() {
  _setup_build_env -v
  cd "$_name-$pkgver"
  cargo build --release --locked --target-dir ./target
}

check() {
  _setup_build_env
  cd "$_name-$pkgver"
  cargo test --release --locked --target-dir ./target
}

package() {
  cd "$_name-$pkgver"
  install -Dm755 "target/release/$_name"  -t"$pkgdir/usr/bin/"
  install -Dm644 themes.gitconfig           "$pkgdir/etc/gitconfig.$_name"
  install -Dm644 {README,CONTRIBUTING}.md -t"$pkgdir/usr/share/doc/$pkgname/"
  install -Dm644 LICENSE                  -t"$pkgdir/usr/share/licenses/$pkgname/"
  cd etc
  install -Dm644 completion/completion.bash "$pkgdir/usr/share/bash-completion/completions/$_name"
  install -Dm644 completion/completion.zsh  "$pkgdir/usr/share/zsh/site-functions/_$_name"
  install -Dm755 bin/*                    -t"$pkgdir/usr/lib/$pkgname/"
}


# vim: ts=2 sw=2 et ft=PKGBUILD:
