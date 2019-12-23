# Maintainer: Nils Czernia <nils at czserver.de>
# Contributor: Severen Redwood <severen@shrike.me>
# Contributor: Pasha Finkelshteyn <pavel.finkelshtein+AUR@gmail.com>

_gemname="i18n"
pkgname="ruby-${_gemname}"
pkgver=1.7.0
pkgrel=1
pkgdesc="New wave internationalisation support for Ruby"
arch=("any")
license=("MIT")
depends=("rubygems" "ruby-concurrent")
makedepends=("ruby-rdoc")
options=(!emptydirs)
url="http://rubygems.org/gems/${_gemname}"
source=("https://rubygems.org/downloads/${_gemname}-${pkgver}.gem")
sha256sums=("14fadf992a1acd31eda538e0c3c26309d4df058beac4a9215980f998fabebe42")
noextract=("${_gemname}-${pkgver}.gem")

package() {
  cd "${srcdir}"
  local _gemdir=$(ruby -e "puts Gem.default_dir")
  gem install --ignore-dependencies --no-user-install -i "${pkgdir}${_gemdir}" \
    -n "${pkgdir}/usr/bin" "${_gemname}-${pkgver}.gem"
  rm "${pkgdir}/${_gemdir}/cache/${_gemname}-${pkgver}.gem"

  install -D -m644 \
    "${pkgdir}/${_gemdir}/gems/${_gemname}-${pkgver}/MIT-LICENSE" \
    "${pkgdir}/usr/share/licenses/${pkgname}/MIT-LICENSE"
}

# vim:set ts=2 sw=2 et:
