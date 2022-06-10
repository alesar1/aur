# Maintainer: Ray Del Rosario <michael@raydelrosario.com>
pkgname='litmusctl'
pkgver=0.10.0
pkgrel=1
pkgdesc='The Litmuschaos command-line tool, litmusctl, allows you to manage litmuschaos agent plane. You can use litmusctl to create agents, project, and manage multiple litmuschaos accounts.'
url='https://github.com/litmuschaos/litmusctl'
arch=('x86_64')
license=('APACHE')
depends=('kubectl')
source=("https://litmusctl-production-bucket.s3.amazonaws.com/litmusctl-linux-amd64-v${pkgver}.tar.gz")
sha256sums=('8f4e925c335badf7bf2f1939f4c9b2b1723d92a6ec350a163022c493daa20d49')
package() {
	install -Dm755 "$srcdir/${pkgname}" "${pkgdir}/usr/bin/${pkgname}"	
}
