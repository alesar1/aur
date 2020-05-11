# Maintainer: Midov <midov@midov.pl>

pkgname=pantalaimon
pkgver=0.6.0
pkgrel=1
pkgdesc='Pantalaimon is an end-to-end encryption aware Matrix reverse proxy daemon.'
arch=('any')
url='https://github.com/matrix-org/pantalaimon'
license=('Apache')
depends=('python' 'libolm' 'python-matrix-nio' 'python-prompt_toolkit' 'python-janus' 'python-peewee' 'python-logbook' 'python-aiohttp' 'python-cachetools' 'python-pycryptodome' 'python-unpaddedbase64' 'python-h2' 'python-h11' 'python-notify2' 'python-pydbus' 'python-olm' 'python-jsonschema' 'python-atomicwrites' 'python-click' 'python-keyring' 'python-future')
source=("https://github.com/matrix-org/pantalaimon/archive/${pkgver}.tar.gz"
        "${pkgname}.service")
sha256sums=('0a645af70e9111c07c172dce1dc8ddcd22f1f9656017c248fd1a812f7935bd38'
            'cf693e0324a7f2965bc9e64ab2c3d75137e7993503ddb3ae3dddc84af6c0b0e9')

build() {
        cd "${pkgname}-${pkgver}"
}

package() {
        cd "${pkgname}-${pkgver}"
        python setup.py install --prefix=/usr --root="$pkgdir"
        install -Dm644 "${srcdir}"/pantalaimon.service "${pkgdir}"/usr/lib/systemd/user/pantalaimon.service
	install -Dm644 "${srcdir}"/"${pkgname}"-"${pkgver}"/docs/man/*.md -t "${pkgdir}"/usr/share/doc/"${pkgname}"/
	install -Dm644 "${srcdir}"/"${pkgname}"-"${pkgver}"/docs/man/*.1 -t "${pkgdir}"/usr/share/man/man1/
	install -Dm644 "${srcdir}"/"${pkgname}"-"${pkgver}"/docs/man/*.5 -t "${pkgdir}"/usr/share/man/man5/
	install -Dm644 "${srcdir}"/"${pkgname}"-"${pkgver}"/docs/man/*.8 -t "${pkgdir}"/usr/share/man/man8/
	install -Dm644 "${srcdir}"/"${pkgname}"-"${pkgver}"/LICENSE -t "${pkgdir}"/usr/share/licenses/"${pkgname}"/
}
