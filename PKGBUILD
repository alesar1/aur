# Maintainer: Dario Ostuni <another.code.996@gmail.com>
pkgname=python-or-tools
pkgver=6.1
pkgrel=1
pkgdesc="Google's Operations Research tools"
arch=('x86_64' 'i686' 'aarch64' 'armv7h')
url="https://github.com/google/or-tools"
license=('Apache2')
depends=('python')
makedepends=('cmake')
options=(!emptydirs)
source=("https://github.com/google/or-tools/archive/v${pkgver}.tar.gz")
sha256sums=('3a1d4d6ffca77467a1cc1bdc4bb480652c0a9314100d6fb32924826c2eb5ba94')

build() {
    cd "${srcdir}/or-tools-${pkgver}"
    mkdir -p "dependencies/install/lib"
    pushd "dependencies/install"
    ln -s "lib" "lib64"
    popd
    make third_party -j1
    make python
}

package() {
    cd "${srcdir}/or-tools-${pkgver}"
    mkdir -p "$pkgdir/usr/lib/python3.6/site-packages/"
    find ortools/ -name '*.py' -or -name '*.so' | xargs cp --parents -t "$pkgdir/usr/lib/python3.6/site-packages/"
    cp "lib/libortools.so" "$pkgdir/usr/lib/"
}
