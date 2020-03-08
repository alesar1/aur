# Maintainer :  Kr1ss $(echo \<kr1ss+x-yandex+com\>|sed s/\+/./g\;s/\-/@/)


pkgname=git-delta
_name="${pkgname#*-}"
pkgver=0.0.17
pkgrel=2

pkgdesc='A syntax-highlighting pager for git and diff output'
arch=('x86_64')
url="https://github.com/dandavison/$_name"
license=('MIT')

depends=('git')
makedepends=('rust')

source=("$url/archive/$pkgver.tar.gz")
sha256sums=('ac1f26ac5ea10d43b300675189c49437dcae7a9fca7e51f615058ab0550d27e5')


prepare() {
  # Assist chroot builds with a persistent cargo cache (hat tip @ccorn for this patch)
  msg2   "NOTE : If you're building in a (clean) chroot and want a persistant"
  plain "        cargo cache folder specific for this package, you can create"
  plain "        an empty '.cargo' directory next to the 'PKGBUILD'. This will"
  plain "        be recognized and used as CARGO_HOME."
  if [ -d "$startdir/.cargo" ]; then
    export CARGO_HOME="${CARGO_HOME:-$startdir/.cargo}"
  fi
}

build() {
  cd "$_name-$pkgver"
  cargo build --release --locked
}

check() {
  cd "$_name-$pkgver"
  cargo test --release --locked
}

package() {
  cd "$_name-$pkgver"
  install -Dm755 "target/release/$_name"     -t"$pkgdir/usr/bin/"
  install -Dm644 README.md                   -t"$pkgdir/usr/share/doc/$_name/"
  install -Dm644 LICENSE                     -t"$pkgdir/usr/share/licenses/$_name/"
  install -Dm644 completion/bash/completion.sh "$pkgdir/usr/share/bash-completion/completions/$_name"
}


# vim: ts=2 sw=2 et ft=PKGBUILD:
