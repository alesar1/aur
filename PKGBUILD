# Maintainer: Juan Simón <play4pro at protonmail dot com>
# Contributor: alium
# Contributor: angelsl
_pkgbase=r8168
pkgname=${_pkgbase}-dkms
pkgver=8.048.02
pkgrel=2
pkgdesc="A kernel module for Realtek 8168 network cards (DKMS version)"
url="https://github.com/simonbcn/r8168-dkms"
license=("GPL")
arch=('i686' 'x86_64')
depends=('glibc' 'dkms')
makedepends=('git')
conflicts=("${pkgname}")
optdepends=('linux-headers: Needed for build the module for Arch kernel'
	'linux-lts-headers: Needed for build the module for LTS Arch kernel'
	'linux-zen-headers: Needed for build the module for ZEN Arch kernel')
source=("r8168-dkms::git+https://github.com/simonbcn/r8168-dkms.git"
        dkms.conf)
install=r8168-dkms.install

package() {
	install -Dm644 dkms.conf "${pkgdir}/usr/src/${pkgname}-${pkgver}/dkms.conf"

	sed -e "s/@PKGNAME@/${_pkgbase}/g" \
		-e "s/@PKGVER@/${_pkgbase}/g" \
		-i "${pkgdir}/usr/src/${pkgname}-${pkgver}/dkms.conf"

	cd "${pkgname}"
	rm src/Makefile_linux24x
	cp -dr --no-preserve='ownership' src "${pkgdir}/usr/src/${pkgname}-${pkgver}/src"
}
sha256sums=('SKIP'
            'e33abcbc8fbe3129459ebc60be3b2f8ed55ddc53755f4956d6feb16c61c43250')
