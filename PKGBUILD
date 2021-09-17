# Maintainer: Alex Henrie <alexhenrie24@gmail.com>
pkgver=2021.1
pkgname=petalinux-v$pkgver
pkgrel=1
pkgdesc='Toolchain and SDK for Xilinx embedded Linux'
arch=('x86_64')
url='https://www.xilinx.com/products/design-tools/embedded-software/petalinux-sdk.html'
license=('custom')
depends=('bzip2' 'ccache' 'chrpath' 'cpio' 'diffstat' 'diffutils' 'dos2unix' 'git' 'glib2' 'gnupg' 'ncurses' 'ncurses5-compat-libs' 'net-tools' 'openssl' 'pax' 'perl' 'python-gitpython' 'python-jinja' 'python-pexpect' 'python-pip' 'python-pylint' 'screen' 'sdl' 'socat' 'unzip' 'wget' 'xterm' 'zlib')
options=('!strip')
install="$pkgname.install"
source=("local://petalinux-v$pkgver-final-installer.run")
sha256sums=('f6326b5ff657b9b4bff5ff373eda300dac7245bd03a873694884d9050baefa02')

prepare() {
	PLNXINSTALLLER="petalinux-v$pkgver-final-installer.run"
	INITSETUP=$(awk '/^##__INITSETUP__/ { print NR + 1; exit 0; }' "${PLNXINSTALLLER}")
	SKIP=$(awk '/^##__PLNXSDK_FOLLOWS__/ { print NR + 1; exit 0; }' "${PLNXINSTALLLER}")
	sed -n -e "$INITSETUP,$(($SKIP-2)) p" "${PLNXINSTALLLER}" > initsetup.tar.xz
	truncate -s -1 initsetup.tar.xz
	bsdtar -xf initsetup.tar.xz
	export PLNXINSTALLLER
}

package() {
	env -i \
		PLATFORMS="aarch64 arm microblaze_full microblaze_lite" \
		PLNXCHECKSUM="ed0f8ed61ed9abb757762800d5317be9" \
		PLNXINSTALLDIR="$pkgdir/opt/$pkgname" \
		PLNXINSTALLLER="$PLNXINSTALLLER" \
		./petalinux-install
	grep -rlFI "$pkgdir" "$pkgdir" | xargs sed -i "s!$pkgdir!!g"
	install -Dm644 Petalinux_EULA.txt "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
