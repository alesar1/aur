_pkgbase=r8168
pkgname=${_pkgbase}-dkms
pkgver=8.044.02
pkgrel=1
pkgdesc="A kernel module for Realtek 8168 network cards"
url="http://www.realtek.com.tw"
license=("GPL")
arch=('i686' 'x86_64')
depends=('glibc' 'dkms')
conflicts=("${_pkgbase}")
optdepends=('linux-headers: Build the module for Arch kernel'
		'linux-lts-headers: Build the module for LTS Arch kernel'
		'linux-zen-headers: Build the module for ZEN Arch kernel')
source=(r8168-$pkgver.tar.gz::http://12244.wpc.azureedge.net/8012244/drivers/rtdrivers/cn/nic/0009-r8168-8.044.02.tar.bz2 #http://12244.wpc.azureedge.net/8012244/drivers/rtdrivers/cn/nic/0009-r8168-8.044.02.tar.bz2
        'linux-4.5.patch'
        'dkms.conf')
install=r8168-dkms.install
sha256sums=('ad3cd1becb35efab52ed11e0326c1108806c55c62fd2b5e1cf7eaa749fb75027'
            '96f3367037a54fe699981a2d7a4b92754629bae7143b1241d787bf59d4a95ffa'
            '260d8142e944f3144cbc704534e662d427318d8b32dc7a2852a855be72e8d763')

prepare() {
	cd "r8168-$pkgver"
	patch -p1 -i ../linux-4.5.patch
}
 

package() {
	install -Dm644 dkms.conf "${pkgdir}/usr/src/${_pkgbase}-${pkgver}/dkms.conf"

	sed -e "s/@PKGNAME@/${_pkgbase}/g" \
		-e "s/@PKGVER@/${_pkgbase}/g" \
		-i "${pkgdir}/usr/src/${_pkgbase}-${pkgver}/dkms.conf"

	cd "${_pkgbase}-$pkgver"
	rm src/Makefile_linux24x
	cp -dr --no-preserve='ownership' src "${pkgdir}/usr/src/${_pkgbase}-${pkgver}/src"
}
