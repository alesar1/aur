# Edit on github: https://github.com/LizardByte/Sunshine/tree/nightly/packaging/linux/aur/PKGBUILD
# Reference: https://wiki.archlinux.org/title/PKGBUILD

pkgname=sunshine
pkgver=0.16.0
pkgrel=1
pkgdesc="Sunshine is a self-hosted game stream host for Moonlight."
arch=('x86_64' 'i686')
url=https://app.lizardbyte.dev
license=('GPL3')

depends=('avahi' 'boost-libs' 'curl' 'libevdev' 'libpulse' 'libva' 'libvdpau' 'libx11' 'libxcb' 'libxfixes' 'libxrandr' 'libxtst' 'numactl' 'openssl' 'opus' 'udev')
makedepends=('boost' 'cmake' 'git' 'make' 'nodejs' 'npm')
optdepends=('cuda' 'libcap' 'libdrm')

provides=()
conflicts=()

source=("$pkgname::git+https://github.com/LizardByte/Sunshine.git#commit=91f4f15c496a6d360de3d3f56aa1c9fbf66e69b1")
sha256sums=('SKIP')

prepare() {
    cd "$pkgname"
    git submodule update --recursive --init
}

build() {
    pushd "$pkgname"
    npm install
    popd

    export CFLAGS="${CFLAGS/-Werror=format-security/}"
    export CXXFLAGS="${CXXFLAGS/-Werror=format-security/}"

    cmake \
        -S "$pkgname" \
        -B build \
        -Wno-dev \
        -D CMAKE_INSTALL_PREFIX=/usr \
        -D SUNSHINE_EXECUTABLE_PATH=/usr/bin/sunshine \
        -D SUNSHINE_ASSETS_DIR="share/sunshine"

    make -C build
}

package() {
    make -C build install DESTDIR="$pkgdir"
}
