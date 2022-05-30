# Maintainer: Daniel Bermond <dbermond@archlinux.org>

pkgname=onevpl-intel-gpu-git
pkgver=22.4.2.r16.g66ef3aea
pkgrel=1
pkgdesc='oneVPL runtime implementation for Intel GPU (TigerLake and later) (git version)'
arch=('x86_64')
url='https://software.intel.com/content/www/us/en/develop/tools/oneapi/components/onevpl.html'
license=('MIT')
depends=('libdrm' 'libva')
makedepends=('git' 'cmake')
provides=('onevpl-intel-gpu' 'onevpl-runtime')
conflicts=('onevpl-intel-gpu')
source=('git+https://github.com/oneapi-src/oneVPL-intel-gpu.git'
        '010-onevpl-intel-gpu-disable-verbose-makefile.patch')
sha256sums=('SKIP'
            'c6b17b7026d16d02c3cab7b5081366c24021a86fa173eaee5db310691ce76879')

prepare() {
    patch -d oneVPL-intel-gpu -Np1 -i "${srcdir}/010-onevpl-intel-gpu-disable-verbose-makefile.patch"
}

pkgver() {
    local _version
    _version="$(git -C oneVPL-intel-gpu tag --list --sort='-v:refname' 'intel-onevpl-*' | head -n1 | sed 's/^intel\-onevpl\-//')"
    printf '%s.r%s.g%s' "$_version" \
                        "$(git -C oneVPL-intel-gpu rev-list --count "intel-onevpl-${_version}..HEAD")" \
                        "$(git -C oneVPL-intel-gpu rev-parse --short HEAD)"
}

build() {
    cmake -B build -S oneVPL-intel-gpu \
        -DCMAKE_BUILD_TYPE:STRING='None' \
        -DCMAKE_INSTALL_PREFIX:PATH='/usr' \
        -DBUILD_TESTS:BOOL='ON' \
        -Wno-dev
    make -C build
}

package() {
    make -C build DESTDIR="$pkgdir" install
    install -D -m644 oneVPL-intel-gpu/{LICENSE,NOTICE} -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
