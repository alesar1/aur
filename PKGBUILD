# Maintainer: Daniel Bermond < gmail-com: danielbermond >

# To enable the Instrumentation and Tracing Technology API (ittnotify):
#   - install the package intel-seapi
#   - in build(), change '-DENABLE_ITT:BOOL=' from 'OFF' to 'ON'
#   - and then build intel-media-sdk
# intel-seapi will be autodetected by the build system, serving as a makedepend.
# Currently it will not be a mandatory makedepend.

pkgname=intel-media-sdk-git
pkgver=2018.3.pre3.r77.g53c73e5
pkgrel=1
pkgdesc='API to access hardware-accelerated video decode, encode and filtering on Intel platforms with integrated graphics (git version)'
arch=('x86_64')
url='https://github.com/Intel-Media-SDK/MediaSDK/'
license=('MIT')
depends=(
    # official repositories:
        'gcc-libs' 'libdrm' 'wayland' 'intel-media-driver'
    # AUR:
        'libva-git'
)
makedepends=('git' 'git-lfs' 'cmake' 'libpciaccess' 'libx11' 'libxcb')
provides=('intel-media-sdk' 'libmfx')
conflicts=('intel-media-sdk')
install="${pkgname}.install"
source=('intel-media-sdk-git.conf'
        'intel-media-sdk-git.sh')
sha256sums=('63e76d28140486871a3ffc29ce19c84914583bf243201946c76943bf54df374a'
            '315ea6f304cf2b7b6a8aaabb0b8f71fcd480677c7fb9c8cbfa51c7830bb159bc')

prepare() {
    # makepkg does not support cloning git-lfs repositories
    if [ -d "$pkgname" ] 
    then
        printf '%s\n' "  -> Updating ${pkgname} git repo..."
        cd "$pkgname"
        git pull origin
    else
        printf '%s\n' "  -> Cloning ${pkgname} git repo..."
        git lfs install
        git clone https://github.com/Intel-Media-SDK/MediaSDK.git "$pkgname"
        cd "$pkgname"
    fi
}

pkgver() {
    cd "$pkgname"
    
    local _prefix='intel-mediasdk-'
    
    # git, tags available
    git describe --long --tags | sed "s/^${_prefix}//;s/^[0-9]\{2\}/20&/;s/\([^-]*-g\)/r\1/;s/-/./g;s/^v//"
}

build() {
    cd "$pkgname"
    
    mkdir -p build
    cd build
    
    cmake \
        -DBUILD_ALL:BOOL='ON' \
        -DBUILD_DISPATCHER:BOOL='ON' \
        -DBUILD_RUNTIME:BOOL='ON' \
        -DBUILD_SAMPLES:BOOL='ON' \
        -DBUILD_TESTS:BOOL='OFF' \
        -DBUILD_TOOLS:BOOL='ON' \
        -DENABLE_ALL:BOOL='ON' \
        -DENABLE_ITT:BOOL='OFF' \
        -DENABLE_OPENCL:BOOL='ON' \
        -DENABLE_STAT:BOOL='OFF' \
        -DENABLE_TEXTLOG:BOOL='OFF' \
        -DENABLE_WAYLAND:BOOL='ON' \
        -DENABLE_X11_DRI3:BOOL='ON' \
        -Wno-dev \
        ..
        
    make
}

package() {
    cd "${pkgname}/build"
    
    make DESTDIR="$pkgdir" install
    
    # metrics_monitor
    install -D -m755 __bin/release/libcttmetrics.so -t "${pkgdir}/opt/intel/mediasdk/share/mfx/samples"
    install -D -m755 __bin/release/metrics_monitor  -t "${pkgdir}/opt/intel/mediasdk/share/mfx/samples"
    ln -s ../share/mfx/samples/libcttmetrics.so "${pkgdir}/opt/intel/mediasdk/lib64/libcttmetrics.so"
    
    # ld.so and profile configuration files
    cd "$srcdir"
    install -D -m644 intel-media-sdk-git.conf -t "${pkgdir}/etc/ld.so.conf.d"
    install -D -m755 intel-media-sdk-git.sh   -t "${pkgdir}/etc/profile.d"
    
    # license
    cd "${srcdir}/${pkgname}"
    install -D -m644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
