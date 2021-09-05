pkgname=website-stalker
pkgver=0.12.1
pkgrel=2
pkgdesc="Track changes on websites via git"
arch=('x86_64' 'aarch64' 'armv6h' 'armv7h')
url="https://github.com/EdJoPaTo/${pkgname}"
license=('LGPL2.1')
depends=('gcc-libs' 'zlib')
makedepends=('cargo')
provides=("${pkgname}")

source=($pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz)
sha256sums=('27ac3414fc1666c3febf5fcba0ecc751e584d317ca8668c60b1bd44448202ba8')

build() {
  cd $pkgname-$pkgver
  RUSTUP_TOOLCHAIN=stable cargo build --release --locked --all-features
}

package() {
  cd $pkgname-$pkgver
  install -Dm755 target/release/$pkgname -t "${pkgdir}/usr/bin"
  install -Dm644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
  install -Dm644 README.md -t "${pkgdir}/usr/share/doc/${pkgname}"

  install -Dm644 "completions/${pkgname}.bash" "${pkgdir}/usr/share/bash-completion/completions/${pkgname}.bash"
  install -Dm644 "completions/${pkgname}.fish" "${pkgdir}/usr/share/fish/vendor_completions.d/${pkgname}.fish"
  install -Dm644 "completions/_${pkgname}" "${pkgdir}/usr/share/zsh/site-functions/_${pkgname}"

  # migrate all /usr/local/lib thingies to /usr/lib
  sed -i "s#/local/#/#g" systemd/**/*
  # Set the executable path
  sed -i "s#^ExecStart=.*${pkgname}#ExecStart=/usr/bin/${pkgname}#g" systemd/**/*.service

  install -Dm644 "systemd/system/systemd.service" "${pkgdir}/usr/lib/systemd/system/${pkgname}.service"
  install -Dm644 "systemd/system/systemd.timer" "${pkgdir}/usr/lib/systemd/system/${pkgname}.timer"
  install -Dm644 "systemd/system/sysusers.conf" "${pkgdir}/usr/lib/sysusers.d/${pkgname}.conf"
  install -Dm644 "systemd/system/tmpfiles.conf" "${pkgdir}/usr/lib/tmpfiles.d/${pkgname}.conf"

  install -Dm644 "systemd/user/systemd.service" "${pkgdir}/usr/lib/systemd/user/${pkgname}.service"
  install -Dm644 "systemd/user/systemd.timer" "${pkgdir}/usr/lib/systemd/user/${pkgname}.timer"
}
