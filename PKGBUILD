# Upstream Project Author: Roger Meier <roger.meier@pobox.com>
# PKGBUILD Maintainer: Bumsik Kim <k.bumsik@gmail.com>

pkgname=coolterm-bin
binname=coolterm
pkgver=1.5.0
pkgrel=1
pkgdesc='A simple GUI serial port terminal application (no terminal emulation)'
arch=('any')
url="http://freeware.the-meiers.org/"
license=(custom)
makedepends=('unzip' 'gendesk')
depends=('lib32-gtk3')
optdepends=('')

source=('src.zip::http://freeware.the-meiers.org/CoolTermLinux.zip'
        'coolterm.sh'
        'LICENSE')
sha256sums=('6f1b719df5e6a93d58b1ae8ce6245194c927fb58449acb4ea82110d1595d8326'
            'c9f4eb8afba21a3076b233bc2b27c6a5d8b1f5a0966ee1dfdefd258895afe79a'
            '3309abddebf57f96282762a63fe7937852fbad4e79e119fbe4c6aa227b197e94')

prepare() {
	gendesk -f --pkgname="$binname" --pkgdesc="$pkgdesc" --categories=Utility PKGBUILD
}

build() {
	echo "Build()"	
}

package() {
	install -d "$pkgdir"/opt/"$binname"
	cd CoolTermLinux
	cp -R * "$pkgdir/opt/$binname"
	cd ..

	install -Dm755 "$srcdir"/coolterm.sh "$pkgdir"/usr/bin/$binname

	install -Dm644 "$srcdir"/$binname.desktop -t "$pkgdir"/usr/share/applications
	install -Dm644 "$srcdir"/LICENSE -t "$pkgdir"/usr/share/licenses/$binname
	install -d "$pkgdir"/usr/share/pixmaps
	ln -s ../../../opt/$binname/appicon_128.png "$pkgdir"/usr/share/pixmaps/$binname.png
}
