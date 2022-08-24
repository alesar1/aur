# Maintainer: taotieren <admin@taotieren.com>

pkgname=purc-git
pkgver=0.8.1.r17.g61684e89
pkgrel=1
pkgdesc="The prime HVML interpreter for C Language."
arch=('any')
url="https://github.com/HVML/PurC"
license=('LGPL-3.0')
provides=(${pkgname})
conflicts=(${pkgname%-git})
#replaces=(${pkgname})
depends=('cmake' 'gcc' 'glib2' 'python' 'bison' 'flex')
makedepends=('git' 'cmake' 'ninja')
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
#     cmake -DCMAKE_BUILD_TYPE=RelWithDebInfo -DPORT=Linux -B build
#     cmake --build build

# Ninja build
    cmake -DCMAKE_BUILD_TYPE=RelWithDebInfo -DPORT=Linux -B build -G Ninja
    ninja -C build
}

package() {
# make install
#     make -C "${srcdir}"/${pkgname%-git}/build install DESTDIR="${pkgdir}"

# ninja install
    DESTDIR="${pkgdir}" ninja -C "${srcdir}"/${pkgname%-git}/build install
}
