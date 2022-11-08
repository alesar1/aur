# Mantainer: Alesar1
# Contributor: KspLite <ksplite@outlook.com>
pkgname=64gram-desktop-bin
pkgver=1.0.52
pkgrel=1
epoch=1
pkgdesc="Unofficial desktop version of Telegram messaging app - binary version"
arch=(x86_64)
url="https://github.com/TDesktop-x64/tdesktop"
license=(GPL3)
depends=(desktop-file-utils glib2 hicolor-icon-theme libdbus libx11)
optdepends=('ttf-opensans: default Open Sans font family')
conflicts=(telegram-desktop 64gram-desktop)
provides=(64gram-desktop)

source=(
	"${url}/raw/dev/lib/xdg/telegramdesktop.desktop"
	${url}/raw/dev/Telegram/Resources/art/icon{16,32,48,64,128,256,512}.png
	"${url}/releases/download/v${pkgver}/64Gram_${pkgver}_linux_rebuilt.zip"
)
sha256sums=('9df3688f1647de70cf00556295bb1fbb2f01c7a727806ddd4dfb2540ab584b80'
            'ea1f36152b143cc2664daef5026656d55be2230ed42d43628e17ef7d2fff718c'
            '9e4180c78c895783b4559c5e1a7868a2c9aa30a29969fe5dbe9a4ce4cf5cde6c'
            '041b78681a35f07c3c929662fc66b6592c88588dc7297a5394ef7f923f2118e2'
            '554dff9f55697d4e8ec69e9aa53678aa5dae3e91aa13adc3b115526d8d51dfc9'
            '731431e47a5bc91c697d25c3a54fe7ba004752f5b66e0f282c47588ff7a314e6'
            '3fb1400c7dc9bbc3b5cb3ffedcbf4a9b09c53e28b57a7ff33a8a6b9048864090'
            'e297771c75bd2f81d637a3234f83568be62092f67d16946be23895fa92fa7119'
            '57fe8651da2285349678422bf368884ff3466071879ffb5b0844572ed633381c')

package() {

	cd "$srcdir/"

	# Creating needed directories
	install -dm755 "$pkgdir/usr/bin"
	install -dm755 "$pkgdir/usr/share/pixmaps/"
	install -dm755 "$pkgdir/usr/share/applications/"

	# Program
	install -Dm755 "$srcdir/Telegram" "$pkgdir/usr/bin/telegram-desktop"

	# Desktop launcher
	install -Dm644 "$srcdir/icon256.png" "$pkgdir/usr/share/pixmaps/telegram.png"
	install -Dm644 "$srcdir/telegramdesktop.desktop" "$pkgdir/usr/share/applications/telegramdesktop.desktop"

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
