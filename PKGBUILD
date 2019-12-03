# Maintainer: telans <telans@protonmail.com>
# Co-Maintainer: yochananmarqos <yochanan.marqos@gmail.com>
# Contributor: David Birks <david at tellus dot space>
pkgname=mullvad-vpn
pkgver=2019.9.stable
_pkgver=2019.9
pkgrel=5
pkgdesc="The Mullvad VPN client app for desktop"
url="https://www.mullvad.net"
arch=('x86_64')
license=('GPL3')
depends=('libnotify' 'libappindicator-gtk3' 'libxss' 'nss')
makedepends=('git' 'cargo' 'npm')
provides=("${pkgname%-beta}")
conflicts=("${pkgname%-beta}")
install="${pkgname%-beta}.install"
source=("git+https://github.com/mullvad/mullvadvpn-app.git#tag=$_pkgver"
        'git+https://github.com/mullvad/mullvadvpn-app-binaries.git'
        "${pkgname%-beta}.desktop")
sha256sums=('SKIP'
            'SKIP'
            '121d90e6683e64d9c0d2dbb7b346fa918bdb37cf21fdaf9f66232304ed23abc2')

prepare() {
	# Point the submodule to our local copy
	cd "$srcdir/mullvadvpn-app"
	git submodule init dist-assets/binaries
	git config submodule.mullvadvpn-app-binaries.url "$srcdir/mullvadvpn-app-binaries"
	git submodule update
}

build() {
	cd "$srcdir/mullvadvpn-app"

	# Build mullvad-daemon
	cargo build --release --locked

	# Build Electron GUI app
	cd gui
	npm install --cache "$srcdir/npm-cache"
	npm run pack:linux
}

check() {
	cd "$srcdir/mullvadvpn-app"
	cargo test --release --locked

	cd gui
	npm test
}

package() {
	cd "$srcdir/mullvadvpn-app"
	install -dm755 "$pkgdir/opt/Mullvad VPN"
	cp -a dist/linux-unpacked/* "$pkgdir/opt/Mullvad VPN"

	install -Dm644 target/release/libtalpid_openvpn_plugin.so -t \
		"$pkgdir/opt/Mullvad VPN/resources"
	install -m755 target/release/{mullvad-daemon,mullvad-problem-report} -t \
		"$pkgdir/opt/Mullvad VPN/resources"
	install -Dm644 dist/linux-unpacked/resources/mullvad-daemon.service -t \
		"$pkgdir/usr/lib/systemd/system"
	install -Dm755 target/release/mullvad -t "$pkgdir/usr/bin"

	ln -s "/opt/Mullvad VPN/resources/mullvad-problem-report" \
		"$pkgdir/usr/bin/mullvad-problem-report"

	ln -s "/opt/Mullvad VPN/mullvad-gui" "$pkgdir/usr/bin/${pkgname%-beta}"

	install -Dm644 "$srcdir/${pkgname%-beta}.desktop" -t \
		"$pkgdir/usr/share/applications"

	for icon_size in 16 48; do
		icons_dir=/usr/share/icons/hicolor/${icon_size}x${icon_size}/apps
		install -d $pkgdir/$icons_dir
		install -m644 dist/.icon-set/icon_${icon_size}x${icon_size}.png \
			$pkgdir$icons_dir/${pkgname%-beta}.png
	done

	for icon_size in 32 64 128 256 512 1024; do
		icons_dir=/usr/share/icons/hicolor/${icon_size}x${icon_size}/apps
		install -d $pkgdir/$icons_dir
		install -m644 dist/.icon-set/icon_${icon_size}.png \
			$pkgdir$icons_dir/${pkgname%-beta}.png
	done
}
