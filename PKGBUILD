pkgname='vault'
pkgdesc='A tool for managing secrets'
pkgver='0.2.0'
pkgrel=1
url='https://vaultproject.io/'
license=('MPL')
arch=('i686' 'x86_64')
makedepends=('godep')
depends=('glibc')
conflicts=("${pkgname}-git")
install='vault.install'
source=("https://github.com/hashicorp/vault/archive/v${pkgver}.tar.gz"
        'vault.service'
		'vault.hcl')
sha512sums=('SKIP'
            '3b86624b9fbb2997b421422b21131c960919e4f0745f9b0b0dfffa7760fbc42248a1aacf1e0b21c3dd0d5d5f67610ae30e69d89a70ab19c9968e72c32fa65931'
            '8c064aa5dcca84822c1fa85e9d0ff520df46f794b2e9c689a9b4f81f74279387b3aebc08b3ca26cf786c2fcf1a330e765bf5a511074c24f87e5346672346ba1c')

prepare () {
	mkdir -p "${pkgname}-${pkgver}/,build"
}

build () {
	cd "${pkgname}-${pkgver}"
	godep go build -x -v -o ,build/vault
}

package () {
	cd "${pkgname}-${pkgver}"
	install -Dm755 ,build/vault "${pkgdir}/usr/bin/vault"
	install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
	install -Dm644 "${srcdir}/vault.hcl" "${pkgdir}/etc/vault.hcl"
	install -Dm644 "${srcdir}/vault.service" \
		"${pkgdir}/usr/lib/systemd/system/vault.service"
	for file in README.md CHANGELOG.md ; do
		install -Dm644 "${file}" "${pkgdir}/usr/share/doc/${pkgname}/${file}"
	done
}
