# Contributor: Marcell Meszaros < marcell.meszaros AT runbox.eu >
# Contributor: Anatol Pomozov <anatol.pomozov@gmail.com>

_gemname='gobject-introspection'
pkgname="ruby-${_gemname}-3.4"
pkgver=3.4.5
pkgrel=2
pkgdesc='Ruby/GObjectIntrospection is a Ruby binding of GObjectIntrospection.'
arch=('x86_64')
url='http://ruby-gnome2.sourceforge.jp/'
license=('LGPL2.1')
depends=('ruby' 'gobject-introspection-runtime' "ruby-glib2=${pkgver}")
makedepends=('gobject-introspection' 'ruby-native-package-installer')
options=('!emptydirs')
source=("https://rubygems.org/downloads/${_gemname}-${pkgver}.gem")
noextract=("${_gemname}-${pkgver}.gem")
sha1sums=('234dd7a7c5249e704aa9356fe887caf2a4eb519f')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  local _platform="$(gem env platform | cut -d':' -f2)"
  local _extension_api_version="$(ruby -e'puts Gem.extension_api_version')"
  gem install --ignore-dependencies --no-user-install --no-document -i "${pkgdir}/${_gemdir}" -n "${pkgdir}/usr/bin" "${_gemname}-${pkgver}.gem"
  rm "${pkgdir}/${_gemdir}/cache/${_gemname}-${pkgver}.gem" \
      "${pkgdir}/${_gemdir}/gems/${_gemname}-${pkgver}/ext/gobject-introspection/"*.o \
      "${pkgdir}/${_gemdir}/extensions/${_platform}/${_extension_api_version}/${_gemname}-${pkgver}/gem_make.out" \
      "${pkgdir}/${_gemdir}/gems/${_gemname}-${pkgver}/ext/gobject-introspection/Makefile"
}
