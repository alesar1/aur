# Maintainer: Jakub Klinkovský <j.l.k cat gmx dog com>
# Contributor: Myles English <myles at tdma dot co>

pkgname=pastix
pkgver=6.1.0
pkgrel=1
pkgdesc="High performance parallel solver for very large sparse linear systems based on direct methods"
arch=('x86_64')
url="https://gitlab.inria.fr/solverstack/pastix"
license=('CeCILL-C')
depends=('cblas' 'lapacke' 'hwloc' 'scotch' 'metis' 'openmpi' 'python')
makedepends=('gcc-fortran' 'cmake' 'git' 'doxygen')
provides=('libpastix.so' 'libpastix_kernels.so'
          # also provide the SpM library (internal module)
          'libspm.so' 'libspmf.so')
source=("${pkgname}::git+${url}.git#tag=v${pkgver}"
        gitmodules.diff
        coeftabMemory.patch)
md5sums=('SKIP'
         '59430d563cc9a665292c0d793520e148'
         '75c21a70d036c8f50ac5a5ffb8f827bb')

prepare() {
    cd "${pkgname}"
    patch -p2 < ../gitmodules.diff
    git submodule update --init --recursive

    # fix compiler error due to coeftabMemory
    patch -Np1 < ../coeftabMemory.patch

    [ -d build ] && rm -rf build
    mkdir build
}

build() {
    cd "${pkgname}/build"
    cmake .. \
        -DCMAKE_BUILD_TYPE=Release \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DBUILD_SHARED_LIBS=ON \
        -DBUILD_DOCUMENTATION=ON \
        -DPASTIX_ORDERING_METIS=ON \
        -DPASTIX_WITH_MPI=ON \
        -DPASTIX_INT64=OFF   # because scotch is not compiled with int64
    make
}

package() {
    cd "${pkgname}/build"
    make install DESTDIR="${pkgdir}"

    # remove the env script (not necessary since we install into /usr which is searched by default)
    rm "${pkgdir}/usr/bin/pastix_env.sh"
    rmdir "${pkgdir}/usr/bin"

    # move examples into proper doc directory
    install -dm755 "${pkgdir}/usr/share/doc/pastix/"
    mv "${pkgdir}/usr/examples" "${pkgdir}/usr/share/doc/pastix/"
}
