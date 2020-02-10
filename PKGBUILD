# Maintainer: telans <telans@protonmail.com>
# Co-Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
# Contributor: David Birks <david at tellus dot space>
# Contributor: Jeff Henson <jeff at henson dot io>
# Contributor: Linus Färnstrand <linus at mullvad dot net>
# Contributor: Emīls Piņķis <emil at mullvad dot net>
# Contributor: Andrej Mihajlov <and at mullvad dot net>
pkgname=mullvad-vpn-beta
_pkgver=2020.1
_channel=stable
pkgver=${_pkgver}.${_channel}
pkgrel=1
pkgdesc="The Mullvad VPN client app for desktop (latest/beta release)"
url="https://www.mullvad.net"
arch=('x86_64')
license=('GPL3')
depends=('libnotify' 'libappindicator-gtk3' 'libxss' 'nss')
makedepends=('git' 'go-pie' 'rust' 'npm')
provides=("${pkgname%-beta}")
conflicts=("${pkgname%-beta}")
install="${pkgname%-beta}.install"
_commit='90b0c06b59a0b9d6cda69924377335f39854b216'
source=("git+https://github.com/mullvad/mullvadvpn-app.git#tag=${_pkgver}?signed"
        "git+https://github.com/mullvad/mullvadvpn-app-binaries.git#commit=$_commit?signed"
        "${pkgname%-beta}.desktop"
        'update-relays.sh')
sha256sums=('SKIP'
            'SKIP'
            '121d90e6683e64d9c0d2dbb7b346fa918bdb37cf21fdaf9f66232304ed23abc2'
            '89267795175c5be95d13e8f700b69654faf2f38f35be5033eb8e94da404d2353')
validpgpkeys=('EA0A77BF9E115615FC3BD8BC7653B940E494FE87'
              # Linus Färnstrand (code signing key) <linus at mullvad dot net>
              '8339C7D2942EB854E3F27CE5AEE9DECFD582E984')
              # David Lönnhager (code signing) <david dot l at mullvad dot net>

prepare() {
	# Point the submodule to our local copy
	cd "$srcdir/mullvadvpn-app"
	git submodule init dist-assets/binaries
	git config submodule.mullvadvpn-app-binaries.url \
		"$srcdir/mullvadvpn-app-binaries"
	git submodule update

	# Disable building of rpm
	sed -i "s/'deb', 'rpm'/'deb'/g" gui/tasks/distribution.js
}

build() {
	cd "$srcdir/mullvadvpn-app/wireguard/wireguard-go"

	# Build wireguard-go
	go build \
		-trimpath \
		-ldflags "-extldflags $LDFLAGS" \
		-v -o libwg.a -buildmode c-archive

	target_triple_dir="../../build/lib/x86_64-unknown-linux-gnu"
	mkdir -p $target_triple_dir
	cp libwg.a $target_triple_dir

	cd "$srcdir/mullvadvpn-app"

	# Remove old Rust build artifacts
	cargo clean --release --locked

	# Build mullvad-daemon
	cargo build --release --locked --all-features

	# Copy binaries for packaging
	cp dist-assets/binaries/x86_64-unknown-linux-gnu/{openvpn,sslocal} \
		dist-assets/
	cp target/release/*talpid_openvpn_plugin* dist-assets/
	cp target/release/{mullvad,mullvad-daemon,mullvad-problem-report} \
		dist-assets/

	# Update relay list & generate relays.json
	../update-relays.sh

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

	# Install main files
	install -dm755 "$pkgdir/opt/Mullvad VPN"
	cp -a dist/linux-unpacked/* "$pkgdir/opt/Mullvad VPN"

	# Install daemon service
	install -Dm644 dist/linux-unpacked/resources/mullvad-daemon.service -t \
		"$pkgdir/usr/lib/systemd/system"

	#install CLI binary
	install -Dm755 target/release/mullvad -t "$pkgdir/usr/bin"

	# Link to the problem report binary
	ln -s "/opt/Mullvad VPN/resources/mullvad-problem-report" \
		"$pkgdir/usr/bin/mullvad-problem-report"

	# Link to the GUI binary
	ln -s "/opt/Mullvad VPN/mullvad-gui" "$pkgdir/usr/bin/${pkgname%-beta}"

	# Install desktop file from .deb
	install -Dm644 "$srcdir/${pkgname%-beta}.desktop" -t \
		"$pkgdir/usr/share/applications"

	# Install icons
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
