# Maintainer: Daniel Bermond < yahoo-com: danielbermond >

pkgname=intel-media-sdk-git
pkgver=1.2a.r40.gff56d31
pkgrel=1
pkgdesc='API to access hardware-accelerated video decode, encode and filtering on Intel platforms with integrated graphics (git version)'
arch=('x86_64')
url='https://github.com/Intel-Media-SDK/MediaSDK/'
license=('MIT')
depends=(
    # AUR:
        'libva-git' 'intel-media-driver-git'
)
makedepends=(
    # official repositories:
        'git' 'perl' 'cmake'
    # AUR:
        'git-lfs' 'gcc49'
)
provides=('intel-media-sdk' 'libmfx')
conflicts=('intel-media-sdk' 'libmfx')
source=('intel-media-sdk-change-gcc-version.patch'
        'intel-media-sdk-detect-intel-opencl.patch')
sha256sums=('d9fc114d06624504891b545df2913b01d4b07edfb99512388490eae40f9b9ab7'
            '689ebc270532c0e1e5132d39898ff2a93fe3483a5a2673aea396a24fc07ad24c')

prepare() {
    # makepkg does not support cloning git-lfs repositories
    if [ -d "$pkgname" ] 
    then
        msg2 "Updating '${pkgname}' git repo..."
        cd "$pkgname"
        git pull origin
    else
        msg2 "Cloning '${pkgname}' git repo..."
        git lfs install
        git clone https://github.com/Intel-Media-SDK/MediaSDK.git "$pkgname"
        cd "$pkgname"
    fi
    
    for _patch in intel-media-sdk-change-gcc-version.patch \
                  intel-media-sdk-detect-intel-opencl.patch
    do
        printf '%s\n' "Checking patch '${_patch}'"
        if patch -Np1 --dry-run -i "${srcdir}/${_patch}" >/dev/null
        then
            patch -Np1 -i "${srcdir}/${_patch}"
        fi
    done
}

pkgver() {
    cd "$pkgname"
    
    # git, tags available
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g;s/^v//;s/,//'
}

build() {
    cd "$pkgname"
    
    export MFX_HOME="$(pwd)"
    
    export CFLAGS="$(  printf '%s' "$CFLAGS"   | sed 's/-fno-plt//')"
    export CXXFLAGS="$(printf '%s' "$CXXFLAGS" | sed 's/-fno-plt//')"
    
    perl tools/builder/build_mfx.pl \
                            --no-warn-as-error \
                            --cmake='intel64.make.release' \
                            --prefix='/usr'
    
    make -C __cmake/intel64.make.release
}

package() {
    cd "$pkgname"
    
    make \
        -C __cmake/intel64.make.release \
        DESTDIR="$pkgdir" \
        install
    
    mv -f  "${pkgdir}/usr/lib64" "${pkgdir}/usr/lib"
    
    mkdir -p "${pkgdir}/usr/"{include/mfx,lib/"$pkgname"}
    
    # includes (add 'mfx' folder for ffmpeg compatibility)
    cd "${pkgdir}/usr/include"
    for _header in *.h
    do
        cd mfx
        ln -sf ../"$_header" "$_header"
        cd ..
    done
    
    # plugins
    cd "${pkgdir}/usr/plugins"
    for _plugin in *
    do
        ln -sf ../plugins/"$_plugin" ../lib/"$_plugin"
    done
    
    # move samples to a better place
    mv -f "${pkgdir}/usr/samples" "${pkgdir}/usr/lib/${pkgname}"
    
    # license
    cd "${srcdir}/${pkgname}"
    install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
