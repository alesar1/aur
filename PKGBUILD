# Maintainer: Andreas 'Segaja' Schleifer <archlinux at segaja dot de>
# Contributor: Matej Grabovsky <matej.grabovsky at gmail>

_gemname='rails-html-sanitizer'
pkgname="ruby-${_gemname}"
pkgver=1.3.0
pkgrel=1
pkgdesc='HTML sanitization for Rails applications'
arch=('any')
url='https://github.com/rails/rails-html-sanitizer'
license=('MIT')
options=(!emptydirs)
depends=('ruby' 'ruby-loofah')
makedepends=('ruby-bundler' 'ruby-minitest' 'ruby-rake')
source=("${url}/archive/v${pkgver}/${pkgname}-${pkgver}.tar.gz")
sha512sums=('0eca146048df7de2fdc739cc4c389037c2cb4da420a7d25368de15db065b6211c3e30cc62d515133ed1def3f190f4fd938a255c67fcaf3fa22e9b4bc054274e5')

prepare() {
  cd "${_gemname}-${pkgver}"

  sed -r 's|~>|>=|g' -i "${_gemname}.gemspec" Gemfile
}

build() {
  cd "${_gemname}-${pkgver}"

  rake build
}

package() {
  cd "${_gemname}-${pkgver}"

  local _gemdir="$(gem env gemdir)"

  gem install --ignore-dependencies --no-user-install -i "${pkgdir}/${_gemdir}" -n "${pkgdir}/usr/bin" "pkg/${_gemname}-${pkgver}.gem"

  rm "${pkgdir}/${_gemdir}/cache/${_gemname}-${pkgver}.gem"

  install -D -m644 MIT-LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
