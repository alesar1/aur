# Maintainer: Tobi Fuhrimann

pkgname=nancy-bin
pkgver=0.2.6
pkgrel=1
pkgdesc="A tool to check for vulnerabilities in your Golang dependencies"
arch=(x86_64 i686)
url="https://github.com/sonatype-nexus-community/nancy"
license=('Apache 2.0')
provides=(nancy)
_src="${url}/releases/download/v${pkgver}/nancy-linux."
source_x86_64=("${_src}amd64-v${pkgver}.tar.gz")
source_i686=("${_src}386-v${pkgver}.tar.gz")
sha256sums_x86_64=('b06bc32cba199a730f74f912f4861b97530a8f2cbacde1fe1a8bdec5faa7b119')
sha256sums_i686=('2f7d18fd122d7b69ca002ed06d7b22eb72a156b87131d9f038baaa7fade49a89')

package() {
	local x86_64=amd64 i686=386
	install -Dm755 nancy -t "${pkgdir}/usr/bin"
}
