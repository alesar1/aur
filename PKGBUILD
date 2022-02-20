# Maintainer: Nathaniel Chin <thegamingorangutans+aur at gmail.com>

pkgname=av1an-git
pkgver=0.3.1.r15.g6c70e2c
pkgrel=1
pkgdesc='A cross-platform all-in-one tool for streamlining AV1 encoding'
arch=('x86_64')
url='https://github.com/master-of-zen/Av1an'
license=('GPL3')
makedepends=('git' 'cargo' 'nasm' 'clang')
depends=('ffmpeg4.4' 'aom' 'vapoursynth')
optdepends=('svt-av1: SVT-AV1 encoder support'
            'rav1e: rav1e encoder support'
            'libvpx: vpx encoder support'
            'vmaf: VMAF calculation support'
            'mkvtoolnix-cli: mkvmerge support'
            'ffms2'
            'vapoursynth-plugin-lsmashsource')
provides=('av1an')
conflicts=('av1an')
source=("git+https://github.com/master-of-zen/Av1an.git")
sha256sums=('SKIP')

pkgver() {
  cd "Av1an"
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
    cd "Av1an"
    cargo fetch --locked --target "x86_64-unknown-linux-gnu"
}

build() {
  cd "Av1an"
  export CFLAGS+=" -ffat-lto-objects"
  export PKG_CONFIG_PATH='/usr/lib/ffmpeg4.4/pkgconfig'
  RUSTUP_TOOLCHAIN=stable cargo build --release --target-dir=target --frozen --no-default-features
}

package() {
  cd "Av1an"
  install -Dm 755 target/release/av1an -t "${pkgdir}/usr/bin"
}
