# Maintainer: John Gerritse <tyrannis.hawk@gmail.com>

_gemname=video_transcoding
pkgname=ruby-$_gemname
pkgver=0.21.2
pkgrel=1
pkgdesc='Tools to transcode, inspect and convert videos.'
arch=(any)
url='https://github.com/donmelton/video_transcoding'
license=(Ruby)
makedepends=('ruby-rdoc')
depends=('ruby' 'handbrake-cli' 'mkvtoolnix-cli' 'libmp4v2' 'ffmpeg')
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha1sums=('aa75b2ff43e016e415a0b08574953719c4cd1550')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
}
