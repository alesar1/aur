# Maintainer: nushkovg
# Contributor: nushkovg
pkgname=kong-community-edition
pkgver=1.1.0
pkgrel=1
pkgdesc="Kong is a distributed gateway for APIs and Microservices, focused on high performance and reliability."
arch=('any')
url="https://getkong.org"
license=('Apache')
groups=('')
depends=('libyaml' 'luajit' 'openssl' 'pcre' 'zlib')
options=('!strip' '!emptydirs')
install=${pkgname}.install
source=("git+https://github.com/Kong/kong.git#1.1.0")
# sha512sums=('755e7b1b2cfae427c1dc49ef5bd0dff72b06fda690438f2b831762268313ce53aa14d3f42d2b8f13f6c3cb3643ef1aa74ffde7ccac14b80dd3fc527d3be5204b')

package(){
	# Enter the dir
	# cd "$srcdir"

	# Extract package data
	# tar xzf data.tar.gz -C "${pkgdir}"

	# Fix directories structure differencies
	cd "${pkgdir}"

	install -D -m644 "/usr/local/openresty/pod/nginx/license_copyright.pod" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
	install -D -m644 "/usr/local/openresty/pod/nginx/license_copyright.pod" "${pkgdir}/usr/share/licenses/${pkgname}/COPYRIGHT"
	mkdir usr/bin 2> /dev/null; mv usr/local/bin/* usr/bin; rm -rf usr/local/bin

	mv usr/local/* usr; rm -rf usr/local

	cd ..

}
