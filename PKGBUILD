pkgname=pacproxy-bin
pkgver=2.0.5
pkgrel=1
pkgdesc='A no-frills local HTTP proxy server powered by a proxy auto-config (PAC) file'
url=https://github.com/williambailey/pacproxy
arch=(x86_64)
license=(Apache)
source=(pacproxy\_$pkgver\_linux_amd64.tar.gz::https://github.com/williambailey/pacproxy/releases/download/v$pkgver/pacproxy\_$pkgver\_linux_amd64.tar.gz)
sha256sums=(b14cdb39e4c791776c19cd5b0e626bd892a3cfc2876141d77b24c1919e29cc39)

package() {
	install -Dm 755 pacproxy\_$pkgver\_linux_amd64/pacproxy $pkgdir/usr/bin/pacproxy
}
