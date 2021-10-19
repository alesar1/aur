# Maintainer: Wei Zixi <wellsgz@hotmail.com>
# Maintainer: Ivan Tiukov <ivan@tiukov.com>

pkgname=remotixqc
pkgver=1.5.15
pkgrel=1690
pkgdesc="Remotix QC is a tiny portable application with zero configuration. Run it on a computer that you want to observe or control remotely."
arch=('x86_64')
url="https://remotixcloud.com"
license=('custom:freeware')
depends=('qt5-base' 'wayland' 'libx11')

source_x86_64=(https://eu.downloads.remotix.com/agent-linux/remotixagent-${pkgver}-${pkgrel}.x86_64.deb)

sha256sums_x86_64=('195e692f34ce52e2cc20ae6a7cdf9737ec97921ed3d9c234d52434a45f985374')

package() {
    cd "${pkgdir}"
    tar -xpJf "${srcdir}/data.tar.xz"
    printf '%s\n' " ============================================================================="
    printf '%s\n' " -> Please enable and start 'remotixagent' service before start application..."
    printf '%s\n' " ============================================================================="
}
