# Maintainer: Stick <stick@stma.is>
# Contributors: johnnyapol (arch@johnnyapol.me), huyizheng
# Based off the discord_arch_electron PKGBUILD from johnnyapol and huyizheng
# Based off the discord community repo PKGBUILD by Filipe Laíns (FFY00) <lains@archlinux.org>

# Staying on Electron13 for now due to this bug:
# https://github.com/electron/electron/issues/32487

pkgname=discord_arch_electron_wayland
pkgver=0.0.17
pkgrel=7
pkgdesc="Discord (popular voice + video app) using system electron (v13) and set up for wayland"
arch=('x86_64')
provides=('discord')
conflicts=('discord')
url='https://discordapp.com'
license=('custom')
depends=('electron13')
makedepends=('asar' 'curl' 'python-html2text')
optdepends=(
	'libpulse: Pulseaudio support'
	'xdg-utils: Open files'
)
source=(
	"https://dl.discordapp.net/apps/linux/$pkgver/discord-$pkgver.tar.gz"
	discord-launcher.sh
)
sha256sums=(
	'3462732e5d5d9bb75f901f7ca5047782fe2f96576b208ea538c593ba2a031315'
	'd1bda62e34f21d07e238990474ee1b29067043b4794d8f86c0f269310405e787'
)

prepare() {
	# fix the .desktop file
	sed -i "s|Exec=.*|Exec=/usr/bin/discord-launcher.sh|" Discord/discord.desktop
	echo 'Path=/usr/bin' >>Discord/discord.desktop

	# create the license files
	curl https://discord.com/terms | html2text >"$srcdir"/LICENSE.md
	curl https://discord.com/licenses | html2text >"$srcdir"/OSS-LICENSES.md

	# use system electron13
	asar e Discord/resources/app.asar Discord/resources/app
	rm Discord/resources/app.asar
	sed -i "s|process.resourcesPath|'/usr/lib/discord'|" Discord/resources/app/app_bootstrap/buildInfo.js
	sed -i "s|exeDir,|'/usr/share/pixmaps',|" Discord/resources/app/app_bootstrap/autoStart/linux.js
	asar p Discord/resources/app Discord/resources/app.asar --unpack-dir '**'
	rm -rf Discord/resources/app
}

package() {
	# create necessary directories
	install -d "$pkgdir"/usr/{lib/discord,bin}
	install -d "$pkgdir"/usr/share/{pixmaps,applications,licenses/discord}

	# copy relevant data
	cp -r Discord/resources/* "$pkgdir"/usr/lib/discord/

	# install the binary
	install -Dm 755 discord-launcher.sh "$pkgdir"/usr/bin/

	cp Discord/discord.png \
		"$pkgdir"/usr/share/pixmaps/discord.png
	cp Discord/discord.desktop \
		"$pkgdir"/usr/share/applications/discord.desktop

	# license
	install -Dm 644 LICENSE.md "$pkgdir"/usr/share/licenses/discord/
	install -Dm 644 OSS-LICENSES.md "$pkgdir"/usr/share/licenses/discord/
}
