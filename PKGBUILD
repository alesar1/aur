# Maintainer: Jeremy Audet <jerebear@protonmail.com>
# Contributor: Lucky <archlinux@builds.lucky.li>
#
# Note: namcap warns that ruby-colored is an unnecessary dependency. This is
# untrue.

pkgname=ruby-cri
_gemname="${pkgname#ruby-}"
pkgver=2.10.1
pkgrel=1
pkgdesc='A library for building easy-to-use commandline tools.'
arch=(any)
url='https://rubygems.org/gems/cri'
license=(MIT)
depends=('ruby-colored>=1.2')
makedepends=(rubygems)
options=(!emptydirs)
source=("http://rubygems.org/downloads/${_gemname}-${pkgver}.gem")
noextract=("${_gemname}-${pkgver}.gem")
sha256sums=('1eef87a803f742339fbf5c03e0b4a3c8e9ecdce31d551d50b5ef8fda98ec9ea6')

package() {
  # install gem
  HOME=/tmp gem install \
    --no-user-install \
    --ignore-dependencies \
    --install-dir "${pkgdir}$(ruby -rubygems -e 'puts Gem.default_dir')" \
    --bindir "${pkgdir}/usr/bin" \
    "${srcdir}/${_gemname}-${pkgver}.gem"

  # install license
  install -Dm 644 \
    "${pkgdir}"/usr/lib/ruby/gems/*/gems/"${_gemname}-${pkgver}"/LICENSE \
    "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

# vim:set ts=2 sw=2 et:
