# Maintainer: Knut Ahlers <knut at ahlers dot me>
# Contributor: Det <nimetonmaili g-mail>
# Contributors: t3ddy, Lex Rivera aka x-demon, ruario

# Check for new Linux releases in: http://googlechromereleases.blogspot.com/search/label/Dev%20updates
# or use: $ curl -s https://dl.google.com/linux/chrome/rpm/stable/x86_64/repodata/other.xml.gz | gzip -df | awk -F\" '/pkgid/{ sub(".*-","",$4); print $4": "$10 }'

pkgname=google-chrome-dev
pkgver=91.0.4449.6
pkgrel=1
pkgdesc="The popular and trusted web browser by Google (Dev Channel)"
arch=('x86_64')
url="https://www.google.com/chrome"
license=('custom:chrome')
depends=('alsa-lib' 'gtk3' 'libcups' 'libxss' 'libxtst' 'nss')
optdepends=(
	'libpipewire02: WebRTC desktop sharing under Wayland'
	'kdialog: for file dialogs in KDE'
	'gnome-keyring: for storing passwords in GNOME keyring'
	'kwallet: for storing passwords in KWallet'
	'libunity: for download progress on KDE'
	'ttf-liberation: fix fonts for some PDFs - CRBug #369991'
	'xdg-utils'
)
provides=('google-chrome')
options=('!emptydirs' '!strip')
install=$pkgname.install
_channel=unstable
source=("https://dl.google.com/linux/chrome/deb/pool/main/g/google-chrome-${_channel}/google-chrome-${_channel}_${pkgver}-1_amd64.deb"
	'eula_text.html'
	"google-chrome-$_channel.sh")
sha512sums=('c5c6ad70d099a582f9709d14e5985b5459b1e024c040dcf5e8d01e1ce9f9516252f813b64069c2f857f22885f7924999a7e7514959d3e804f9e99632c210d342'
            'a225555c06b7c32f9f2657004558e3f996c981481dbb0d3cd79b1d59fa3f05d591af88399422d3ab29d9446c103e98d567aeafe061d9550817ab6e7eb0498396'
            '349fc419796bdea83ebcda2c33b262984ce4d37f2a0a13ef7e1c87a9f619fd05eb8ff1d41687f51b907b43b9a2c3b4a33b9b7c3a3b28c12cf9527ffdbd1ddf2e')

package() {
	msg2 "Extracting the data.tar.xz..."
	bsdtar -xf data.tar.xz -C "$pkgdir/"

	msg2 "Moving stuff in place..."
	# Launcher
	install -m755 google-chrome-$_channel.sh "$pkgdir"/usr/bin/google-chrome-$_channel

	# Icons
	for i in 16x16 24x24 32x32 48x48 64x64 128x128 256x256; do
		install -Dm644 "$pkgdir"/opt/google/chrome-$_channel/product_logo_${i/x*/}_${pkgname/*-/}.png \
			"$pkgdir"/usr/share/icons/hicolor/$i/apps/google-chrome-$_channel.png
	done

	# License
	install -Dm644 eula_text.html "$pkgdir"/usr/share/licenses/google-chrome-$_channel/eula_text.html

	msg2 "Fixing Chrome icon resolution..."
	sed -i \
		-e "/Exec=/i\StartupWMClass=Google-chrome-$_channel" \
		-e "s/x-scheme-handler\/ftp;\?//g" \
		"$pkgdir"/usr/share/applications/google-chrome-$_channel.desktop

	msg2 "Removing Debian Cron job and duplicate product logos..."
	rm -r "$pkgdir"/etc/cron.daily/ "$pkgdir"/opt/google/chrome-$_channel/cron/
	rm "$pkgdir"/opt/google/chrome-$_channel/product_logo_*.png
}
