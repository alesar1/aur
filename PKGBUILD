# Generated by gem2arch (https://github.com/anatol/gem2arch)
# Maintainer: Colin Arnott <carnott@redhat.com>

pkgname=ruby-rbtree
pkgver=0.4.4
pkgrel=1
pkgdesc='A sorted associative collection.'
arch=(i686 x86_64)
url='https://rubygems.org/gems/rbtree'
license=(MIT)
depends=(ruby)
options=(!emptydirs)
source=(https://rubygems.org/downloads/${pkgname#ruby-}-$pkgver.gem)
noextract=(${pkgname#ruby-}-$pkgver.gem)
sha512sums=('4cfdb6c0b98ea33baa82da4099d5ba25f1cb64825c183f9f881ed49e7ab7abcd8672d50ecf28b63b9f05b0e0452c12a7696bed4f130395d59c2e059cd61d8ba7')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" ${pkgname#ruby-}-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/${pkgname#ruby-}-$pkgver.gem"
  install -D -m644 "$pkgdir/$_gemdir/gems/${pkgname#ruby-}-$pkgver/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
