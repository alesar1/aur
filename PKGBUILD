# Maintainer: Bruce Zhang <zttt183525594@gmail.com>
pkgname=majsoul-plus-bin
pkgver=1.11.1
pkgrel=1
pkgdesc="Majsoul browser (Binary)"
arch=('i686' 'x86_64')
url="https://github.com/MajsoulPlus/majsoul-plus"
license=('AGPL3')
depends=('c-ares' 'ffmpeg' 'gtk3' 'http-parser' 'libevent' 'libxslt' 'libxss'
         'minizip' 'nss' 'snappy')
optdepends=('kde-cli-tools: file deletion support (kioclient5)'
            'trash-cli: file deletion support (trash-put)'
            "xdg-utils: open URLs with desktop's default (xdg-email, xdg-open)")
provides=("majsoul-plus")
conflicts=("majsoul-plus")
source=("https://github.com/MajsoulPlus/majsoul-plus/raw/master/bin/icons/icon.png")
source_x86_64=(
	"https://github.com/MajsoulPlus/majsoul-plus/releases/download/v$pkgver/Majsoul_Plus-linux-x64.zip"
)
source_i686=(
	"https://github.com/MajsoulPlus/majsoul-plus/releases/download/v$pkgver/Majsoul_Plus-linux-ia32.zip"
)
sha256sums=('be6005b9ae4238d53fcd9fe728a4985502c660adb670d3047b17da4a35f6fe31')
sha256sums_i686=('1ae146cb80e80a2fab0c8e24b3fda08a4e94e1311622b352db58c2b3a846f935')
sha256sums_x86_64=('ea69fe54e4aac25e19bb21b9d437412c12c094eeb6c5bc81ffb6336a6e5202d2')

package() {
	targetarch="x64"
	if [ "$CARCH" == "i686" ]; then
		targetarch="ia32"
	fi
	cd "Majsoul_Plus-linux-$targetarch"
	mkdir -p "$pkgdir/opt/majsoul-plus"
	mkdir -p "$pkgdir/usr/bin"
	mkdir -p "$pkgdir/usr/share/applications"

	find ./* -type f -exec install -Dm644 {} "$pkgdir/opt/majsoul-plus/{}" \;
	chmod +x "$pkgdir/opt/majsoul-plus/Majsoul_Plus"
	ln -s /opt/majsoul-plus/Majsoul_Plus "$pkgdir/usr/bin/majsoul-plus"

	for size in 16 24 32 48 64 72 128 256; do
        target="$pkgdir/usr/share/icons/hicolor/${size}x${size}/apps/"
        mkdir -p "$target"
        convert "$srcdir/icon.png" -resize ${size}x${size} "$target/majsoul-plus.png"
    done

	echo "[Desktop Entry]
Name=Majsoul Plus
Name[zh_CN]=雀魂 Plus
GenericName[zh_CN]=雀魂 Plus
Comment=Majsoul Plus Browser
Comment[zh_CN]=一款设计用于雀魂麻将的 PC 专用浏览器
Exec=/opt/majsoul-plus/Majsoul_Plus
Terminal=false
Type=Application
Icon=majsoul-plus
Categories=Game;" > "$srcdir/majsoul-plus.desktop"
	install -Dm644 "$srcdir/majsoul-plus.desktop" "$pkgdir/usr/share/applications/majsoul-plus.desktop"
}
