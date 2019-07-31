# Maintainer: noraj <printf %s 'YWxleGFuZHJlLnphbm5pQGV1cm9wZS5jb20='|base64 -d>

pkgname=ruby-docopt
_gemname=docopt
pkgver=0.6.1
pkgrel=1
pkgdesc='Command line option parser, that will make you smile'
arch=('any')
url='https://github.com/docopt/docopt.rb'
license=('MIT')
depends=('ruby')
makedepends=('rubygems')
source=("https://rubygems.org/downloads/$_gemname-$pkgver.gem")
noextract=("$_gemname-$pkgver.gem")
sha256sums=('73f837ed376d015971712c17f7aafa021998b964b77d52997dcaff79d6727467')

package() {
  local _gemdir="$(ruby -r rubygems -e'puts Gem.default_dir')"

  if [[ $CARCH == arm* ]] ; then
    gem install --ignore-dependencies --no-user-install --no-rdoc --no-ri \
      -i "$pkgdir$_gemdir" "$_gemname-$pkgver.gem"
  else
    gem install --ignore-dependencies --no-user-install -i "$pkgdir$_gemdir" \
      "$_gemname-$pkgver.gem"
  fi

  rm -rf "$pkgdir/$_gemdir/cache"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

