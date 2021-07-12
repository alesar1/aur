# Maintainer: Jacek Szafarkiewicz <szafar at linux dot pl>

pkgname=sunshine
pkgver=0.9.0
pkgrel=1
pkgdesc="Open source implementation of NVIDIA's GameStream, as used by the NVIDIA Shield"
url="https://github.com/loki-47-6F-64/sunshine"
arch=('x86_64' 'i686')
license=('GPL3')

depends=('boost-libs' 'ffmpeg' 'openssl' 'libpulse' 'opus' 'libxtst' 'libx11' 'libxfixes' 'libevdev' 'libxcb' 'libxrandr' 'udev')
makedepends=('git' 'cmake' 'boost' 'make')

source=("$pkgname::git+https://github.com/loki-47-6F-64/sunshine.git#tag=v$pkgver"
        "udev.rules")
sha256sums=('SKIP'
            '5ce01689247cb01d3f119cac32c731607d99bb875dcdd39c92b547f76d2befa0')
install=sunshine.install

_assets_path=/usr/share/$pkgname

prepare() {
    cd "$pkgname"
    git submodule update --recursive --init
}

build() {
    export CFLAGS="${CFLAGS/-Werror=format-security/}"
    export CXXFLAGS="${CXXFLAGS/-Werror=format-security/}"

    cmake \
        -S "$pkgname" \
        -B build \
        -Wno-dev \
        -D SUNSHINE_EXECUTABLE_PATH=/usr/bin/sunshine \
        -D SUNSHINE_ASSETS_DIR="$_assets_path"

    make -C build
}

package() {
    install -Dvm644 "$pkgname/assets/sunshine.conf" "$pkgdir/$_assets_path/sunshine.conf"
    install -Dvm644 "$pkgname/assets/apps_linux.json" "$pkgdir/$_assets_path/apps_linux.json"

    find "$pkgname/assets/web" -type f -print0 | xargs -0 -I {} install -Dvm644 {} "$pkgdir/$_assets_path/web/{}"
    find "$pkgname/assets/shaders/opengl" -type f -print0 | xargs -0 -I {} install -Dvm644 {} "$pkgdir/$_assets_path/shaders/opengl/{}"

    install -Dvm755 build/sunshine "$pkgdir/usr/bin/sunshine"
    install -Dvm644 build/sunshine.service "$pkgdir/usr/lib/systemd/user/sunshine.service"

    install -Dvm644 udev.rules "$pkgdir/usr/lib/udev/rules.d/85-$pkgname.rules"
}

# vim: ts=2 sw=2 et:
