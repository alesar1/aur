# Maintainer: Kien Dang <mail at kien dot ai>
# Contributor: Chuah Chee Shian <shian15810@gmail.com>

pkgname=scala-cli
pkgver=0.1.18
pkgrel=1
pkgdesc='A command-line tool to interact with the Scala language'
arch=('x86_64')
url='https://scala-cli.virtuslab.org'
license=('Apache')
source=("$pkgname-$pkgver.gz::https://github.com/VirtusLab/scala-cli/releases/download/v$pkgver/scala-cli-$CARCH-pc-linux.gz")
sha256sums=('482d7886334aacdb1078d6458f8f96348d6780685c5eac9ebec1838803471ac1')

package() {
  SCALA_CLI="$pkgdir/usr/bin/scala-cli"

  install -Dm755 "$srcdir/$pkgname-$pkgver" "$SCALA_CLI"

  install -Dm644 <("$SCALA_CLI" install completions --format bash --env) "$pkgdir/usr/share/bash-completion/completions/scala-cli"

  "$SCALA_CLI" install completions --format zsh --env --output "$srcdir" > /dev/null
  install -Dm644 "$srcdir/zsh/_scala-cli" "$pkgdir/usr/share/zsh/site-functions/_scala-cli"
}
