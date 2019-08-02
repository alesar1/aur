# Maintainer: Mikuro Kagamine <mikurok@forgecrushing.com>

_gonamespc='github.com/schollz/croc'
pkgname=croc-bin
pkgver=6.1.1
pkgrel=1
pkgdesc="Easily and securely send things from one computer to another."
arch=('x86_64')
url="https://${_gonamespc}"
license=('MIT')
#depends=()
#makedepends=('go')
optdepends=('upx: compress binary')
provides=('croc')
conflicts=('croc' 'croc-git')
#options=()
source=("${url}/releases/download/v${pkgver}/${provides[0]}_${pkgver}_linux-64bit.tar.gz"
		"croc.service")
sha256sums=('87057e1a7db3dc9c91f2fb4839ab8bebaa7ad6cc31b38e84850db72dcd4b1a4d'
			'cf074568f16c7b86870a89a0a2d8e488e3837223cca071a911085d814d6f2194')

build() {
	if [ $(which upx 2>/dev/null) ]; then
		echo Compressing ${provides[0]} with UPX...
		upx "${srcdir}/${provides[0]}"; fi
}

package() {
	install -Dm755 "${srcdir}/${provides[0]}" "${pkgdir}/usr/bin/${provides[0]}"
	install -Dm644 "${srcdir}/${source[1]}" "${pkgdir}/usr/lib/systemd/system/${source[1]}"
}
