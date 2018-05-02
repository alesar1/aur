# Maintainer: Kewl <xrjy@nygb.rh.bet(rot13)>
# Maintainer: Adam Nielsen <malvineous@shikadi.net>

pkgname='etc-update'
pkgdesc="CLI to interactively merge .pacnew in /etc"
pkgver=2.3.33
pkgrel=1
arch=('any')
url="https://wiki.gentoo.org/wiki/Handbook:X86/Portage/Tools#etc-update"
license=('GPL')
depends=('bash')
makedepends=('git')
source=("https://github.com/gentoo/portage/archive/portage-${pkgver}.tar.gz")
md5sums=('c5210d302eb99cd8634b8f10261f4b0c')

package() {
  install -Dm 0755 "portage-portage-${pkgver}/bin/${pkgname}" "$pkgdir/usr/bin/${pkgname}"
  install -Dm 0644 "portage-portage-${pkgver}/cnf/${pkgname}.conf" "$pkgdir/etc/${pkgname}.conf"
}
