# Generated by gem2arch (https://github.com/anatol/gem2arch)
# Maintainer: Anatol Pomozov <anatol.pomozov@gmail.com>
# Contributor: James An <james@jamesan.ca>

_gemname=gstreamer
pkgname=ruby-$_gemname
pkgver=2.2.4
pkgrel=1
pkgdesc='A Ruby binding for GStreamer'
arch=('any')
url='http://ruby-gnome2.sourceforge.jp'
license=(LGPL)
depends=('ruby' 'ruby-glib2' 'ruby-gobject-introspection')
makedepends=('ruby-pkgconfig')
options=(!emptydirs)
source=("https://rubygems.org/downloads/$_gemname-$pkgver.gem")
md5sums=('c9bc8e55664840dd75081b3f3d16038e')
noextract=($_gemname-$pkgver.gem)

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
}
