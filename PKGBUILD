# Generated by gem2arch (https://github.com/anatol/gem2arch)
# Maintainer: Matej Grabovsky <matej.grabovsky at gmail>
# Contributor: Anatol Pomozov <anatol.pomozov@gmail.com>
# Contributor: Alexsandr Pavlov <kidoz at mail dot ru>

_gemname=rails
pkgname=ruby-$_gemname
pkgver=5.2.1
pkgrel=2
pkgdesc='Full-stack web application framework.'
arch=(any)
url='http://www.rubyonrails.org'
license=(MIT)
depends=(ruby ruby-activesupport ruby-actionpack ruby-actionview ruby-activemodel \
         ruby-activerecord ruby-actionmailer ruby-railties ruby-bundler \
         ruby-sprockets-rails)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha1sums=('9cfd40c0526f51799c1279c6c2f5fa72248bf633')

package() {
    local _gemdir="$(ruby -e'puts Gem.default_dir')"
    gem install -no-documentation --ignore-dependencies --no-user-install \
        -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
    rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
}
