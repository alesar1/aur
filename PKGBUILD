# Maintainer: Levente Polyak <levente[at]leventepolyak[dot]net>
# Contributor: Sabart Otto - Seberm <seberm[at]seberm[dot]com>
# Contributor: Tobias Veit - nIcE <m.on.key.tobi[at]gmail[dot]com>

pkgname=metasploit
pkgver=4.11.3
pkgrel=1
pkgdesc="An advanced open-source platform for developing, testing, and using exploit code"
url="https://www.metasploit.com/"
arch=('any')
license=('BSD')
depends=('ruby' 'libpcap' 'postgresql-libs' 'ruby-bundler')
optdepends=(
  'java-runtime: msfgui support'
  'ruby-pg: database support'
)
options=('!strip')
install="${pkgname}.install"
source=(${pkgname}-${pkgver}.tar.gz::https://github.com/rapid7/metasploit-framework/archive/${pkgver}.tar.gz)
sha512sums=('530b4016f2405d0ca793961ce11e70efde75f1da4f58e5045ff0fd46386e35be2eb88dacde9365ae256c8d7397c47b6bed03474ce16649de573c9f1b68a714ee')

package() {
  cd metasploit-framework-${pkgver}

  mkdir -p "${pkgdir}/opt" "${pkgdir}/usr/bin"
  cp -r . "${pkgdir}/opt/${pkgname}"

  for f in ${pkgdir}/opt/${pkgname}/msf*; do
    local _msffile="${pkgdir}/usr/bin/`basename "${f}"`"
    echo "BUNDLE_GEMFILE=/opt/${pkgname}/Gemfile bundle exec ruby /opt/${pkgname}/`basename "${f}"` \"\$@\"" > ${_msffile}
    chmod 755 ${_msffile}
  done
  
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  install -Dm644 COPYING "${pkgdir}/usr/share/licenses/${pkgname}/COPYING"
}

# vim: ts=2 sw=2 et:
