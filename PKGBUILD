# Maintainer: Ranieri Althoff <ranisalt+aur at gmail dot com>

_imgui_ver=1.81
_imgui_wrap_ver=1

pkgbase=mangohud
pkgname=('mangohud' 'lib32-mangohud' 'mangohud-common')
pkgver=0.6.5
pkgrel=1
url='https://github.com/flightlessmango/MangoHud'
license=('MIT')
arch=('x86_64')
makedepends=('meson' 'python-mako' 'glslang' 'libglvnd' 'lib32-libglvnd'
             'vulkan-headers' 'vulkan-icd-loader' 'lib32-vulkan-icd-loader'
             'libxnvctrl' 'dbus')
source=("$pkgbase-$pkgver.tar.gz::https://github.com/flightlessmango/MangoHud/archive/v$pkgver.tar.gz"
	"imgui-$_imgui_ver.tar.gz::https://github.com/ocornut/imgui/archive/refs/tags/v$_imgui_ver.tar.gz"
	"imgui-$_imgui_ver-$_imgui_wrap_ver-wrap.zip::https://wrapdb.mesonbuild.com/v1/projects/imgui/$_imgui_ver/$_imgui_wrap_ver/get_zip")
sha256sums=('5e5490407a64275e04dae7b3068cbfcbb522f02c632c872a212b95025a316f72'
            'f7c619e03a06c0f25e8f47262dbc32d61fd033d2c91796812bf0f8c94fca78fb'
            '6d00b442690b6a5c5d8f898311daafbce16d370cf64f53294c3b8c5c661e435f')

_srcdir="MangoHud-$pkgver"

build() {
    ln -s "$srcdir/imgui-$_imgui_ver" "$_srcdir/subprojects/imgui"

    arch-meson -Dappend_libdir_mangohud=false -Duse_system_vulkan=enabled "$_srcdir" build64
    ninja -C build64

    export CC="gcc -m32"
    export CXX="g++ -m32"
    export PKG_CONFIG_PATH="/usr/lib32/pkgconfig"
    export LLVM_CONFIG="/usr/bin/llvm-config32"
    arch-meson -Dappend_libdir_mangohud=false -Duse_system_vulkan=enabled "$_srcdir" build32 --libdir lib32
    ninja -C build32
}

package_mangohud() {
    pkgdesc='A Vulkan overlay layer for monitoring FPS, temperatures, CPU/GPU load and more'
    depends=('gcc-libs' 'dbus' 'mangohud-common')
    optdepends=('bash: mangohud helper script'
                'libxnvctrl: support for older NVIDIA GPUs')

    DESTDIR="$pkgdir" ninja -C build64 install
    rm -r "$pkgdir/usr/bin" "$pkgdir/usr/share/doc" "$pkgdir/usr/share/man"

    install -Dm644 "$_srcdir/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

package_lib32-mangohud() {
    pkgdesc='A Vulkan overlay layer for monitoring FPS, temperatures, CPU/GPU load and more (32-bit)'
    depends=('lib32-gcc-libs' 'lib32-dbus' 'mangohud-common')
    optdepends=('lib32-libxnvctrl: support for older NVIDIA GPUs')

    DESTDIR="$pkgdir" ninja -C build32 install
    rm -r "$pkgdir/usr/bin" "$pkgdir/usr/share/doc" "$pkgdir/usr/share/man"
    mv "$pkgdir/usr/share/vulkan/implicit_layer.d/MangoHud.json" "$pkgdir/usr/share/vulkan/implicit_layer.d/MangoHud.x86.json"

    install -Dm644 "$_srcdir/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

package_mangohud-common() {
    pkgdesc='Common files for mangohud and lib32-mangohud'
    optdepends=('bash: mangohud helper script')

    DESTDIR="$pkgdir" ninja -C build64 install
    rm -r "$pkgdir/usr/lib" "$pkgdir/usr/share/vulkan"

    install -Dm644 "$_srcdir/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

