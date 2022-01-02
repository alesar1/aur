# Submitter: Christian Schritt <christian@devseed.de>
# Maintainer: gee

pkgname=defi-app-bin
pkgdesc='DefiChain Wallet AppImage'
_pkgbin=defi-wallet
license=('MIT')
url='https://github.com/DeFiCh/app'
pkgver=v2.8.3
pkgrel=1
arch=('x86_64')
_package="DeFi-Wallet-${pkgver#v}.AppImage"
provides=('defi-app')
conflicts=('defi-app')
source=("${_package}::${url}/releases/download/${pkgver}/${_package}")
sha256sums=('2875dd6ffae19445b4e4ed7deafaa1b8e642216916299ef6dd443f3c8a994473')
OPTIONS=(!strip)

prepare() {
	# Extract files
	chmod +x "$srcdir/$_package"
	$srcdir/$_package --appimage-extract

    # Correct .desktop
	sed -e "s/AppRun/${_pkgbin}/g" -i "$srcdir/squashfs-root/$_pkgbin.desktop"

    # remove obsolete binaries
    rm -rf $srcdir/squashfs-root/resources/app.asar.unpacked/node_modules/7zip-bin/linux/arm* 
    rm -rf $srcdir/squashfs-root/resources/app.asar.unpacked/node_modules/7zip-bin/linux/ia32 
    rm -rf $srcdir/squashfs-root/resources/app.asar.unpacked/node_modules/7zip-bin/mac
}


package() {
	install -d "$pkgdir/opt/$__pkgbin"
	cp -a "$srcdir/squashfs-root/." "$pkgdir/opt/$_pkgbin/"
	chmod -R +rx "$pkgdir/opt/$_pkgbin"

	install -d "$pkgdir/usr/bin"
	ln -s "/opt/$_pkgbin/$_pkgbin" "$pkgdir/usr/bin/$_pkgbin"

	install -d "$pkgdir/usr/share"
	cp -r "$srcdir/squashfs-root/usr/share/." "${pkgdir}/usr/share/"

	find "$pkgdir" -type d -exec chmod 755 {} +

	install -Dm644 "$srcdir/squashfs-root/$_pkgbin.desktop" "$pkgdir/usr/share/applications/$_pkgbin.desktop"
}

