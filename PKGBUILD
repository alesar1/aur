# Maintainer: Benoit Brummer < trougnouf at gmail dot com >
# Contributor: Remy Adriaanse <remy@adriaanse.it>

_gemname=nokogiri
pkgname="ruby-${_gemname}"
pkgver=1.10.2
pkgrel=0
pkgdesc='HTML, XML, SAX, and Reader parser'
arch=('any')
url='http://nokogiri.org'
license=('MIT')
depends=('libxml2' 'libxslt' 'ruby' 'ruby-mini_portile2')
makedepends=('ruby-pkg-config' 'ruby-rdoc')
options=('!emptydirs')
source=("https://rubygems.org/downloads/${_gemname}-${pkgver}.gem")
noextract=("${_gemname}-${pkgver}.gem")
sha256sums=('a273814a5017d052f8dffe07a176ced5a3a70d4b8d38e88eb9c497881833c96b')

package() {
	local _gemdir="$(ruby -e'puts Gem.default_dir')"
	NOKOGIRI_USE_SYSTEM_LIBRARIES=1 gem install --ignore-dependencies --no-user-install -i "${pkgdir}/${_gemdir}" -n "${pkgdir}/usr/bin" "${_gemname}-${pkgver}.gem"
	rm "${pkgdir}/${_gemdir}/cache/${_gemname}-${pkgver}.gem"
}
