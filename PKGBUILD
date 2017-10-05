# Generated by gem2arch (https://github.com/anatol/gem2arch)
# Maintainer: farawayer <farwayer@gmail.com>

_gemname=fastlane
pkgname=$_gemname
pkgver=2.60.1
pkgrel=1
pkgdesc='The easiest way to automate beta deployments and releases for your iOS and Android apps'
arch=(any)
url='https://fastlane.tools'
license=(MIT)
depends=(
  ruby
  'ruby-addressable<3' 'ruby-addressable>=2.3'
  'ruby-babosa<2' 'ruby-babosa>=1.0.2'
  'ruby-bundler<2' 'ruby-bundler>=1.12'
  'ruby-cfpropertylist>=2.3' 'ruby-cfpropertylist<3'
  ruby-colored
  'ruby-commander-fastlane<5' 'ruby-commander-fastlane>=4.4.5'
  'ruby-dotenv<3' 'ruby-dotenv>=2.1.1'
  'ruby-excon<1' 'ruby-excon>=0.45'
  'ruby-faraday<1' 'ruby-faraday>=0.9'
  'ruby-faraday-cookie_jar>=0.0.6' 'ruby-faraday-cookie_jar<0.1'
  'ruby-faraday_middleware<1' 'ruby-faraday_middleware>=0.9'
  'ruby-fastimage>=2.1.0' 'ruby-fastimage<3'
  'ruby-gh_inspector<2' 'ruby-gh_inspector>=1.0.1'
  'ruby-google-api-client>=0.13.1' 'ruby-google-api-client<0.14'
  'ruby-highline<2' 'ruby-highline>=1.7.2'
  'ruby-json<3'
  # 'ruby-mini_magick<4.6' 'ruby-mini_magick>=4.5.1'
  ruby-mini_magick-4.5
  ruby-multi_json
  'ruby-multipart-post<2.1' 'ruby-multipart-post>=2'
  'ruby-multi_xml<1' 'ruby-multi_xml>=0.5'
  'ruby-plist<4' 'ruby-plist>=3.1'
  ruby-public_suffix-2
  'ruby-rubyzip<2' 'ruby-rubyzip>=1.1'
  'ruby-security=0.1.3'
  # 'ruby-slack-notifier<2' 'ruby-slack-notifier>=1.3'
  ruby-slack-notifier-1
  'ruby-terminal-notifier<2' 'ruby-terminal-notifier>=1.6.2'
  'ruby-terminal-table<2' 'ruby-terminal-table>=1.4.5'
  'ruby-tty-screen>=0.5' 'ruby-tty-screen<0.6'
  'ruby-word_wrap<1.1' 'ruby-word_wrap>=1'
  'ruby-xcodeproj>=1.5' 'ruby-xcodeproj<2'
  'ruby-xcpretty<1' 'ruby-xcpretty>=0.2.4' 
  'ruby-xcpretty-travis-formatter>=0.0.3'
)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha1sums=('aeae4238f3505a3d318fcd6b096eef94b9a17eaf')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
