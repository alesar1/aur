# Maintainer:  farseerfc <farseerfc@archlinuxcn.org>
# Contributor: Lucky <archlinux@builds.lucky.li>
# Contributor: Chris Brannon <cmbrannon79@gmail.com>
# Contributor: Paulo Matias <matiasΘarchlinux-br·org>
# Contributor: Anders Bergh <anders1@gmail.com>

pkgname=lua51-logging
pkgver=1.1.4
pkgrel=2
pkgdesc="Simple API to use logging features in Lua"
url="http://www.keplerproject.org/lualogging/"
license=("MIT")
arch=("any")
depends=("lua51")
replaces=("lualogging")
conflicts=("lualogging")
source=("http://luaforge.net/frs/download.php/2693/lualogging-${pkgver}.tar.gz"
        "LICENSE")
md5sums=("72a8622748a525f5fb8ed23278326f80"
         "c2a5289bdfe3702fd77b365a48251c08")

package() {
  cd "lualogging-${pkgver}/src"

  install -dm755 "${pkgdir}/usr/share/lua/5.1/logging"
  cp logging/*.lua "${pkgdir}/usr/share/lua/5.1/logging"
  mv "${pkgdir}/usr/share/lua/5.1/logging/logging.lua" "${pkgdir}/usr/share/lua/5.1"
  install -Dm644 "${srcdir}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

# vim:set ts=2 sw=2 et:
