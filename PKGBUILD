# Maintainer: Rolf van Kleef <aur@rolfvankleef.nl>
# Contributor: Gregory Goijaerts <crecketgaming@gmail.com>
# Contributor: Dennis Snijder <dennissnijder97@gmail.com>
# Contributor: Nick Duijvelshoff <nick@duijvelshoff.com>
# Contributor: basst85 <bastiaan85@gmail.com>
# Contributor: Kees Kluskens
# Contributor: TimZ99
# Contributor: Emile Bons

pkgname="bunq-desktop-bin"
pkgver="0.8.4"
pkgrel=1
pkgdesc="A desktop implementation for the bunq API"
url="https://github.com/BunqCommunity/BunqDesktop"
provides=('bunq-desktop')
conflicts=(
	'bunq-desktop-git'
	'bunq-desktop-src'
)

arch=(
	'x86_64'
)

license=(
	'MIT'
)

depends=(
	'nodejs'
)

makedepens=(
	'git'
	'yarn'
)

source=(
	"https://github.com/BunqCommunity/BunqDesktop/releases/download/${pkgver}/linux-unpacked-${pkgver}.tar.gz"
	"https://github.com/BunqCommunity/BunqDesktop/raw/${pkgver}/build/icons/512x512.png"
	"$pkgname.desktop"
)

sha256sums=(
	"ab7371b3f18da3bf096a8a39e62f3db20f0c58423e536b4f2a6355c24e950eb1"
	"580274ac3f60cce7789cdb69afc67b9db43da09b04fd82ad563fdec4337302d1"
	"1d84f185830733bb38928fcaa33ffc0ba46140f7f116b4d5ad24c93a585a0ffa"
)

package() {
	mkdir $pkgdir/usr
	mkdir $pkgdir/usr/bin
	mkdir $pkgdir/usr/share
	mkdir $pkgdir/usr/share/pixmaps
	mkdir $pkgdir/opt

	cp -R\
		dist/linux-unpacked\
		$pkgdir/opt/$pkgname

	cp\
		512x512.png\
		$pkgdir/usr/share/pixmaps/bunq.png
	
	pushd $pkgdir/usr/bin

	ln -s\
		../../opt/$pkgname/bunqdesktop\
		bunq-desktop-src

	popd

	desktop-file-install\
		$pkgname.desktop\
		--dir $pkgdir/usr/share/applications/
}

