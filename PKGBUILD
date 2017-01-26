# Generated by gem2arch (https://github.com/anatol/gem2arch)
# Maintainer: farawayer <farwayer@gmail.com>

_gemname=fastlane
pkgname=$_gemname
pkgver=2.11.0
pkgrel=1
pkgdesc='The easiest way to automate beta deployments and releases for your iOS and Android apps'
arch=(any)
url='https://fastlane.tools'
license=(MIT)
depends=(
  ruby
  # 'ruby-activesupport<5'
  ruby-activesupport-4
  'ruby-addressable<3' 'ruby-addressable>=2.3'
  'ruby-babosa<2' 'ruby-babosa>=1.0.2'
  'ruby-bundler<2' 'ruby-bundler>=1.12'
  ruby-colored
  # 'ruby-commander<5' 'ruby-commander>=4.4'
  ruby-commander-4
  # 'ruby-dotenv<3' 'ruby-dotenv>=2.1.1'
  ruby-dotenv-2.1
  'ruby-excon<1' 'ruby-excon>=0.45'
  'ruby-faraday<1' 'ruby-faraday>=0.9'
  'ruby-faraday-cookie_jar>=0.0.6' 'ruby-faraday-cookie_jar<0.1'
  # 'ruby-faraday_middleware<1' 'ruby-faraday_middleware>=0.9'
  ruby-faraday_middleware-0.10
  'ruby-fastimage>=1.6'
  'ruby-gh_inspector<2' 'ruby-gh_inspector>=1.0.1'
  'ruby-google-api-client>=0.9.2' 'ruby-google-api-client<0.10'
  'ruby-highline<2' 'ruby-highline>=1.7.2'
  'ruby-json<3'
  # 'ruby-mini_magick<4.6' 'ruby-mini_magick>=4.5.1'
  ruby-mini_magick-4.5
  ruby-multi_json
  'ruby-multipart-post<2.1' 'ruby-multipart-post>=2'
  'ruby-multi_xml<1' 'ruby-multi_xml>=0.5'
  'ruby-plist<4' 'ruby-plist>=3.1'
  'ruby-rubyzip<2' 'ruby-rubyzip>=1.1'
  'ruby-security=0.1.3'
  # 'ruby-slack-notifier<2' 'ruby-slack-notifier>=1.3'
  ruby-slack-notifier-1
  'ruby-terminal-notifier<2' 'ruby-terminal-notifier>=1.6.2'
  'ruby-terminal-table<2' 'ruby-terminal-table>=1.4.5'
  'ruby-word_wrap<1.1' 'ruby-word_wrap>=1'
  'ruby-xcodeproj<2' 'ruby-xcodeproj>=0.20'
  'ruby-xcpretty<1' 'ruby-xcpretty>=0.2.4' 
  'ruby-xcpretty-travis-formatter>=0.0.3'
  
  # missed by other packages
  ruby-domain_name
)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha1sums=('e050b0783c6b98bfd72622a405bf655fd8f3895e')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
