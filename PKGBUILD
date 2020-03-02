# Maintainer: Toke Høiland-Jørgensen <toke@toke.dk>
# Based on the ruby-kramdown PKGBUILD

pkgname=ruby-kramdown-rfc2629
pkgver=1.2.13
pkgrel=1
pkgdesc="An RFC2629 (XML2RFC) generating backend for Thomas Leitner's kramdown markdown parser"
arch=(any)
url='http://github.com/cabo/kramdown-rfc2629'
license=('MIT')
depends=('ruby-kramdown' 'ruby-certified')
options=(!emptydirs)
source=("https://rubygems.org/downloads/kramdown-rfc2629-${pkgver}.gem")
noextract=("kramdown-rfc2629-${pkgver}.gem")
sha256sums=('2dd1e13831c3dd87f465610c3368a286cc1ac8057d7f06669caa318a0da9a368')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"

  gem install --ignore-dependencies --no-user-install \
    -i "${pkgdir}/${_gemdir}" -n "${pkgdir}/usr/bin" "kramdown-rfc2629-${pkgver}.gem"

  install -D -m644 "${pkgdir}/${_gemdir}/gems/kramdown-rfc2629-${pkgver}/LICENSE" \
    "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
