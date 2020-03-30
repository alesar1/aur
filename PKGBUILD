# Maintainer: Juan Simón <play4pro at protonmail dot com>
# Contributor: alium
# Contributor: angelsl
_pkgbase=r8168
pkgname=${_pkgbase}-dkms
pkgver=8.048.02
pkgrel=1
pkgdesc="A kernel module for Realtek 8168 network cards (DKMS version)"
url="https://github.com/simonbcn/r8168-dkms"
license=("GPL")
arch=('i686' 'x86_64')
depends=('glibc' 'dkms')
conflicts=("${pkgname}")
optdepends=('linux-headers: Needed for build the module for Arch kernel'
	'linux-lts-headers: Needed for build the module for LTS Arch kernel'
	'linux-zen-headers: Needed for build the module for ZEN Arch kernel')
source=(https://github.com/simonbcn/r8168-dkms/archive/$pkgver/$pkgname-$pkgver.tar.gz
        dkms.conf)
install=r8168-dkms.install

package() {
	install -Dm644 dkms.conf "${pkgdir}/usr/src/${pkgname}-${pkgver}/dkms.conf"

	sed -e "s/@PKGNAME@/${_pkgbase}/g" \
		-e "s/@PKGVER@/${_pkgbase}/g" \
		-i "${pkgdir}/usr/src/${pkgname}-${pkgver}/dkms.conf"

	cd "${pkgname}-$pkgver"
	rm src/Makefile_linux24x
	cp -dr --no-preserve='ownership' src "${pkgdir}/usr/src/${pkgname}-${pkgver}/src"
}
sha256sums=('e1457d11651a25eefd8042afdfdd0380d29b37add5ca680a1ce067447295c76e'
            'e33abcbc8fbe3129459ebc60be3b2f8ed55ddc53755f4956d6feb16c61c43250')
