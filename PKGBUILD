# Maintainer: taotieren <admin@taotieren.com>

pkgname=purc-git
pkgver=0.8.1.r20.ga1702fd8
pkgrel=1
pkgdesc="The prime HVML interpreter for C Language."
arch=('any')
url="https://github.com/HVML/PurC"
license=('LGPL-3.0')
provides=(${pkgname%-git} 'PurC')
conflicts=(${pkgname%-git})
#replaces=(${pkgname})
depends=('glib2' 'bison' 'flex')
makedepends=('git' 'cmake' 'ninja' 'ccache' 'gcc' 'python' 'libxml2' 'ruby' 'curl' 'openssl' 'sqlite' 'pkgconf' 'zlib' 'icu')
backup=()
options=('!strip')
#install=${pkgname}.install
source=("${pkgname%-git}::git+${url}.git")
sha256sums=('SKIP')

pkgver() {
    cd "${srcdir}/${pkgname%-git}/"
    git describe --long --tags | sed 's/ver.//g;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    cd "${srcdir}/${pkgname%-git}"

# CMake build
#     cmake -DCMAKE_BUILD_TYPE=Debug \
#         -DPORT=Linux \
#         -DCMAKE_INSTALL_PREFIX=/usr \
#         -DCMAKE_INSTALL_LIBDIR=lib \
#         -DCMAKE_INSTALL_LIBEXECDIR=lib \
#         -B build

#     cmake --build build

# Ninja build
    cmake -DCMAKE_BUILD_TYPE=Debug \
        -DPORT=Linux \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DCMAKE_INSTALL_LIBDIR=lib \
        -DCMAKE_INSTALL_LIBEXECDIR=lib \
        -B build \
        -G Ninja

    ninja -C build
}

package() {
# make install
#     make -C "${srcdir}"/${pkgname%-git}/build install DESTDIR="${pkgdir}"

# ninja install
    DESTDIR="${pkgdir}" ninja -C "${srcdir}"/${pkgname%-git}/build install
}
