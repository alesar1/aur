# Maintainer: Knut Ahlers <knut at ahlers dot me>

pkgname=yggdrasil
pkgver=0.3.6
pkgrel=1
pkgdesc="An experiment in scalable routing as an encrypted IPv6 overlay network"
arch=('i686' 'x86_64' 'armv7h' 'armv6h' 'aarch64')
url="https://github.com/yggdrasil-network/yggdrasil-go"
license=('LGPLv3')
conflicts=('yggdrasil-git')
makedepends=('go')
source=("${pkgname}-${pkgver}.tar.gz::${url}/archive/v${pkgver}.tar.gz"
	'yggdrasil.sysusers')
sha512sums=('3867b50b47048bd3e42483605116e695ecc6719afd2c1f5cbe261636f58389cd1aa9eaaef6cda907824a0bc7bbb653c1c1a3956d9ff0d0f4403307d2db9ae361'
            'b78d1f5efeeba184588ba7bdb2249d976aec160daa59742e032983da1aedad062d15c7c97cba3eba69412a0f7904ee123d98b58f859892d71188c25624295c32')

build() {
	cd "${pkgname}-go-${pkgver}"
	PKGNAME="${pkgname}" PKGVER="${pkgver}" ./build
}

package() {
	cd "${pkgname}-go-${pkgver}"
	install -Dm755 "yggdrasil" "${pkgdir}/usr/bin/yggdrasil"
	install -Dm755 "yggdrasilctl" "${pkgdir}/usr/bin/yggdrasilctl"
	install -Dm644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
	install -Dm644 contrib/systemd/yggdrasil.service -t "${pkgdir}/usr/lib/systemd/system"
	install -Dm644 "${srcdir}/yggdrasil.sysusers" "${pkgdir}/usr/lib/sysusers.d/yggdrasil.conf"
}
