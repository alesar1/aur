# Maintainer: noraj <printf %s 'YWxleGFuZHJlLnphbm5pQGV1cm9wZS5jb20='|base64 -d>

_gemname=haiti-hash
pkgname=haiti
pkgver=1.0.0
pkgrel=1
pkgdesc='A CLI tool to identify the hash type of a given hash'
arch=('any')
url='https://orange-cyberdefense.github.io/haiti/'
license=('MIT')
depends=('ruby' 'ruby-paint' 'ruby-docopt')
conflicts=('haiti-git')
provides=('haiti')
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
#source=("https://github.com/Orange-Cyberdefense/$pkgname/archive/v$pkgver.tar.gz")
noextract=($_gemname-$pkgver.gem)
b2sums=('84006e0300e13adc13e74888f4fe7e40fd31cdd6dd413eede32be58a0455a650060da9d7b2f3219388bddfc22420485124e28bf54e968d70e03eb3fbd783a4a0')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install --no-document -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
  find "$pkgdir/$_gemdir/extensions/" -name *.so -delete
  rm -r "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/test"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/LICENSE.txt" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
