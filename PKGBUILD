# Maintainer: gm3k4g <thingstuffet@gmail.com>
pkgname=ikemen-go-bin
pkgver=0.94.2
pkgrel=1
pkgdesc="Open source fighting games engine written in Go with support for M.U.G.E.N resources."
arch=('x86_64')
url="https://github.com/Windblade-GR01/Ikemen_GO"
license=('MIT')
depends=('sudo')
provides=("${pkgname%}")
conflicts=("${pkgname%}"
		   "ikemen-go-git")
source=('ikemen-go::https://ci.appveyor.com/api/projects/Windblade-GR01/ikemen-go/artifacts/bin%2Frelease%2FIkemen_GO_Linux.zip')
md5sums=('SKIP')

package() {
	# remove unnecessary files
	rm "${srcdir}/ikemen-go"

	# package goes under /opt
	install -dm777 "${pkgdir}/opt/$pkgname/"
	cp -r "${srcdir}/." "$pkgdir/opt/$pkgname/"
	# set dir permissions
	chmod a+rwx -R "${pkgdir}/opt/$pkgname/."

	# create the /usr/bin/ dir
	install -d "${pkgdir}/usr/bin"
	# create a shortcut for ikemen go
	printf '%s\n' '#!/usr/bin/env sh' 'cd /opt/ikemen-go-bin; ./Ikemen_GO_linux' >> "${pkgdir}/usr/bin/ikemen-go"
	chmod +x "${pkgdir}/usr/bin/ikemen-go" 
}
