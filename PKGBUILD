# Maintainer: loathingkernel <loathingkernel @at gmail .dot com>

pkgname=d9vk-mingw-git
pkgver=0.r2645.21ab453f
pkgrel=2
pkgdesc="A d3d9 to vk layer based off DXVK's codebase. Mingw version"
arch=('x86_64')
url="https://github.com/Joshua-Ashton/d9vk"
license=('zlib/libpng')
depends=('vulkan-icd-loader' 'wine>=4.0rc1' 'lib32-vulkan-icd-loader')
makedepends=('ninja' 'meson>=0.43' 'glslang' 'git' 'wine' 'mingw-w64-gcc')
provides=("d9vk")
conflicts=("d9vk")
source=(
    "git+https://github.com/Joshua-Ashton/d9vk.git"
    "git+https://github.com/doitsujin/dxvk.wiki.git"
    "setup_d9vk"
    "extraopts.patch"
)
sha256sums=(
    "SKIP"
    "SKIP"
    "7147644664ef33d04f7b18683c47be95b5664c57cf6d63fdc019d915deebd37a"
    "d73f948fd39da218141cc72c7373f59e6fc289630e155b6e51d18597455d0040"
)

pkgver() {
    cd d9vk
    printf "0.r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
    cd d9vk
    patch -p1 -i ../extraopts.patch
    CFLAGS="$CPPFLAGS $CFLAGS"
    LDFLAGS="${LDFLAGS/,-z,relro,-z,now/}"
    sed -i build-win64.txt \
        -e "s|@CARGS@|\'${CFLAGS// /\',\'}\'|g" \
        -e "s|@LDARGS@|\'${LDFLAGS// /\',\'}\'|g"
    sed -i build-win32.txt \
        -e "s|@CARGS@|\'${CFLAGS// /\',\'}\'|g" \
        -e "s|@LDARGS@|\'${LDFLAGS// /\',\'}\'|g"
}

build() {
    meson d9vk "build/x64" \
        --cross-file d9vk/build-win64.txt \
        --prefix "/usr/share/d9vk/x64" \
        --bindir "" --libdir "" \
        --buildtype "release" \
        --strip \
        -Denable_tests=false
    ninja -C "build/x64" -v

    meson d9vk "build/x32" \
        --cross-file d9vk/build-win32.txt \
        --prefix "/usr/share/d9vk/x32" \
        --bindir "" --libdir "" \
        --buildtype "release" \
        --strip \
        -Denable_tests=false
    ninja -C "build/x32" -v

    cat dxvk.wiki/Configuration.md | \
        sed -n '/```/,/```/p' | \
        sed -e '/^##/d' -e '/^```/d' -e '/^[a-zA-Z`]/d' > dxvk.conf.sample
}

package() {
    DESTDIR="$pkgdir" ninja -C "build/x32" install
    DESTDIR="$pkgdir" ninja -C "build/x64" install
    install -Dm 755 -t "$pkgdir/usr/share/d9vk" d9vk/setup_dxvk.sh
    install -Dm 644 -t "$pkgdir/usr/share/d9vk" dxvk.conf.sample
    install -Dm 644 -t "$pkgdir/usr/share/$pkgname" d9vk/LICENSE
    install -Dm 755 -t "$pkgdir/usr/bin" setup_d9vk
}
