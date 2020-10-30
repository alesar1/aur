# Maintainer: enihcam <n a n e r i c w a n g gmail>

_pkgname=v2ray-plugin
pkgname=shadowsocks-v2ray-plugin-bin
pkgver=1.7.0
pkgrel=1
pkgdesc="Yet another SIP003 plugin for shadowsocks, based on v2ray"
arch=('x86_64' 'aarch64' 'armv7h')
url="https://github.com/teddysun/${_pkgname}"
license=('MIT')
depends=(glibc)
provides=('shadowsocks-v2ray-plugin')
conflicts=('shadowsocks-v2ray-plugin')

sha1sums=('3c507b1f7d1026fef51f2d9c7cd7c27c6936a6f4')
sha1sums_x86_64=('e6bcefe10a64dec8530f33e144f2a8a21ef11999')
sha1sums_aarch64=('cddd0e7d24ed2c49d0d33a6dbf2c5967610c3f36')
sha1sums_armv7h=('85dc481b0bc717abeb5517fca13bd90133a63f50')

source=("https://raw.githubusercontent.com/teddysun/${_pkgname}/master/LICENSE")
source_x86_64=("${url}/releases/download/v${pkgver}/${_pkgname}-linux-amd64-v${pkgver}.tar.gz")
source_aarch64=("${url}/releases/download/v${pkgver}/${_pkgname}-linux-arm64-v${pkgver}.tar.gz")
source_armv7h=("${url}/releases/download/v${pkgver}/${_pkgname}-linux-arm-v${pkgver}.tar.gz")

case ${CARCH} in
    x86_64) _arch=amd64 ;;
    aarch64) _arch=arm64 ;;
    armv7h) _arch=arm ;;
    *) _arch=unknown ;;
esac

package() {
    install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
    install -Dm755 ${srcdir}/${_pkgname}_linux_${_arch} ${pkgdir}/usr/bin/${_pkgname}
}
