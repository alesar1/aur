# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>
# Contributor: Vyacheslav Konovalov <🦀vk@protonmail.com>

pkgname=swarm-bee-bin
pkgver=1.5.0
pkgrel=1
pkgdesc='Swarm client implemented in Go, basic building block for Swarm Network'
arch=('x86_64' 'i686' 'armv7h' 'aarch64')
url='https://github.com/ethersphere/bee'
license=('BSD')
depends=('bash')
optdepends=('swarm-bee-clef: external signer for bee')
provides=('swarm-bee')
conflicts=('swarm-bee')
backup=('etc/bee/bee.yaml')
source=(
	"LICENSE-$pkgver::$url/raw/v$pkgver/LICENSE"
	'bee.sysusers'
	'bee.tmpfiles')
source_x86_64=("$pkgname-$pkgver-x86_64.deb::$url/releases/download/v$pkgver/bee_${pkgver}_amd64.deb")
source_i686=("$pkgname-$pkgver-i686.deb::$url/releases/download/v$pkgver/bee_${pkgver}_386.deb")
source_armv7h=("$pkgname-$pkgver-armv7h.deb::$url/releases/download/v$pkgver/bee_${pkgver}_armv7.deb")
source_aarch64=("$pkgname-$pkgver-aarch64.deb::$url/releases/download/v$pkgver/bee_${pkgver}_arm64.deb")
sha256sums=('be2cfae74a424aa5e5c82480bc91483ddecac4b8b319fd16fa556940ffefce6e'
            '36a50889de810ee1dba3fbcb5cc04942e298b8825e4e4fc4f2eabbd844b2cf39'
            '27465c707fe2600700438cb8c2c5a3b87926ab086ce2e43f72b628650c8de034')
sha256sums_x86_64=('e882f89d1022205ea3565e7eb39edc2648396e8290458e5eeac1ed6900482a30')
sha256sums_i686=('2e4943687cf0127edf147e3c1ac6fc17a335221ded04c5f39a24ca676111b7cb')
sha256sums_armv7h=('0956d7c99b6663651ce54e312d14da5d3b539d0ffccecd93a32c339f53ecae96')
sha256sums_aarch64=('f90c1350ee5e62990a8726353e9a8057fb9c72beb0034c10b099f0a4228b743b')
install=bee.install

prepare() {
	bsdtar -xf data.tar.gz
}

package() {
	install -Dm644 "LICENSE-$pkgver" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
	install -Dm644 etc/default/bee -t "$pkgdir/etc/default"
	install -Dm644 etc/bee/bee.yaml -t "$pkgdir/etc/bee"
	install -Dm644 lib/systemd/system/bee.service -t "$pkgdir/usr/lib/systemd/system"
	install -Dm644 bee.sysusers "$pkgdir/usr/lib/sysusers.d/bee.conf"
	install -Dm644 bee.tmpfiles "$pkgdir/usr/lib/tmpfiles.d/bee.conf"
	install -D usr/bin/bee{,-get-addr} -t "$pkgdir/usr/bin"
}
