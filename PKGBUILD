# Maintainer: German Lashevich <german.lashevich@gmail.com>

pkgver=0.3.2

_binname=totp

pkgname=rustotpony
pkgrel=1
pkgdesc='RusTOTPony — CLI manager of one-time password generators aka Google Authenticator'
provides=('totp')
conflicts=('rustotpony-bin')
arch=('i686' 'x86_64' 'armv6h' 'armv7h')
url="https://github.com/zebradil/${pkgname}"
license=('MIT')
# depends=('libx11' 'libxkbfile')
makedepends=('rust' 'cargo')
source=("${pkgname}-${pkgver}::https://github.com/zebradil/${pkgname}/archive/${pkgver}.tar.gz")
sha1sums=('e8f275db1b56c1df0174c40e7185b386c803a9b3')

build() {
  cd "${pkgname}-${pkgver}"
  cargo build --release
}

package() {
  install -Dm755 "${srcdir}/${pkgname}-${pkgver}/target/release/${_binname}" "${pkgdir}/usr/bin/${_binname}"
}
