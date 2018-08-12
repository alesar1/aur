# Maintainer: Kewl <xrjy@nygb.rh.bet(rot13)>
# Maintainer: Adam Nielsen <malvineous@shikadi.net>

pkgname='etc-update'
pkgdesc="CLI to interactively merge .pacnew in /etc"
pkgver=2.3.46
pkgrel=1
arch=('any')
url="https://wiki.gentoo.org/wiki/Handbook:X86/Portage/Tools#etc-update"
license=('GPL')
depends=('bash')
makedepends=('git')
source=("https://github.com/gentoo/portage/archive/portage-${pkgver}.tar.gz")
md5sums=('6519cadc4f23936f8154389597c87c87')

package() {
  install -Dm 0755 "portage-portage-${pkgver}/bin/${pkgname}" "$pkgdir/usr/bin/${pkgname}"
  install -Dm 0644 "portage-portage-${pkgver}/cnf/${pkgname}.conf" "$pkgdir/etc/${pkgname}.conf"
}
