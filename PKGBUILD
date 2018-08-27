# Maintainer: NexAdn <nexadn@yandex.com>
pkgname=cef-minimal
pkgver=3.3440.1805.gbe070f9
pkgrel=1
pkgdesc="Chromium Embedded Framework minimal release"
arch=("i686" "x86_64")
url="https://bitbucket.org/chromiumembedded/cef"
license=("BSD")
depends=("nss" "alsa-lib" "libxss" "libxtst" "libglvnd" "pango" "libxcursor" "dbus" "libxrandr" "libxcomposite" "atk")
makedepends=("cmake" "make")
provides=("cef")
conflicts=("cef-standard" "cef-git")
source_i686=(
    "http://opensource.spotify.com/cefbuilds/cef_binary_${pkgver}_linux32_minimal.tar.bz2"
)
source_x86_64=(
    "http://opensource.spotify.com/cefbuilds/cef_binary_${pkgver}_linux64_minimal.tar.bz2"
)
sha1sums_i686=('1c2d773446b3040392b92524921c0f894a3f206c')
sha1sums_x86_64=('6a389edb864538b6a8b8672f4af8442834e651d1')
[[ "$CARCH" = "i686" ]] && _arch="32"
[[ "$CARCH" = "x86_64" ]] && _arch="64"
build() {
    cd "$srcdir"/cef_binary_${pkgver}_linux${_arch}_minimal
    sed '/^add_subdirectory[\(]tests[\/].*/d' -i CMakeLists.txt
    cmake .
    make clean
    make -j4 libcef_dll_wrapper
}
package() {
    mkdir -p "$pkgdir"/opt/cef/
    cp -R "$srcdir"/cef_binary_${pkgver}_linux${_arch}_minimal/* "$pkgdir"/opt/cef
    install -Dm644 "$srcdir"/cef_binary_${pkgver}_linux${_arch}_minimal/LICENSE.txt "$pkgdir"/usr/share/licenses/${pkgname}/LICENSE
}
