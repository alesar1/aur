# Maintainer: Gijs Burghoorn <me@gburghoorn.com>
pkgname=lemurs-git
_pkgname=lemurs
pkgver=0.2.0
pkgrel=1
pkgdesc="TUI Display/Login Manager"
arch=('i686' 'x86_64' 'aarch64')
url="https://github.com/coastalwhite/lemurs"
license=('MIT' 'APACHE')
makedepends=('git' 'cargo' 'sudo')
depends=('pam' 'systemd' 'xorg-xauth')
conflicts=()
backup=('etc/lemurs/config.toml')
source=('git+https://github.com/coastalwhite/lemurs.git')
md5sums=('SKIP')

pkgver() {
    cd "$srcdir/$_pkgname"
	git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    cd "$srcdir/$_pkgname"

	cargo +nightly build --locked --release --target-dir target
}

package() {
    cd "$srcdir/$_pkgname"

    install -Dm755 target/release/lemurs "${pkgdir}/usr/bin/lemurs"

	install -D -m644 LICENSE-MIT "${pkgdir}/usr/share/licenses/${pkgname}/MIT"
	install -D -m644 LICENSE-APACHE "${pkgdir}/usr/share/licenses/${pkgname}/APACHE"

	install -D -m644 extra/config.toml "${pkgdir}/etc/lemurs/config.toml"
	install -D -m755 extra/xsetup.sh "${pkgdir}/etc/lemurs/xsetup.sh"

	sudo systemctl disable display-manager.service || echo 'No current display manager'
	install -D -m644 extra/lemurs.service /usr/lib/systemd/system/lemurs.service
	sudo systemctl enable lemurs.service
}