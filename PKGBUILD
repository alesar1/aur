# Maintainer : tadly <me@tadly.de>

pkgname=parsec-bin
pkgver=150_28
pkgrel=1
pkgdesc='Remotely connect to a gaming pc for a low latency remote computing experience'
url='http://parsec.tv'
arch=('x86_64' 'arm' 'armv6h' 'armv7h' 'aarch64')
provides=('parsec')
depends=('gcc-libs' 'libglvnd' 'libxext' 'libxcb')
optdepends=('libva: For hardware accelerated decoding')

source_x86_64=('https://builds.parsecgaming.com/package/parsec-linux.deb')
sha256sums_x86_64=('0c7207f419377fc35e30448acd00d8701300ac5a44936ac6d87a468c9afccdc1')

source_arm=('https://builds.parsecgaming.com/package/parsec-rpi.deb')
sha256sums_arm=('a98e840dc44f4762018895bd0da704c88887815de0e74e0f39aa7737f5b0e802')

source_armv6h=($source_arm)
sha256sums_armv6h=($sha256sums_arm)

source_armv7h=($source_arm)
sha256sums_armv7h=($sha256sums_arm)

source_aarch64=($source_arm)
sha256sums_aarch64=($sha256sums_arm)

options=('!strip')

package() {
    tar xf "${srcdir}/data.tar.xz" -C "${pkgdir}"
    chmod 755 "${pkgdir}/usr/"
}
