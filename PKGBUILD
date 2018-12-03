# Maintainer: Daniel Bermond < gmail-com: danielbermond >

_spirv_cross_commit='bfeb388edfb63c9a927e517b634abaaa5bfb1caf'

pkgname=crossc
pkgver=1.6.0
pkgrel=2
pkgdesc='Portable C wrapper for SPIRV-Cross'
arch=('i686' 'x86_64')
url='https://github.com/rossy/crossc/'
license=('APACHE')
depends=('gcc-libs')
makedepends=('git')
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/rossy/crossc/archive/v${pkgver}.tar.gz"
        'SPIRV-Cross-git'::"git+https://github.com/KhronosGroup/SPIRV-Cross.git#commit=${_spirv_cross_commit}")
sha256sums=('2af9f6f5433b735de8a598cb9288a4085aff8586a1eea2df14a1dfe50c92769c'
            'SKIP')

prepare() {
    cd "${pkgname}-${pkgver}"
    
    rm -rf SPIRV-Cross
    ln -sf "${srcdir}/SPIRV-Cross-git" SPIRV-Cross
}

build() {
    cd "${pkgname}-${pkgver}"
    
    make
}

package() {
    cd "${pkgname}-${pkgver}"
    
    local _file
    local _lib
    local _soname
    local _somaj
    local _sover
    
    make DESTDIR="$pkgdir" prefix='/usr' install
    
    cd "${pkgdir}/usr/lib"
    
    # create missing symbolic link
    while read -rd '' _file
    do
        _lib="${_file##*/}"
        _soname="${_lib%%.*}"
        _sover="${_lib##*.so.}"
        _somaj="${_sover%%.*}"
        
        ln -s "${_lib}" "${_soname}.so.${_somaj}"
        
    done < <(find . -type f -name 'lib*.so.*.*.*' -print0)
}
