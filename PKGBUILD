# Maintainer: Hoàng Văn Khải <hvksmr1996@gmail.com>

# This file is automatically generated. Do not edit.

pkgname=pretty-exec
pkgver=0.0.25
source=(pretty-exec-0.0.25.tar.gz::https://github.com/KSXGitHub/pretty-exec/archive/0.0.25.tar.gz https://raw.githubusercontent.com/KSXGitHub/pretty-exec/master/LICENSE.md)
sha1sums=(SKIP SKIP)
# This PKGBUILD is not a full PKGBUILD
# pkgname, pkgver, source, and sha1sums are to be generated
pkgdesc='Print command and execute it'
pkgrel=0
arch=(x86_64)
license=(MIT)
url='https://github.com/KSXGitHub/pretty-exec'
makedepends=(cargo)

build() {
  cd "$srcdir/pretty-exec-$pkgver"
  cargo build --release --locked
}

package() {
  cd "$srcdir/pretty-exec-$pkgver"
  install -Dm755 target/release/pretty-exec "$pkgdir/usr/bin/pretty-exec"
  install -Dm644 LICENSE.md "$pkgdir/usr/share/$pkgname/LICENSE.md"
  install -Dm644 exports/completion.bash "$pkgdir/usr/share/bash-completion/completions/pretty-exec"
  install -Dm644 exports/completion.fish "$pkgdir/usr/share/fish/completions/pretty-exec.fish"
  install -Dm644 exports/completion.zsh "$pkgdir/usr/share/zsh/site-functions/_pretty-exec"
}

