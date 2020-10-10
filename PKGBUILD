# Maintainer: Noah Vogt <noahjosua.vogt@gmail.com>
pkgname=tibasicc-git
pkgver=1.0
pkgrel=1
pkgdesc="TI-BASIC (de-)compiler written in C++ with a decent preprocessor"
arch=("x86_64")
url="https://github.com/noahvogt/tibasicc.git"
license=('ISC')
makedepends=("git")
provides=(tibasicc)
conflicts=(tibasicc)
source=("git+$url")
md5sums=('SKIP')

pkgver() {
	cd "$_pkgname"
    git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
	cd tibasicc 
	make
}

package() {
	cd tibasicc
    cp build-etc/tibasicc-uninstall.hook /usr/share/libalpm/hooks/
    mkdir -p ${pkgdir}/opt/${pkgname}
    cp -rf * ${pkgdir}/opt/${pkgname}
    make PREFIX=/usr DESTDIR="${pkgdir}" install
    install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
    install -Dm644 README.md "${pkgdir}/usr/share/doc/${pkgname}/README.md"

}
