# Maintainer: Abdul Khaliq <a.khaliq@outlook.my>

pkgname='pingme-bin'
_pkgname="${pkgname%-bin}"
pkgver=${PKGVER}
pkgrel=${PKGREL}
pkgdesc="PingMe is a CLI tool which provides the ability to send messages or alerts to multiple messaging platforms & email. (Offical binary)"
url='https://pingme.lmno.pk'
arch=("i686" "x86_64" "aarch64")
license=("MIT")
depends=()
makedepends=()
optdepends=('nfpm: deb and rpm packager')

_basedownloadurl="https://github.com/kha7iq/${_pkgname}/releases/download/${pkgver}"

source_x86_64=("${_pkgname}_${pkgver}_linux_x86_64.tar.gz::${_basedownloadurl}/${_pkgname}_linux_x86_64.tar.gz")
sha256sums_x86_64=(${SHA256SUM_X86})

source_i686=("${_pkgname}_${pkgver}_linux_i386.tar.gz::${_basedownloadurl}/${_pkgname}_linux_i386.tar.gz")
sha256sums_i686=(${SHA256SUM_i686})

source_aarch64=("${_pkgname}_${pkgver}_linux_arm64.tar.gz::${_basedownloadurl}/${_pkgname}_linux_arm64.tar.gz")
sha256sums_aarch64=(${SHA256SUM_AARCH64})

package() {
	# Bin
	rm -f "${pkgdir}/usr/bin/${_pkgname}"
	install -Dm755 "${srcdir}/${_pkgname}" "${pkgdir}/usr/bin/${_pkgname}"

}
