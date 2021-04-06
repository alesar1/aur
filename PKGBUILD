# Maintainer: Andrea Denisse Gómez-Martínez <aur at denisse dot dev>

pkgname=teleirc-bin
_pkgname=${pkgname%-bin}
pkgver=2.1.0
pkgrel=1
url="https://github.com/RITlug/teleirc"
pkgdesc='Go implementation of a Telegram <=> IRC bridge for use with any IRC channel and Telegram group.'
arch=(x86_64)
license=("GPL-3")
provides=($_pkgname)
conflicts=($_pkgname)
source=("${url}/releases/download/v${pkgver}/${_pkgname}-${pkgver}-linux-x86_64")
sha256sums=('7f4e21d274554e6dd463a9de0c062bbc5df4db33838bbe811a448291ee1c9ab2')
sha512sums=('7c8b408f6c01929c8769182a1e74822a6e6de397cb2d3cdc7aba5c41a247fe61b7a8370c3a5060f678cc3d24efd038001abe13402fba7e1843e9592cf324b0d7')
b2sums=('1b250cfe61f3104b4c6599bc337b2d4cd8fda42f1363a69d3f3f000d047cd7bd82958953a57649ffb1c4d77b8bfb50d17522320efefe1805b213639a6254a7c4')

prepare() {
  cd "$srcdir"

  mv ${_pkgname}-${pkgver}-linux-x86_64 "$_pkgname"
}

package() {
  install -Dm755 "$srcdir/$_pkgname" "$pkgdir/usr/bin/$_pkgname"
}
