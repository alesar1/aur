# Maintainer: Christopher Loen <christopherloen at gmail dot com>
# Generated by gem2arch (https://github.com/anatol/gem2arch)
# Maintainer: Artem Vorotnikov <artem@vorotnikov.me>

_gemname_='curb'
pkgname="ruby-${_gemname_}"
pkgver='0.9.3'
pkgrel=1
pkgdesc='Provides Ruby-language bindings for the libcurl'
arch=('any')
url='http://curb.rubyforge.org/'
license=('MIT')
depends=('ruby' 'libcurl-compat' 'curl')
options=(!emptydirs)
source=("https://rubygems.org/downloads/${_gemname_}-${pkgver}.gem")
sha256sums=('42651d05f712a93fb9cc733910b285d389afbd16952d456b13733b12a403e009')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "${pkgdir}/${_gemdir}" -n "${pkgdir}/usr/bin" "${_gemname_}-${pkgver}.gem"
  rm "${pkgdir}/${_gemdir}/cache/${_gemname_}-${pkgver}.gem"
}
