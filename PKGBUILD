# Maintainer: Bert Peters <bert@bertptrs.nl>
# Contributor: Carsten Feuls <archlinux@carstenfeuls.de>

pkgname=ruby-listen
pkgver=3.3.3
pkgrel=1
pkgdesc="The Listen gem listens to file modifications and notifies you about the changes. Works everywhere!"
arch=('any')
url="https://rubygems.org/gems/listen"
license=("MIT")
depends=('ruby' 'ruby-rb-inotify>=0.9.10' 'ruby-rb-fsevent>=0.10.3')
makedepends=('ruby-rdoc')
source=("https://rubygems.org/downloads/listen-$pkgver.gem")
noextract=("listen-$pkgver.gem")
options=('!emptydirs')
sha256sums=('0ae6949b576b58f6fe1b8f1631024d6f7bb9d83086add585df7c8c77147cecfe')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir"/usr/bin listen-$pkgver.gem

  rm "$pkgdir/$_gemdir"/cache/listen-$pkgver.gem
  install -Dm0644 "$pkgdir/$_gemdir"/gems/listen-$pkgver/LICENSE.txt "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}
