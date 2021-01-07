# Maintainer:  Giovanni Santini "ItachiSan" <giovannisantini93@yahoo.it>
# Previous maintainer:  agnotek <agnostic.sn [at]gmail.com>
# Contributor: agnotek <agnostic.sn [at]gmail.com>

pkgname=telegram-desktop-bin-dev
pkgver=2.5.4
pkgrel=1
_dev=1 # If it is a dev-only version, set this to 1
pkgdesc="Official desktop version of Telegram messaging app - Static binaries, developement version"
# Last i686 beta: 2.1.22
# Checked via: curl -iL https://telegram.org/dl/desktop/linux32?beta=1
arch=(x86_64)
url="https://desktop.telegram.org"
license=(GPL3)
depends=(
    desktop-file-utils
    glib2
    hicolor-icon-theme
    libdbus
    libx11
)
makedepends=(
    chrpath
)
optdepends=(
    'libappindicator-gtk2: to hide Telegram in the tray bar for GTK2-based desktop environment'
    'libappindicator-gtk3: to hide Telegram in the tray bar for GTK3-based desktop environment'
    'xdg-utils: for automatic opening of URLs, files and directories in proper applications'
)
conflicts=(telegram-desktop telegram-desktop-bin)
provides=(telegram-desktop)
replaces=(telegram-bin)
# Sources
source=(
	"$pkgname.desktop"
	tg.protocol
	https://github.com/telegramdesktop/tdesktop/raw/master/Telegram/Resources/art/icon{16,32,48,64,128,256,512}.png
)
# If this is a dev version
if [ $_dev == 1 ]
then
	_devsuffix=".beta"
else
	_devsuffix=""
fi

# Official TDesktop releases website
source_x86_64=("https://updates.tdesktop.com/tlinux/tsetup.${pkgver}${_devsuffix}.tar.xz")
# If the site is blocked, you can relie on GitHub
#source_x86_64=("https://github.com/telegramdesktop/tdesktop/releases/download/v${pkgver}/tsetup.${pkgver}${_devsuffix}.tar.xz")
# Sources for i686 builds
#source_i686=('https://updates.tdesktop.com/tlinux32/tsetup32.'${pkgver}${_devsuffix}'.tar.xz')
#source_i686=("https://github.com/telegramdesktop/tdesktop/releases/download/v${pkgver}/tsetup32.${pkgver}${_devsuffix}.tar.xz")

# Checksums
sha256sums=('32d1597d67a7ef519367e499fcc978da4cce104e370b3787853446d93b1533d6'
            'd4cdad0d091c7e47811d8a26d55bbee492e7845e968c522e86f120815477e9eb'
            'fc052d1e28b68761bfb6c30ff012e54a4bba0311fc3fc470c728d028c33e9d9f'
            '8ae874ada23687c95cbcfe7cfa4cbe1c37f097d9c96e5a836c20109d976a86c7'
            '57d9c71074a619dbe6c361e49f4bee60b1b8c574d8b223d75e61b3744b660ed1'
            '10507a1ddc379b00230c6f6e2bd9f94ea0c7caff9cae05335a66b4d10b7571eb'
            '83e3e8eeecadcb3429704626d4ac80ef61ef4e06ba2c6ca2b105a4a436f33032'
            '871f2a6d3bd9d657f8379196e51fd3117c1586e0042e9e993ae138f78b2bcd76'
            'a9eb77ca5a428b32f6e01f62b859cce788c4c9a170dc2cd080800a9de59faa3d')
sha256sums_x86_64=('1edc9b6310b433cae9f46cc4557d1ab548374ec2c836e9eb8be1b5d017df9b2c')
# Some installation information
install="$pkgname.install"

package() {

	cd "$srcdir/"

	# Creating needed directories
	install -dm755 "$pkgdir/usr/bin"
	install -dm755 "$pkgdir/usr/share/pixmaps/"
	install -dm755 "$pkgdir/usr/share/applications/"

	# Program
	install -Dm755 "$srcdir/Telegram/Telegram" "$pkgdir/usr/bin/telegram-desktop"

	# Remove RPATH informations
	chrpath --delete "$pkgdir/usr/bin/telegram-desktop"

	# Desktop launcher
	install -Dm644 "$srcdir/icon256.png" "$pkgdir/usr/share/pixmaps/telegram.png"
	install -Dm644 "$srcdir/$pkgname.desktop" "$pkgdir/usr/share/applications/telegramdesktop.desktop"

	# KDE5 & KDE4 protocol file
	install -d "$pkgdir/usr/share/kservices5"
	install -d "$pkgdir/usr/share/kde4/services"
	install -m644 "$srcdir/tg.protocol" "$pkgdir/usr/share/kservices5/tg.protocol"
	ln -s "/usr/share/kservices5/tg.protocol" "$pkgdir/usr/share/kde4/services"

	# Icons
	local icon_size icon_dir
	for icon_size in 16 32 48 64 128 256 512; do
		icon_dir="$pkgdir/usr/share/icons/hicolor/${icon_size}x${icon_size}/apps"
		install -d "$icon_dir"
		install -m644 "$srcdir/icon${icon_size}.png" "$icon_dir/telegram.png"
	done

	# Disable the official Telegram Desktop updater
	mkdir -p "$pkgdir/etc/tdesktop"
	echo "/usr/bin/telegram-desktop" > "$pkgdir/etc/tdesktop/externalupdater"
}
