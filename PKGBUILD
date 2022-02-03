# Maintainer: John Gerritse <tyrannis dot hawk at gmail dot com>
# Maintainer: Eric Clausing <eric dot s dot clausing at gmail dot com>

_gemname=other_video_transcoding
pkgname=ruby-$_gemname
pkgver=0.10.0
pkgrel=1
pkgdesc='Other Video Transcoding is a package of tools to transcode videos.'
arch=('any')
url='https://github.com/donmelton/other_video_transcoding'
license=(Ruby)
makedepends=('ruby-rdoc')
depends=('ruby' 'mkvtoolnix-cli' 'ffmpeg')
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha256sums=('2bc2b6dabc4ce5e801050f1610ea63d0c225086066e2292b4c1a5323ceeb9671')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
}
