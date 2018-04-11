# Contributor: Aashik S  aashiks at gmail dot com
# Maintainer: http://smc.org.in
# Contributor: Akshay S Dinesh asdofindia at gmail dot com
# Contributor: Jishnu Mohan jishnu7 at gmail dot com

pkgname=ttf-malayalam-font-meera
pkgver=7.0.0+20171009
pkgrel=1
pkgdesc="This is Meera, a font belonging to a set of TrueType and OpenType fonts released under the GNU General Public License for Malayalam Language."
arch=(any)
url="http://smc.org.in/fonts/"
license=("OFL1.1")
depends=(fontconfig xorg-font-utils)
source=("http://smc.org.in/downloads/fonts/meera/Meera.ttf"
        "https://gitlab.com/smc/meera/raw/master/65-0-smc-meera.conf")
sha256sums=('a0e840716376ab6de9dfc9ba8d1b3f78c654870b0b2ba2d41f4249497766494d'
            'a1823a555cb3c042ad8e4d4c15ccbca9b35627bdff34a287539fe9384ec4ec61')
install=ttf-malayalam-fonts.install


package() {
  mkdir -p "${pkgdir}/usr/share/fonts/TTF" || return 1
  install -m644 *.ttf "${pkgdir}/usr/share/fonts/TTF"
  mkdir -p "${pkgdir}/etc/fonts/conf.d" || return 1
  install *.conf "${pkgdir}/etc/fonts/conf.d" || return 1
}
