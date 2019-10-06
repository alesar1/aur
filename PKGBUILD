# Maintainer: Ponas <mykolas.peteraitis@gmail.com>
pkgname="netctl-tray"
pkgver=1.0.1
pkgrel=1
pkgdesc="A lightweight netctl tray app with notifications"
arch=('x86_64')
url="https://github.com/PonasKovas/netctl-tray"
license=('MIT')
makedepends=('cargo')
depends=('libnotify'
		 'qt5-base'
     'polkit')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/PonasKovas/netctl-tray/archive/${pkgver}.tar.gz")
md5sums=('69139441e5206110f271a708971b4596')

build () {
  cd "$srcdir/$pkgname-$pkgver"
  RUSTUP_TOOLCHAIN=stable \
    cargo build --release --locked
}

package() {
  cd "$srcdir/$pkgname-$pkgver"
  install -Dm755 target/release/netctl-tray "${pkgdir}/usr/bin/netctl-tray"
  install -Dm755 scripts/netctltray "${pkgdir}/etc/netctl/hooks/netctltray"
  install -d "${pkgdir}/usr/share/netctl-tray/"
  install -Dm755 scripts/netctltray "${pkgdir}/usr/share/netctl-tray/netctltray"
  install -Dm755 scripts/connect "${pkgdir}/usr/share/netctl-tray/connect"
  install -Dm755 scripts/disconnect "${pkgdir}/usr/share/netctl-tray/disconnect"
  install -Dm644 assets/* "${pkgdir}/usr/share/netctl-tray/"
  install -dm0750 "${pkgdir}/usr/share/polkit-1/rules.d/"
  install -Dm0644 scripts/netctl-tray.rules "${pkgdir}/usr/share/polkit-1/rules.d/netctltray.rules"
}