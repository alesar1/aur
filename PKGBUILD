# Maintainer: Massimiliano Torromeo <massimiliano.torromeo@gmail.com>
# Contributor: Tom < tomgparchaur at gmail dot com >
# Contributor: David Manouchehri <d@32t.ca>

pkgname=dropbox
pkgver=47.4.74
pkgrel=2
pkgdesc="A free service that lets you bring your photos, docs, and videos anywhere and share them easily."
arch=("i686" "x86_64")
url="https://www.dropbox.com"
license=(custom)
depends=("libsm" "libxslt" "libxmu" "libxdamage" "libxrender" "libxxf86vm" "libxcomposite" "fontconfig" "dbus")
optdepends=(
    'ufw-extras: ufw rules for dropbox'
    'perl-file-mimeinfo: opening dropbox folder on some desktop environments'
    'xdg-utils: for "Launch Dropbox Website" and file manager integration'
)
conflicts=("dropbox-experimental")
options=('!strip')

source=("dropbox.png" "dropbox.desktop" "terms.txt" "dropbox.service" "dropbox@.service")
source_i686=("https://clientupdates.dropboxstatic.com/dbx-releng/client/dropbox-lnx.x86-$pkgver.tar.gz")
source_x86_64=("https://clientupdates.dropboxstatic.com/dbx-releng/client/dropbox-lnx.x86_64-$pkgver.tar.gz")

sha256sums=('e7d245f5d1a3d5322614b61400ae2913a8caef44bc86717ff7d8197a15dd7f01'
            '541f2fd2de0d601a08cde7853e404062f542af21e6e7106825b5e68177168e0f'
            'c39d63bcfc0d40002a5df052298feb79f2e8dd3d93da27ef31eb672b8d2fc70e'
            '6c67a9c8c95c08fafafd2f1d828074b13e3347b05d2e4f4bf4e62746115d7477'
            '98581e65a91ae1f19ed42edcdaaa52e102298b5da0d71b50089393d364474d3d')
sha256sums_i686=('b96a6004bea2fa0ed68c5211691ec0fb73f083d0fc5f906f506cc27f82d9ea38')
sha256sums_x86_64=('7383740553487b6c7820db362c8804b12e7dca1814127dd92ae1ccc3ba56c154')

package() {
	if [ "$CARCH" = "x86_64" ]; then
		_source_arch="x86_64"
	else
		_source_arch="x86"
	fi

	install -d "$pkgdir"/opt
	cp -R "$srcdir"/.dropbox-dist/dropbox-lnx.$_source_arch-$pkgver "$pkgdir"/opt/dropbox

	find "$pkgdir"/opt/dropbox/ -type f -exec chmod 644 {} \;
	chmod 755 "$pkgdir"/opt/dropbox/dropboxd
	chmod 755 "$pkgdir"/opt/dropbox/dropbox

	install -d "$pkgdir"/usr/bin
	ln -s ../../opt/dropbox/dropbox "$pkgdir"/usr/bin/dropbox

	install -Dm644 "$srcdir"/dropbox.desktop "$pkgdir"/usr/share/applications/dropbox.desktop
	install -Dm644 "$srcdir"/dropbox.png "$pkgdir"/usr/share/pixmaps/dropbox.png
	install -Dm644 "$srcdir"/terms.txt "$pkgdir"/usr/share/licenses/$pkgname/terms.txt
	install -Dm644 "$srcdir"/dropbox.service "$pkgdir"/usr/lib/systemd/user/dropbox.service
	install -Dm644 "$srcdir"/dropbox@.service "$pkgdir"/usr/lib/systemd/system/dropbox@.service

	rm -f "$pkgdir"/opt/dropbox/library.zip
	ln -s dropbox "$pkgdir"/opt/dropbox/library.zip
}
