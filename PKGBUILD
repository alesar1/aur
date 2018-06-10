# Maintainer: csicar
pkgname=gtm-bin
_pkgname=gtm
pkgver=v1.3.3
pkgrel=1
pkgdesc="Simple, seamless, lightweight time tracking for Git"
arch=('x86_64')
url="https://github.com/git-time-metric/gtm"
license=('MIT')
provides=('gtm')
conflicts=('gtm')
# https://github.com/git-time-metric/gtm/releases/download/v1.3.3/gtm.v1.3.3.linux.tar.gz
source=("https://github.com/git-time-metric/$_pkgname/releases/download/$pkgver/$_pkgname.$pkgver.linux.tar.gz")
sha256sums=('0022ccde788ac85f4648338ddfd4bd20cdd8dd9adc0232cc52d453d2f27cdd6f')

package() {
	install -Dm755 gtm ${pkgdir}/usr/bin/gtm
}
