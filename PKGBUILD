# Contributor: Aashik S  aashiks at gmail dot com
# Maintainer: http://smc.org.in
# Contributor: Akshay S Dinesh asdofindia at gmail dot com
# Contributor: Jishnu Mohan jishnu7 at gmail dot com

pkgname=ttf-malayalam-font-rachana
pkgver=7.0.0+20200405
pkgrel=1
pkgdesc="This is Rachana, a font belonging to a set of TrueType and OpenType fonts released under the GNU General Public License for Malayalam Language."
arch=(any)
url="http://smc.org.in/fonts/"
license=("OFL")
source=("http://smc.org.in/downloads/fonts/rachana/Rachana-Regular.ttf"
        "https://gitlab.com/smc/fonts/rachana/raw/master/LICENSE.txt"
        "https://gitlab.com/smc/fonts/rachana/raw/master/65-0-smc-rachana.conf")
sha256sums=('9a3f162beb791f07a9aa820df472ac066002686dc34144f016c12233f8515d8a'
            '8454343e7d16a7b4ee5ddc594ee67761531a4ca84cb47cf2a8196223b3d568ac'
            'fa5f4fc01ed63ae0d50e12083657b218134196346102af92bf3513642f47078c')

package() {
  install -Dm644 -t "$pkgdir/usr/share/licenses/$pkgname" LICENSE.txt
  install -Dm644 -t "$pkgdir/usr/share/fonts/TTF/" *.ttf
  install -Dm644 -t "$pkgdir/etc/fonts/conf.d" *.conf
}
