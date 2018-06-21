# Maintainer: Daniel Bermond < yahoo-com: danielbermond >

_srcname=IntelSEAPI
pkgname=intel-seapi
pkgver=17.01.28
pkgrel=4
pkgdesc='Intel Single Event API (Intel SEAPI)'
arch=('i686' 'x86_64')
url='https://github.com/intel/IntelSEAPI/'
license=('BSD' 'GPL')
depends=('gcc-libs')
makedepends=('python' 'cmake' 'java-environment' 'classpath')
optdepends=('python: for using runtool modules')
provides=('intel-ittnotify')
conflicts=('intel-seapi-git' 'intel-ittnotify' 'intel-ittnotify-git')
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/intel/IntelSEAPI/archive/${pkgver}.tar.gz"
        'intel-seapi-change-install-prefix.patch')
sha256sums=('57020dfa8b5c1a62a3700e0c93a60011a42b6ec4b80824510aaaa830a256c76b'
            '5a4666d324f11e8c57b51aa1e4680d77790f3449cb319f4cf9223c25dce0d1a0')

[ "$CARCH" = 'i686'   ] && _architecture='32'
[ "$CARCH" = 'x86_64' ] && _architecture='64'

prepare() {
    cd "${_srcname}-${pkgver}"
    
    # change install prefix to '/usr' instead of '/usr/local'
    patch -Np1 -i "${srcdir}/intel-seapi-change-install-prefix.patch"
}

build() {
    cd "${_srcname}-${pkgver}"
    
    python ./buildall.py --force_bits "$_architecture"
}

package() {
    cd "${_srcname}-${pkgver}/build_linux/${_architecture}"
    
    make DESTDIR="$pkgdir" install
    
    # library
    mv -f "${pkgdir}/usr/bin/libIntelSEAPI${_architecture}.so" "${pkgdir}/usr/lib"
    
    # python
    local _pythonver="$(python --version | sed 's/^Python[[:space:]]//' | grep -o '^[0-9]*\.[0-9]*')"
    mkdir -p "${pkgdir}/usr/lib/python${_pythonver}/${pkgname}"
    mv -f "$pkgdir"/usr/runtool/* "${pkgdir}/usr/lib/python${_pythonver}/${pkgname}"
    
    # cleanup
    rm -rf "${pkgdir}/usr/runtool"
    rm -f "${pkgdir}/usr/README.txt"
    
    # license
    cd "${srcdir}/${_srcname}-${pkgver}/ittnotify/src/ittnotify"
    install -D -m644 LICENSE.BSD "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE.BSD"
}
