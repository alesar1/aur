# Maintainer: Carlos Aznarán <caznaranl@uni.pe>
pkgname=ruby-enum
pkgver=0.9.0
pkgrel=1
pkgdesc="Enum-like behavior for Ruby"
arch=(x86_64)
url="https://github.com/dblock/${pkgname}"
license=(MIT)
depends=(ruby-i18n)
source=(https://rubygems.org/downloads/${pkgname}-${pkgver}.gem)
noextract=(${pkgname}-${pkgver}.gem)
sha256sums=('77a09954184714a9ca0baf2dde91a38b96a8f0f834f1984c7a1e52df2148dadf')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install --no-document -i "${pkgdir}/${_gemdir}" -n "${pkgdir}/usr/bin" ${pkgname}-${pkgver}.gem
  rm "${pkgdir}/${_gemdir}/cache/${pkgname}-${pkgver}.gem"
  find "${pkgdir}" -type d -empty -delete
}
