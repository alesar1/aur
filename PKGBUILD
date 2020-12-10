# Maintainer:  Anton Kudelin <kudelin at protonmail dot com>
# Contributor: George Eleftheriou <eleftg>
# Contributor: Xwang <xwaang1976@gmail.com>
 
_PkgName=SU2
pkgname=su2
pkgver=7.0.8
pkgrel=1
pkgdesc="An Open-Source Suite for Multiphysics Simulation and Design"
url="https://su2code.github.io"
license=('LGPL2.1')
depends=('openmpi' 'python')
makedepends=('gcc-fortran')
arch=('x86_64')
source=("$pkgname-$pkgver.tar.gz::https://github.com/su2code/SU2/archive/v$pkgver.tar.gz")
sha256sums=('53b6d417e17ff4290a871257b2739a3d9bcd701d37c69e85397efedac93ba17f')

prepare() {
    cd "$srcdir/$_PkgName-$pkgver"
    autoreconf -if
    PYTHON_VERSION=$( python --version ) | awk '{print $2}' | cut -c -3
}

build() {
    cd "$srcdir/$_PkgName-$pkgver"
    ./configure --prefix=/usr --enable-mpi
    make
}

package() {
    cd "$srcdir/$_PkgName-$pkgver"
    make DESTDIR="$pkgdir" install
    install -dm755 "$pkgdir/usr/lib/python${PYTHON_VERSION}/site-packages"
    cd "$pkgdir/usr/bin"
    mv *.py FSI SU2 -t "$pkgdir/usr/lib/python${PYTHON_VERSION}/site-packages"
}
