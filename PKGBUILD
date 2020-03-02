# Maintainer: Auteiy <dmitry@auteiy.me>

pkgname=kotatogram-desktop-bin
pkgver=1.1.8
pkgrel=3
pkgdesc="Experimental Telegram Desktop fork with option to select custom fonts. - Static binaries"
arch=(x86_64)
url="https://github.com/kotatogram/kotatogram-desktop"
license=(GPL3)

depends=(
    fontconfig
    hicolor-icon-theme
    libdbus
    libglvnd
    libsm
    desktop-file-utils
)
makedepends=(
    chrpath
)
optdepends=(
    'xdg-desktop-portal: for native file dialogs, do not forget to install one of backends'
    'xdg-utils: for automatic opening of URLs, files and directories in proper applications'
)

conflicts=('kotatogram-desktop' 'kotatogram-desktop-dynamic-bin')
provides=('kotatogram-desktop')

# Sources
source=(
	$pkgname-$pkgver-$pkgrel::$url/releases/download/k$pkgver/$pkgver.tar.xz

	https://raw.githubusercontent.com/kotatogram/kotatogram-desktop/k$pkgver/lib/xdg/kotatogramdesktop.desktop
	
	$url/raw/dev/Telegram/Resources/art/icon{16,32,48,64,128,256,512}.png

)
# Checksums automatically set in CI, see: /.gitlab-ci.yml
sha512sums=('6a783974f19a9e80a06c65791652ba69cb718c33feaf7d8112715ffe76e658bfd133640a679b340c8117f0619b5315e915ac532d93fcd88f9bb3b44093a0999b'
            'e9f0d9174f43cf30b8dc982ce898f5330152cf4d8da03f6e99bd409f6caee7a93f05121d9acdac4ead0c0ef3dfc82ba597b670deac43fe17d08dc221e01e463a'
            '9f4f8d6bbbb54012da0bd9bdf6975ba29fd6ebfca3083995581d815a54e46bc5d4c4d8fedc67f71e892ace08e79179ea6452a7dea0f6ea4f932c1f57ca8497a7'
            '6481cde1cd25c74dd5ad2200f1529d48835590a5ca49cd1650a3cf9dfbc2f391c06fc2a31910742fa7edb3b3369d3795b6e55779f251e3c14fdacbfa033d8579'
            '0a09bc3b0ee9c3d8190ce8069d5cd488c2624f099e0880845dc7ae467d71c48873361e642bb02f3a60425d0334adc8fc40d6b868f9ec534eb4d44e3ec3604c0f'
            'a48793410ca0a5d291a88f2133a78b09aabe099fe6caee384385bca5aa60e52afec913c1678893115c26e98a207ed23ab8ae57af4f80d1437288ce390d03b102'
            '19226b26dbc8b64e079c6fcc0297bc0c246e5d99afe6d48e30cb4d89e82a0d047ddc54e357c2b8991621e9ec06c84ff89c3e74d11c06518b369520d2a38d19ab'
            'bebe3291af9b078cb416f8904149b853f308bd1b4d62c28adbc9593cfb1feca964d520553c6ad3711daf6333ba9793e6a11a50e59d51017e75b8824edfb6bad8'
            '6425975c4062c31da98ca9620c0285a740e407a2e3ea0e1b4d4668d48373cf83eea99260dd3e8f49903347cb2658f95986b7142a1de899a67cacda9383697a7b')

package() {

	cd "$srcdir/"

	# Creating needed directories
	install -dm755 "$pkgdir/usr/bin"
	install -dm755 "$pkgdir/usr/share/pixmaps/"
	install -dm755 "$pkgdir/usr/share/applications/"

	# Program
	install -Dm755 "$srcdir/Kotatogram/Kotatogram" "$pkgdir/usr/bin/kotatogram-desktop"

	# Remove RPATH informations
	chrpath --delete "$pkgdir/usr/bin/kotatogram-desktop"

	# Desktop launcher
	install -Dm644 "$srcdir/icon256.png" "$pkgdir/usr/share/pixmaps/kotatogram.png"
	install -Dm644 "$srcdir/kotatogramdesktop.desktop" "$pkgdir/usr/share/applications/kotatogramdesktop.desktop"
	
	# Icons
	local icon_size icon_dir
	for icon_size in 16 32 48 64 128 256 512; do
		icon_dir="$pkgdir/usr/share/icons/hicolor/${icon_size}x${icon_size}/apps"
		install -d "$icon_dir"
		install -m644 "$srcdir/icon${icon_size}.png" "$icon_dir/kotatogram.png"
	done
}
