# Maintainer: Jonian Guveli <https://github.com/jonian/>
pkgname=ruby2.0-bin
pkgver=2.0.0_p0
pkgrel=1
pkgdesc="An object-oriented language for quick and easy programming"
arch=("x86_64")
url="http://www.ruby-lang.org/en"
license=("BSD" "custom")
depends=("openssl" "libffi" "libyaml")
provides=("rubygems2.0" "rake2.0")
source=("https://rvm_io.global.ssl.fastly.net/binaries/arch/libc-2.15/x86_64/ruby-${pkgver//_/-}.tar.bz2")
md5sums=("SKIP")

package() {
  mkdir -p "$pkgdir/opt"

  cp -a "$srcdir/ruby-${pkgver//_/-}" "$pkgdir/opt/ruby-${pkgver//_/-}"
}

