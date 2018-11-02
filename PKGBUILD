# Maintainer: Daniel Bermond < gmail-com: danielbermond >

# To enable the Instrumentation and Tracing Technology API (ittnotify):
#   - install the package intel-seapi
#   - in build(), change '-DENABLE_ITT:BOOL=' from 'OFF' to 'ON'
#   - and then build intel-media-sdk
# intel-seapi will be autodetected by the build system, serving as a makedepend.
# Currently it will not be a mandatory makedepend.

pkgname=intel-media-sdk
pkgver=2018.3.1
_srcver="${pkgver:2}"
pkgrel=1
epoch=1
pkgdesc='API to access hardware-accelerated video decode, encode and filtering on Intel platforms with integrated graphics'
arch=('x86_64')
url='https://github.com/Intel-Media-SDK/MediaSDK/'
license=('MIT')
depends=('gcc-libs' 'libdrm' 'libva' 'wayland' 'intel-media-driver')
makedepends=('cmake' 'libpciaccess' 'libx11' 'libxcb')
provides=('libmfx')
install="${pkgname}.install"
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/Intel-Media-SDK/MediaSDK/archive/intel-mediasdk-${_srcver}.tar.gz"
        'intel-media-sdk.conf'
        'intel-media-sdk.sh')
sha256sums=('46f54f22e5a9cf41f1a6ab55346a0513ed02b2e99d41f9d178c6820d378922e3'
            '63e76d28140486871a3ffc29ce19c84914583bf243201946c76943bf54df374a'
            '315ea6f304cf2b7b6a8aaabb0b8f71fcd480677c7fb9c8cbfa51c7830bb159bc')

build() {
    cd "MediaSDK-intel-mediasdk-${_srcver}"
    
    mkdir -p build
    cd build
    
    cmake \
        -DBUILD_ALL:BOOL='ON' \
        -DBUILD_DISPATCHER:BOOL='ON' \
        -DBUILD_RUNTIME:BOOL='ON' \
        -DBUILD_SAMPLES:BOOL='ON' \
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
    cd "MediaSDK-intel-mediasdk-${_srcver}/build"
    
    make DESTDIR="$pkgdir" install
    
    # metrics_monitor
    install -D -m755 __bin/release/libcttmetrics.so -t "${pkgdir}/opt/intel/mediasdk/share/mfx/samples"
    install -D -m755 __bin/release/metrics_monitor  -t "${pkgdir}/opt/intel/mediasdk/share/mfx/samples"
    ln -s ../share/mfx/samples/libcttmetrics.so "${pkgdir}/opt/intel/mediasdk/lib64/libcttmetrics.so"
    
    # ld.so and profile configuration files
    cd "$srcdir"
    install -D -m644 intel-media-sdk.conf -t "${pkgdir}/etc/ld.so.conf.d"
    install -D -m755 intel-media-sdk.sh   -t "${pkgdir}/etc/profile.d"
    
    # license
    cd "${srcdir}/MediaSDK-intel-mediasdk-${_srcver}"
    install -D -m644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
