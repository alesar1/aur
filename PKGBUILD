# Maintainer: Mark Stenglein <aur@markstenglein.com>
# Contributor: Brandon Mulcahy <brandon@jangler.info>

_gemname=dropbox-sdk
pkgname=ruby-$_gemname
pkgver=1.6.5
pkgrel=2
pkgdesc='A library that provides a plain function-call interface to the Dropbox API web endpoints.'
arch=(any)
url='http://www.dropbox.com/developers/'
license=(MIT)
depends=('ruby' 'ruby-json')
makedepends=('rubygems')
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha256sums=('561a18cc4a54bd0480062e80eca54b38709610875c307bcb10aadf95c7a041a3')
changelog=.CHANGELOG

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
