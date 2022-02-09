# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>
# Contributor: Vyacheslav Konovalov <🦀vk@protonmail.com>

pkgname=swarm-bee-clef-bin
pkgver=0.10.0
pkgrel=1
pkgdesc="Go Ethereum's external signer"
arch=('x86_64' 'armv7h' 'aarch64')
url='https://github.com/ethersphere/bee-clef'
license=('GPL3')
depends=('bash')
provides=('swarm-bee-clef')
conflicts=('swarm-bee-clef' 'go-ethereum')
replaces=('bee-clef-bin')
backup=('etc/bee-clef/4byte.json'
        'etc/bee-clef/rules.js')
install=bee-clef.install
source=('bee-clef.sysusers' 'bee-clef.tmpfiles')
source_x86_64=("$pkgname-$pkgver-x86_64.deb::$url/releases/download/v$pkgver/bee-clef_${pkgver}_amd64.deb")
source_armv7h=("$pkgname-$pkgver-armv7h.deb::$url/releases/download/v$pkgver/bee-clef_${pkgver}_armv7.deb")
source_aarch64=("$pkgname-$pkgver-aarch64.deb::$url/releases/download/v$pkgver/bee-clef_${pkgver}_arm64.deb")
sha256sums=('7314d2aa0ce149621a5d59b881ada3ea37231743b5875389b3041bb845233491'
            'c5dbcb978de5b7c31482f4fd1cff3101a738df85e27758ec2b4e469a1762384c')
sha256sums_x86_64=('1302a5105b043c66bda4ba37643b30fa17e49268b17ad4f8f4ed8cc32a198314')
sha256sums_armv7h=('6f5ae70cfb8ea8a7003e32a0cd5a8d1865730dff6cf2842cb397e74b23876547')
sha256sums_aarch64=('62f175951ba77613abd964ebddd96bda2cdc6cbd31d94b35926afb09583233ff')

prepare() {
	bsdtar -xf data.tar.gz
}

package() {
	install -D usr/bin/bee-clef{,-keys,-service} -t "$pkgdir/usr/bin"
	find etc \
		-type f \
		-exec install -Dm644 '{}' "$pkgdir/{}" \;
	install -Dm644 lib/systemd/system/bee-clef.service -t "$pkgdir/usr/lib/systemd/system"
	install -Dm644 bee-clef.sysusers "$pkgdir/usr/lib/sysusers.d/bee-clef.conf"
	install -Dm644 bee-clef.tmpfiles "$pkgdir/usr/lib/tmpfiles.d/bee-clef.conf"
}
