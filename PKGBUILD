# Maintainer: Andreas 'Segaja' Schleifer <archlinux at segaja dot de>
# Contributor: Matej Grabovsky <matej.grabovsky at gmail>
# Contributor: Anatol Pomozov <anatol.pomozov@gmail.com>
# Contributor: Alexsandr Pavlov <kidoz at mail dot ru>

_gemname='activerecord'
pkgname="ruby-${_gemname}"
pkgver=6.1.3.2
pkgrel=1
pkgdesc='Object-relational mapper framework (part of Rails).'
arch=('any')
url='http://www.rubyonrails.org'
license=('MIT')
options=(!emptydirs)
depends=('ruby' 'ruby-activemodel' 'ruby-activesupport')
makedepends=('ruby-rake')
checkdepends=('ruby-actionpack' 'ruby-byebug' 'ruby-pg' 'ruby-rack' 'ruby-sqlite3')
source=("rails-${pkgver}.tar.gz::https://github.com/rails/rails/archive/v${pkgver}.tar.gz")
sha512sums=('3b30facfe0555c3161b5fc50efb7dc1f3df0eeadbfa19f16df3ebdb4877d6fb9a978ae7a6713a502d79e6d8f1be20157bd5ef64919fdd558cad89492cc2d9672')

prepare() {
  cd "rails-${pkgver}/${_gemname}"

  # update gemspec/Gemfile to allow newer version of the dependencies
  sed --in-place --regexp-extended 's|~>|>=|g' "${_gemname}.gemspec"
}

build() {
  cd "rails-${pkgver}/${_gemname}"

  gem build "${_gemname}.gemspec"
}

check() {
  cd "rails-${pkgver}/${_gemname}"

  rake test:sqlite3
}

package() {
  cd "rails-${pkgver}/${_gemname}"

  local _gemdir="$(gem env gemdir)"

  gem install --ignore-dependencies --no-user-install --install-dir "${pkgdir}/${_gemdir}" --bindir "${pkgdir}/usr/bin" "${_gemname}-${pkgver}.gem"

  install -Dm 644 MIT-LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

  rm "${pkgdir}/${_gemdir}/cache/${_gemname}-${pkgver}.gem"
}
