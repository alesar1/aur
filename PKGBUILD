# Contributor: Markus Hovorka <m.hovorka@live.de>
# Contributor: Florian Pritz <bluewind@xinu.at>
# Contributor: Jelle van der Waa <jelle@vdwaa.nl>
# Contributor: Hugo Osvaldo Barrera <hugo@barrera.io>
# Contributor: Matthias Maennich <arch@maennich.net>

pkgbase=shiboken2-git
pkgname=(python{2,}-shiboken2-git shiboken2-git)
pkgver=2.0.0.r5325.ad14f649
_upver=2.0.0
pkgrel=1
arch=('i686' 'x86_64')
license=('LGPL')
url="http://www.pyside.org"
makedepends=('git' 'clang' 'cmake' 'python2' 'python' 'libxslt'
             'qt5-xmlpatterns')
source=("$pkgbase::git+https://code.qt.io/pyside/pyside-setup.git#branch=5.9")
sha256sums=('SKIP')

pkgver() {
    cd "$srcdir/$pkgbase"
    printf "%s.r%s.%s" "$_upver" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
    cd "$srcdir/$pkgbase"
}

build(){
    # Build for python2.
    cd "$srcdir"/$pkgbase/sources/shiboken2
    mkdir -p build-py2 && cd build-py2
    cmake \
        -DCMAKE_C_COMPILER=/usr/bin/clang \
        -DCMAKE_CXX_COMPILER=/usr/bin/clang++ \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DCMAKE_BUILD_TYPE=Release \
        -DBUILD_TESTS=OFF \
        -DUSE_PYTHON_VERSION=2 \
        -DBUILD_TESTS=OFF ..
    make

    # Build for python3.
    cd "$srcdir"/$pkgbase/sources/shiboken2
    mkdir -p build-py3 && cd build-py3
    cmake \
        -DCMAKE_C_COMPILER=/usr/bin/clang \
        -DCMAKE_CXX_COMPILER=/usr/bin/clang++ \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DCMAKE_BUILD_TYPE=Release \
        -DBUILD_TESTS=OFF \
        -DUSE_PYTHON_VERSION=3 \
        -DBUILD_TESTS=OFF ..
    make
}

package_shiboken2-git() {
    pkgdesc="CPython bindings generator for C++ libraries"
    depends=('libxslt' 'clang' 'qt5-xmlpatterns')
    optdepends=("python2-shiboken2-git: for compilation against python2"
                "python-shiboken2-git: for compilation against python")

    cd "$srcdir"/$pkgbase/sources/shiboken2/build-py3
    make DESTDIR="$pkgdir" install

    rm -rf "$pkgdir/usr/lib/python"*
    rm -rf "$pkgdir/usr/lib/libshiboken2"*
    rm -rf "$pkgdir/usr/lib/pkgconfig/"
    rm "$pkgdir"/usr/lib/cmake/Shiboken2-$_upver/Shiboken2Config*python*.cmake
}

package_python2-shiboken2-git() {
    pkgdesc="Support library for Python2 bindings"
    depends=("python2" "shiboken2-git")

    cd "$srcdir"/$pkgbase/sources/shiboken2/build-py2
    make DESTDIR="$pkgdir" install

    mv "$pkgdir"/usr/lib/pkgconfig/shiboken2{,-py2}.pc

    rm -rf "$pkgdir"/usr/{include,bin,share}
    rm "$pkgdir/usr/lib/cmake/Shiboken2-$_upver/Shiboken2ConfigVersion.cmake"
    rm "$pkgdir/usr/lib/cmake/Shiboken2-$_upver/Shiboken2Config.cmake"
}

package_python-shiboken2-git() {
    pkgdesc="Support library for Python bindings"
    depends=("python" "shiboken2-git")

    cd "$srcdir"/$pkgbase/sources/shiboken2/build-py3
    make DESTDIR="$pkgdir" install

    rm -rf "$pkgdir"/usr/{include,bin,share}
    rm "$pkgdir/usr/lib/cmake/Shiboken2-$_upver/Shiboken2ConfigVersion.cmake"
    rm "$pkgdir/usr/lib/cmake/Shiboken2-$_upver/Shiboken2Config.cmake"
}
