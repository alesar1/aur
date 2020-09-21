# Maintainer: Alex Colburn <alcolbur@nmu.edu>
pkgname=eclipse-java-bin
pkgver=4.17
_releasemonth="2020-09"
pkgrel=1
pkgdesc="Highly extensible IDE"
arch=('x86_64')
url="https://www.eclipse.org"
license=('EPL')
depends=("java-environment>=11" "python" "libsecret")
makedepends=('tar')
provides=('eclipse-java')
conflicts=('eclipse-java')
source=("https://mirrors.xmission.com/eclipse/technology/epp/downloads/release/$_releasemonth/R/${pkgname%-bin}-$_releasemonth-R-linux-gtk-$CARCH.tar.gz"
			"eclipse.desktop"
			"eclipse.png")
sha512sums=('38b063a4df5a0ae6d22f82fb1c64281e462ef8b4de6e4cc970d47e89575c447376550ebc8063b8bcf2c6532ac7a276fe9d4c79f140846357c4218899f9d93bf3'
			'eb3e245f27a0eb328bdf3dcc1258013d55cf24d4ec3864cdc0ad9c68995bfc1af44f05a5973368f115e9957359c9e50b4cefa2fa7014c36e499447c48769f505'
			'7933c44f9e4d47aa89706e839fd5f1339e58454125cc8533ea4d7d391f677805ebcb937857ccea305f8829a2e8c6b38dc0447491ad0fbd26e55fcad6c782128f')

package() {
	tar -xzf "${pkgname%-bin}-$_releasemonth-R-linux-gtk-$CARCH.tar.gz"
	mkdir -p "$pkgdir/opt"
	mv ./eclipse "$pkgdir/opt/"
	mkdir -p "$pkgdir/usr/bin"
	ln -sv /opt/eclipse/eclipse "$pkgdir/usr/bin/eclipse"
	install -Dm644 eclipse.desktop "$pkgdir/usr/share/applications/eclipse.desktop"
	install -Dm644 eclipse.png "$pkgdir/usr/share/pixmaps/eclipse.png"
}
