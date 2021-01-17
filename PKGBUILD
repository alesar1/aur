# Maintainer: Lutz Freitag <aur.lutz@gottliebtfreitag.de>

pkgname=cndl-git
pkgver=1.0
pkgrel=1
pkgdesc='A flask-like webserver for C++'
url='https://github.com/gottliebtfreitag/cndl'
arch=('any')
license=('MIT')
makedepends=('git' 'cmake')
provides=('cndl')
depends=('simplyfile')
source=('git+https://github.com/nerdmaennchen/cndl.git')
sha256sums=('SKIP')

pkgver() {
    git -C cndl describe --tags
}

build() {
    cmake -B cndl/build -S cndl \
        -DCMAKE_BUILD_TYPE:STRING='None' \
        -DCMAKE_INSTALL_PREFIX:PATH='/usr' \
        -Wno-dev
    cmake --build cndl/build --target all
}

package() {
	cmake --build cndl/build --target install DESTDIR="$pkgdir"
    install -D -m644 cndl/LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
