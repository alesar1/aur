pkgname='vault'
pkgdesc='A tool for managing secrets'
pkgver='0.7.1'
pkgrel='1'
url='https://vaultproject.io/'
license=('MPL')
arch=('i686' 'x86_64')
makedepends=('gox' 'go')
depends=('glibc')
conflicts=("${pkgname}-git")
install='vault.install'
backup=('etc/vault.hcl')
source=("https://github.com/hashicorp/vault/archive/v${pkgver}.tar.gz"
        'vault.service'
        'vault.hcl')
sha512sums=('8f5ed3775e8fba42aa6e654daa81d455bc9401fdf37012bfc34acd7adb8ca793387f4062f85d722474c4382e2b32f2a10f7112e6db4ad056b40c572a29797a44'
            '5dfa4775e2dc43bb3db8090a0ffa436d2c83245d7777476ef3f3c0f0b1799114b34c02dbb3780ab0ec889fa7e40057c0934884c1d092ec42cda5d3407162672e'
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
