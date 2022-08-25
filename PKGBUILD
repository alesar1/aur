# Maintainer: taotieren <admin@taotieren.com>

pkgname=purc
pkgver=0.8.1
pkgrel=4
pkgdesc="The prime HVML interpreter for C Language."
arch=('any')
url="https://github.com/HVML/PurC"
license=('LGPL-3.0')
provides=(${pkgname} 'PurC')
conflicts=(${pkgname}-git)
#replaces=(${pkgname})
depends=('glib2' 'bison' 'flex')
makedepends=('cmake' 'ninja' 'ccache' 'gcc' 'python' 'libxml2' 'ruby' 'curl' 'openssl' 'sqlite' 'pkgconf' 'zlib' 'icu')
optdepends=('domruler' 'purc-fetcher' 'xguipro')
backup=()
options=('!strip')
#install=${pkgname}.install
source=("${pkgname}-${pkgver}.tar.gz::${url}/archive/refs/tags/ver-${pkgver}.tar.gz")
sha256sums=('387fc10560eed813cd92b36a224f17a7fa94c2aa20264f7e75c9c471505071d5')

build() {
    cd "${srcdir}/PurC-ver-${pkgver}/"

# CMake build
#     cmake -DCMAKE_BUILD_TYPE=Release \
#         -DPORT=Linux \
#         -DCMAKE_INSTALL_PREFIX=/usr \
#         -DCMAKE_INSTALL_LIBDIR=lib \
#         -DCMAKE_INSTALL_LIBEXECDIR=lib \
#         -B build

#     cmake --build build

# Ninja build
    cmake -DCMAKE_BUILD_TYPE=Release \
        -DPORT=Linux \
        -DENABLE_API_TESTS=OFF \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DCMAKE_INSTALL_LIBDIR=lib \
        -DCMAKE_INSTALL_LIBEXECDIR=lib \
        -B build \
        -G Ninja

    ninja -C build
}

package() {
# make install
#     make -C "${srcdir}"/PurC-ver-${pkgver}/build install DESTDIR="${pkgdir}"

# ninja install
    DESTDIR="${pkgdir}" ninja -C "${srcdir}"/PurC-ver-${pkgver}/build install
}
