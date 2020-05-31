# Maintainer: kenneth Endfinger <kaendfinger@gmail.com>

pkgname=scalafmt
pkgver=2.5.3
pkgrel=1
pkgdesc="code formatter for the Scala programming language"
arch=('any')
url="https://scalameta.org/scalafmt/"
license=('Apache')
depends=('java-environment=11' 'bash')
makedepends=('coursier')

build() {
  coursier \
    bootstrap org.scalameta:scalafmt-cli_2.13:"${pkgver}" \
    -r bintray:scalameta/maven \
    -o "${srcdir}/scalafmt.bin" \
    --standalone \
    --force \
    --main org.scalafmt.cli.Cli
}

package() {
  install -Dm755 "${srcdir}/scalafmt.bin" "${pkgdir}/usr/bin/scalafmt"
}




