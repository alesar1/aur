# Maintainer: 
pkgname=localdns-git
pkgver=0.2
pkgrel=9
pkgdesc="With this package the user is able to define a wrapper around DNS resolution with which one can define some fake dns adresses that will be mapped to a specific device on a local network identified by a mac address."
arch=(x86_64)
url="https://github.com/TETRX/local-dns-dump"
license=('GPL')
depends=('python>=3' 'python-dnslib' 'python-hosts>=1.0')
makedepends=('git' 'make' 'gcc>=10' 'autoconf')
source=("git+$url#branch=master")
md5sums=('SKIP')


build() {
	cd "local-dns-dump"
	git submodule init
	git submodule update
	 
}

package() {
	cd "local-dns-dump"
	make DESTDIR="$pkgdir" libcrafter
	make get_ip
	make DESTDIR="$pkgdir" install
}
