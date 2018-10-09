# Maintainer: Fabio 'Lolix' Loli <lolix@disroot.org> -> https://github.com/FabioLolix

pkgname=toptracker
_pkgver=1.5.6-241
pkgver=${_pkgver//-/.}
pkgrel=1
pkgdesc="Time tracking software for remote teams and individuals"
arch=(x86_64)
url="https://www.toptal.com/tracker/"
license=(custom:toptracker)
depends=(qt5-svg qt5-multimedia libxss gtk3 libappindicator-gtk2)
source_x86_64=("https://d101nvfmxunqnl.cloudfront.net/desktop/builds/redhat/${pkgname}_${_pkgver}_x86_64.rpm")
source=('toptracker.desktop'
        'toptracker-LICENSE')
noextract=("${pkgname}_${_pkgver}_x86_64.rpm")
sha256sums=('f799b24235e5c784e4d95b7b43cfedb97f97d2756ba197870c0950ad41ba0819'
            '3a12e2c5bd4c992b24320e1e2552476f21d08229417ca298cb39a2512f36162e')
sha256sums_x86_64=('24a696913f000501db0b27bd368de917f5b8a91dd9711387e19f492719709670')

package() {
  bsdtar -xf ${srcdir}/${pkgname}_${_pkgver}_x86_64.rpm -C ${pkgdir}/
  rm -r ${pkgdir}/etc/yum.repos.d
  rm ${pkgdir}/usr/share/applications/toptracker.desktop
  install -Dm755 ${srcdir}/toptracker.desktop ${pkgdir}/usr/share/applications
  install -Dm644 $pkgname-LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE
}
