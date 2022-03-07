# Maintainer: "Amhairghin" Oscar Garcia Amor (https://ogarcia.me)

pkgname=rockpass
pkgver=0.4.1
pkgrel=1
pkgdesc='A small and ultrasecure Lesspass database server written in Rust'
arch=('arm' 'armv6h' 'armv7h' 'aarch64' 'i686' 'x86_64')
url='https://github.com/ogarcia/rockpass'
license=('GPL3')
depends=('sqlite')
makedepends=('rustup')
backup=("etc/${pkgname}.conf")
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/ogarcia/${pkgname}/archive/${pkgver}.tar.gz"
        "${pkgname}.conf"
        "${pkgname}.service")
sha256sums=('006a9b27906a905ee485b47a3d30e93e38e71d8f6224d7df8198c92b007728c4'
            '4b3ccc143948592202993b7879ef6c422fbab4d8580696884a272f175c07e4ba'
            '5175d4d689c8f9b63a4d1409ab48d4ec91e37120cec8c4be1f8ba871363be424')

prepare() {
  cd "${pkgbase}-${pkgver}"
  rustup override set nightly-2022-01-01
}

build() {
  cd "${pkgbase}-${pkgver}"
  cargo build --release --locked --all-features --target-dir=target
}

package() {
  # binary
  install -Dm755 "${srcdir}/${pkgbase}-${pkgver}/target/release/${pkgname}" \
    "${pkgdir}/usr/bin/${pkgname}"
  # conf
  install -Dm644 "${srcdir}/${pkgname}.conf" "${pkgdir}/etc/${pkgname}.conf"
  # service
  install -Dm644 "${srcdir}/${pkgname}.service" "${pkgdir}/usr/lib/systemd/system/${pkgname}.service"
}
