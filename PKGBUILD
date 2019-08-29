# Maintainer: Dmitry Kharitonov <darksab0r@gmail.com>
# Contributor: Olivier Mehani <shtrom-aur@ssji.net>

_gemname=rmagick
pkgname=ruby-rmagick
pkgver=4.0.0
pkgrel=1
pkgdesc="RMagick is an interface between the Ruby programming language and the ImageMagick image processing library"
arch=('any')
url='https://github.com/rmagick/rmagick'
license=('MIT')
depends=('ruby' 'libmagick6')
source=("https://rubygems.org/downloads/rmagick-$pkgver.gem")
sha256sums=('4049648aaa116199b96667159cf5d054aa8943f8a1d50512236f3cf1ef17ca1b')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  PKG_CONFIG_PATH=$PKG_CONFIG_PATH:/usr/lib/imagemagick6/pkgconfig \
    gem install --ignore-dependencies --no-user-install --no-document -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}


