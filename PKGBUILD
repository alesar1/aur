# Maintainer: EHfive <eh5@sokka.cn>

pkgname=pulseaudio-modules-bt-git
pkgver=r100.6a4121c5
pkgrel=1
pkgdesc="PulseAudio Bluetooth modules with SBC, AAC, APTX, APTX-HD, Sony LDAC (A2DP codec) support"
arch=("i686" "x86_64" "arm" "armv6h" "armv7h" "aarch64")
url="https://github.com/EHfive/pulseaudio-modules-bt"
license=('LGPL')
depends=("pulseaudio>=12.0" "bluez>=5.0" "bluez-libs>=5.0" "sbc" "libfdk-aac")
makedepends=("cmake>=3.0" "make" "pkg-config" "libavcodec.so>=58-64" "libavutil.so>=56-64" "libtool" "libldac" "git")
optdepends=("libavcodec.so>=58-64" "libavutil.so>=56-64" "libldac")
provides=("pulseaudio-bluetooth")
conflicts=("pulseaudio-bluetooth")

source=("git+https://github.com/EHfive/pulseaudio-modules-bt.git"
        "git+https://github.com/pulseaudio/pulseaudio.git")

md5sums=('SKIP' 'SKIP')

pkgver() {
    cd "$srcdir/pulseaudio-modules-bt"
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
    cd "$srcdir/pulseaudio-modules-bt"
    rm -r pa libldac
    ln -sf -T "../pulseaudio" "pa"
    ln -sf -T "../libldac" "libldac"
    cd "pa"
    git checkout v`pkg-config libpulse --modversion|sed 's/[^0-9.]*\([0-9.]*\).*/\1/'`
}

build() {
    cd "$srcdir/pulseaudio-modules-bt"
    cmake \
        -DCMAKE_BUILD_TYPE=Release \
        -DFORCE_NOT_BUILD_LDAC=ON \
        .
    make
}

package() {
    cd "$srcdir/pulseaudio-modules-bt"
    make DESTDIR="$pkgdir" install
}
