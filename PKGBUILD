# Maintainer: Daniel Bermond < yahoo-com: danielbermond >

# To enable the Instrumentation and Tracing Technology API (ittnotify),
# firstly install the package intel-seapi and then build intel-media-sdk.
# It will be autodetected by the build system, serving as a makedepend.
# Currently it will not be a mandatory makedepend.

_commit='934c36b9d0f01af04de23c35d63b5916ee7b3102'

_srcname=MediaSDK
pkgname=intel-media-sdk
pkgver=1.2a
pkgrel=4
epoch=1
pkgdesc='API to access hardware-accelerated video decode, encode and filtering on Intel platforms with integrated graphics'
arch=('x86_64')
url='https://github.com/Intel-Media-SDK/MediaSDK/'
license=('MIT')
depends=(
    # official repositories:
        'libva'
    # AUR:
        'intel-media-driver'
)
makedepends=(
    # official repositories:
        'perl' 'cmake'
    # AUR:
        'gcc5'
)
provides=('libmfx')
conflicts=('intel-media-sdk-git' 'libmfx' 'libmfx-git')
options=('!emptydirs')
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/Intel-Media-SDK/MediaSDK/archive/${pkgver}.tar.gz"
        'intel-media-sdk-gcc5-fix.patch'
        'intel-media-sdk-change-gcc-version.patch'
        'intel-media-sdk-detect-intel-opencl.patch'
        'intel-media-sdk-add-runtime-libraries.patch'
        'intel-media-sdk-support-libva-v2.0-branch-next.patch'::"https://github.com/Intel-Media-SDK/MediaSDK/commit/${_commit}.patch"
        'intel-media-sdk-compatibility-with-upstream-libva.patch')
sha256sums=('04b11524c9e25dba95524bdcb07bd02b6833277c03ab7c3b83acfec9f83ce8d5'
            'e8687d509fcdefe0b9d01f12c7437425aa12791795046506fb13483dcca924ab'
            '1e87af43f125b37b1ed12f5fd9f87a0260fe05204d12ac29567eeb389284de31'
            '689ebc270532c0e1e5132d39898ff2a93fe3483a5a2673aea396a24fc07ad24c'
            'a4e02e01fbb289503be58006a3ddfdf4a1e4a1e127bcb64c5b539b94c53700cf'
            '9899560bf50d999e830786d874ebb36d2b1c4a85c6dc978fa8716876873fdeb6'
            '7e565f73d7d998d2f580ffa1e9159c4285fe5826a8c446812fdb5ebe9393780f')

prepare() {
    cd "${_srcname}-${pkgver}"
    
    # support upstream libva from 01org (currently needs libva-git)
    patch -Np1 -i "${srcdir}/intel-media-sdk-support-libva-v2.0-branch-next.patch"
    patch -Np1 -i "${srcdir}/intel-media-sdk-compatibility-with-upstream-libva.patch"
    
    # build fixes
    patch -Np1 -i "${srcdir}/intel-media-sdk-gcc5-fix.patch"
    patch -Np1 -i "${srcdir}/intel-media-sdk-change-gcc-version.patch"
    patch -Np1 -i "${srcdir}/intel-media-sdk-detect-intel-opencl.patch"
    patch -Np1 -i "${srcdir}/intel-media-sdk-add-runtime-libraries.patch"
    
    # fix ittnotify (intel-seapi) detection in the build system
    sed -i '/ITT_LIB/s/\$ENV{ITT_PATH}/$ENV{ITT_PATH}\/lib/' builder/FindVTune.cmake
}

build() {
    cd "${_srcname}-${pkgver}"
    
    export MFX_HOME="$(pwd)"
    
    export ITT_PATH='/usr'
    
    export CFLAGS="$(  printf '%s' "$CFLAGS"   | sed 's/-fno-plt//')"
    export CXXFLAGS="$(printf '%s' "$CXXFLAGS" | sed 's/-fno-plt//')"
    
    perl tools/builder/build_mfx.pl \
                            --cmake='intel64.make.release' \
                            --prefix='/usr'
                            
    make -C __cmake/intel64.make.release
}

package() {
    cd "${_srcname}-${pkgver}"
    
    make \
        -C __cmake/intel64.make.release \
        DESTDIR="$pkgdir" \
        install
        
    mv -f "$pkgdir"/usr/lib64/* "${pkgdir}/usr/lib"
    rm -rf "${pkgdir}/usr/lib64"
    
    mkdir -p "${pkgdir}/usr/"{include/mfx,lib/pkgconfig,lib/"$pkgname"}
    
    # move samples to a better place
    mv -f "${pkgdir}/usr/samples" "${pkgdir}/usr/lib/${pkgname}"
    
    # license
    cd "${srcdir}/${_srcname}-${pkgver}"
    install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
    
    # bellow are fixes for ffmpeg (some paths are hardcoded, use symlinks)
    
    # includes
    cd "${pkgdir}/usr/include"
    for _header in *.h
    do
        cd mfx
        ln -sf ../"$_header" "$_header"
        cd ..
    done
    
    # libraries
    cd "${pkgdir}/usr/lib/lin_x64"
    for _lib in *.a
    do
        cd ..
        ln -sf "lin_x64/$_lib" "$_lib"
        cd "lin_x64"
    done
    
    # pkgconfig files
    cd "${pkgdir}/usr/lib/lin_x64/pkgconfig"
    ln -sf mfx.pc libmfx.pc
    cd "${pkgdir}/usr/lib/pkgconfig"
    ln -sf ../"lin_x64/pkgconfig/mfx.pc"       mfx.pc
    ln -sf ../"lin_x64/pkgconfig/libmfx.pc" libmfx.pc
    
    # plugins
    cd "${pkgdir}/usr/plugins"
    for _plugin in *
    do
        ln -sf ../plugins/"$_plugin" ../lib/"$_plugin"
    done
}
