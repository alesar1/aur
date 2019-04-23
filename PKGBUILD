_pkgbase=r8168
pkgname=${_pkgbase}-dkms
pkgver=8.047.01
pkgrel=1
pkgdesc="A kernel module for Realtek 8168 network cards"
url="http://www.realtek.com.tw"
license=("GPL")
arch=('i686' 'x86_64')
depends=('glibc' 'dkms')
conflicts=("${_pkgbase}")
optdepends=('linux-headers: Needed for build the module for Arch kernel'
	'linux-lts-headers: Needed for build the module for LTS Arch kernel'
	'linux-zen-headers: Needed for build the module for ZEN Arch kernel')
source=(https://bitbucket.org/alium/r8168/downloads/r8168-$pkgver.tar.bz2
        dkms.conf)
install=r8168-dkms.install

#prepare() {
#	cd "r8168-$pkgver"
#	patch -p1 -i "$srcdir/linux-4.15-2.patch"
#}
 

package() {
	install -Dm644 dkms.conf "${pkgdir}/usr/src/${_pkgbase}-${pkgver}/dkms.conf"

	sed -e "s/@PKGNAME@/${_pkgbase}/g" \
		-e "s/@PKGVER@/${_pkgbase}/g" \
		-i "${pkgdir}/usr/src/${_pkgbase}-${pkgver}/dkms.conf"

	cd "${_pkgbase}-$pkgver"
	rm src/Makefile_linux24x
	cp -dr --no-preserve='ownership' src "${pkgdir}/usr/src/${_pkgbase}-${pkgver}/src"
}
sha256sums=('38794f0b5891c3668b8418987ed3d0a7e144d82e79caa8b7a6a79b483a3407b0'
            '260d8142e944f3144cbc704534e662d427318d8b32dc7a2852a855be72e8d763')
