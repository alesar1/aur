# Maintainer: mzz2017 <m@mzz.pub>

pkgname=v2raya-bin
_pkgname=v2raya
pkgver=0.6.8.2
pkgrel=1
install=.INSTALL
pkgdesc="V2Ray Linux client with web GUI, compatible with SS and SSR, supporting transparent proxy"
arch=('i686' 'x86_64' 'armv7h' 'armv6h' 'aarch64')
url="https://github.com/mzz2017/V2RayA"
license=('GPL')
depends=('glibc' 'v2ray')

sha_service=
sha_png=
sha_desktop=

source_i686=(
    "v2raya::https://apt.v2raya.mzz.pub/pool/main/v/v2raya/v2raya_linux_386_v${pkgver}"
    "v2raya.service"
    "v2raya.png"
    "v2raya.desktop"
)
source_x86_64=(
    "v2raya::https://apt.v2raya.mzz.pub/pool/main/v/v2raya/v2raya_linux_amd64_v${pkgver}"
    "v2raya.service"
    "v2raya.png"
    "v2raya.desktop"
)
source_aarch64=(
    "v2raya::https://apt.v2raya.mzz.pub/pool/main/v/v2raya/v2raya_linux_arm64_v${pkgver}"
    "v2raya.service"
    "v2raya.png"
    "v2raya.desktop"
)
source_armv6h=(
    "v2raya::https://apt.v2raya.mzz.pub/pool/main/v/v2raya/v2raya_linux_arm_v${pkgver}"
    "v2raya.service"
    "v2raya.png"
    "v2raya.desktop"
)
source_armv7h=(
    "v2raya::https://apt.v2raya.mzz.pub/pool/main/v/v2raya/v2raya_linux_arm_v${pkgver}"
    "v2raya.service"
    "v2raya.png"
    "v2raya.desktop"
)

sha1sums_i686=(
    ''
    "$sha_service"
    "$sha_png"
    "$sha_desktop"
)
sha1sums_x86_64=(
    ''
    "$sha_service"
    "$sha_png"
    "$sha_desktop"
)
sha1sums_aarch64=(
    ''
    "$sha_service"
    "$sha_png"
    "$sha_desktop"
)
sha1sums_armv6h=(
    ''
    "$sha_service"
    "$sha_png"
    "$sha_desktop"
)
sha1sums_armv7h=(
    ''
    "$sha_service"
    "$sha_png"
    "$sha_desktop"
)

package() {
    cd "$srcdir"
    
    install -Dm644 "v2raya.service" "$pkgdir/usr/lib/systemd/system/v2raya.service"
    install -Dm755 "v2raya" -t "$pkgdir/usr/bin/"

    install -Dm644 "v2raya.png" "$pkgdir/usr/share/icons/v2raya.png"
    install -Dm755 "v2raya.desktop" -t "$pkgdir/usr/share/applications/"
}
