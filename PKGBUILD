# Maintainer: Jameson Pugh <imntreal@gmail.com>

_gemname=ssh_scan
pkgname=ruby-$_gemname
pkgver=0.0.18
pkgrel=1
pkgdesc='A prototype SSH configuration and policy scanner'
arch=(any)
url='https://github.com/mozilla/ssh_scan'
license=(MIT)
depends=('ruby-bindata>=2.0' 'ruby-netaddr' 'ruby-net-ssh' 'ruby-sqlite3' 'ruby-sshkey')
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha256sums=('3c9e933bf77f43d08f66223c5200fdc207ff8014b2ab2c769a6316ed208fa6cd')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
  #install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/LICENSE.txt" "$pkgdir/usr/share/licenses/$pkgname/LICENSE.txt"
}

# vim:set ts=2 sw=2 et:
