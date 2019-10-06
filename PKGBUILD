# Maintainer :  Kr1ss $(echo \<kr1ss+x-yandex+com\>|sed s/\+/./g\;s/\-/@/)


pkgname=delta-diff
_name=${pkgname%-diff}
pkgver=0.0.12
pkgrel=1

pkgdesc="A syntax-highlighting pager for git"
arch=('x86_64')
url="https://github.com/dandavison/$_name"
license=('MIT')

depends=('git')
makedepends=('rust')

source=("$url/archive/$pkgver.tar.gz")
sha256sums=('ca15401c59da7dca4ff2bb8d07b3612e171351fce834bcf12a6edeb19195b58e')


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
