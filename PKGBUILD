pkgname='vault'
pkgdesc='A tool for managing secrets'
pkgver='0.7.0'
pkgrel='1'
url='https://vaultproject.io/'
license=('MPL')
arch=('i686' 'x86_64')
makedepends=('gox' 'go')
depends=('glibc')
conflicts=("${pkgname}-git")
install='vault.install'
source=("https://github.com/hashicorp/vault/archive/v${pkgver}.tar.gz"
        'vault.service'
		'vault.hcl')
sha512sums=('dc43949acfaf54fc5a43a01657f52b1cab373cb2f3c8fad7b82320fd9dc42d99533fba91931a636dfce1e5d586a1421d74a991ad4e10117b595fb875c1b344d5'
            'a97d10208fd99b29cf532c9b5882fe1bbb3faee1d1d706f95a9c379fef461c65a9f16c8530438920024e69871ebd8c7329e6b65025ad65092950bfb74ce393b3'
            '8c064aa5dcca84822c1fa85e9d0ff520df46f794b2e9c689a9b4f81f74279387b3aebc08b3ca26cf786c2fcf1a330e765bf5a511074c24f87e5346672346ba1c')

_srcpath='src/github.com/hashicorp/vault'
prepare () {
	if [[ ! -r ${_srcpath} ]] ; then
		mkdir -p "$(dirname "${_srcpath}")"
		ln -s "$(pwd)/${pkgname}-${pkgver}" "${_srcpath}"
	fi
}

build () {
	export GOPATH="${srcdir}:$(pwd)"
	cd "${_srcpath}"
	go generate $(go list ./... | grep -v vendor)
	gox -verbose -osarch="$(go env GOOS)/$(go env GOARCH)" -output=_build/vault .
}

package () {
	cd "${pkgname}-${pkgver}"
	install -Dm755 _build/vault "${pkgdir}/usr/bin/vault"
	install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
	install -Dm644 "${srcdir}/vault.hcl" "${pkgdir}/etc/vault.hcl"
	install -Dm644 "${srcdir}/vault.service" \
		"${pkgdir}/usr/lib/systemd/system/vault.service"
	for file in README.md CHANGELOG.md ; do
		install -Dm644 "${file}" "${pkgdir}/usr/share/doc/${pkgname}/${file}"
	done
}
