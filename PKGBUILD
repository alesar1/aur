# Maintainer: j605

_pkgname=sccache
pkgname=$_pkgname-bin
pkgver=0.2.8
pkgrel=1
pkgdesc="ccache-like tool with experimental rust support"
arch=("x86_64")
url="https://github.com/mozilla/sccache"
license=("Apache")
provides=("sccache")
conflicts=("sccache")
source=("https://github.com/mozilla/$_pkgname/releases/download/$pkgver/$_pkgname-$pkgver-$CARCH-unknown-linux-musl.tar.gz")

package() {
  cd "sccache-$pkgver-$CARCH-unknown-linux-musl"
  install -Dm 644 README.md "${pkgdir}/usr/share/doc/${_pkgname}"
  install -Dm 755 sccache "${pkgdir}/usr/bin/sccache"
}
md5sums=('451612c0fc34718699ca3e50fed712c7')
