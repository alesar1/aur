# Maintainer: Daniel Bermond < yahoo-com: danielbermond >

# To enable the Instrumentation and Tracing Technology API (ittnotify):
#   - install the package intel-seapi
#   - in build(), change '-DENABLE_ITT:BOOL=' from 'OFF' to 'ON'
#   - and then build intel-media-sdk
# intel-seapi will be autodetected by the build system, serving as a makedepend.
# Currently it will not be a mandatory makedepend.

_srcname=MediaSDK
pkgname=intel-media-sdk-git
pkgver=2018.Q2.1.r215.g7885aa1
pkgrel=1
pkgdesc='API to access hardware-accelerated video decode, encode and filtering on Intel platforms with integrated graphics (git version)'
arch=('x86_64')
url='https://github.com/Intel-Media-SDK/MediaSDK/'
license=('MIT')
depends=(
    # official repositories:
        'gcc-libs' 'libdrm' 'wayland'
    # AUR:
        'libva-git' 'intel-media-driver'
)
makedepends=('git' 'git-lfs' 'cmake' 'libpciaccess' 'libx11' 'libxcb')
provides=('intel-media-sdk' 'libmfx')
conflicts=('intel-media-sdk' 'intel-media-server-studio')
options=('!emptydirs')

prepare() {
    # makepkg does not support cloning git-lfs repositories
    if [ -d "$_srcname" ] 
    then
        msg2 "Updating ${_srcname} git repo..."
        cd "$_srcname"
        git pull origin
    else
        msg2 "Cloning ${_srcname} git repo..."
        git lfs install
        git clone https://github.com/Intel-Media-SDK/MediaSDK.git
        cd "$_srcname"
    fi
}

pkgver() {
    cd "$_srcname"
    
    # git, tags available
    local _prefix='MediaSDK-'
    git describe --long --tags | sed "s/^${_prefix}//;s/\([^-]*-g\)/r\1/;s/-/./g;s/^v//;s/,//"
}

build() {
    cd "$_srcname"
    
    mkdir -p build
    cd build
    
    cmake \
        -G 'Unix Makefiles' \
        -D__GENERATOR:STRING='make' \
        -DCMAKE_CONFIGURATION_TYPES:STRING='release;debug' \
        -DCMAKE_BUILD_TYPE:STRING='release' \
        -D__IPP:STRING='e9' \
        -D__TARGET_PLATFORM:STRING='BDW' \
        -DCMAKE_CXX_FLAGS_RELEASE:STRING="${CXXFLAGS} ${CPPFLAGS}" \
        -DCMAKE_C_FLAGS_RELEASE:STRING="${CFLAGS} ${CPPFLAGS}" \
        -DCMAKE_COLOR_MAKEFILE:BOOL='ON' \
        -DENABLE_DRM:BOOL='ON' \
        -DENABLE_OPENCL:BOOL='ON' \
        -DENABLE_WAYLAND:BOOL='ON' \
        -DENABLE_X11:BOOL='ON' \
        -DENABLE_X11_DRI3:BOOL='ON' \
        -DENABLE_ITT:BOOL='OFF' \
        --no-warn-unused-cli \
        -Wno-dev \
        ..
        
    make
}

package() {
    cd "${_srcname}/build"
    
    make DESTDIR="$pkgdir" install
    
    # license
    cd "${srcdir}/${_srcname}"
    install -D -m644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
