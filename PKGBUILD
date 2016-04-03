# Maintainer: James An <james@jamesan.ca>
# Contributor: fzerorubigd <fzerorubigd {AT} gmail>

_pkgname=mailcatcher
pkgname=ruby-$_pkgname
pkgver=0.6.1
pkgrel=9
pkgdesc='Catches mail and serves it through a dream.'
arch=('any')
url="http://$_pkgname.me"
license=('MIT')
depends=('gnu-netcat' 'ruby-activesupport' 'ruby-eventmachine' 'ruby-haml' 'ruby-mail' 'ruby-sinatra' 'ruby-skinny' 'ruby-sqlite3' 'ruby-thin')
makedepends=('rubygems')
provides=("$_pkgname")
conflicts=("$_pkgname")
options=(!emptydirs)
install="$pkgname.install"
source=(
  "http://gems.rubyforge.org/gems/$_pkgname-$pkgver.gem"
  "$_pkgname.service"
  "$_pkgname-http.socket"
  "$_pkgname-http@.service"
  "$_pkgname-smtp.socket"
  "$_pkgname-smtp@.service"
)
md5sums=('bdeb5656e0931d1b211b52aa0f9e31f5'
         'cf357f9859b6f24210d07ccce7313879'
         'd21981c2877a578555bcd61c0c6bc718'
         'a8a07564d971bc1df3cc786cda27c333'
         '99cb313118e735cd021e476111d9cd62'
         '8e57104285979856653f99e5564b613d')
noextract=("$_pkgname-$pkgver.gem")

package() {
  # _gemdir is defined inside package() because if ruby[gems] is not installed on
  # the system, makepkg will exit with an error when sourcing the PKGBUILD.
  local _gemdir="$pkgdir$(ruby -rubygems -e'puts Gem.default_dir')"
  local _gemspec="$_gemdir/specifications/$_pkgname-$pkgver.gemspec"

  gem install --no-document --no-user-install --ignore-dependencies --install-dir "$_gemdir" --bindir "$pkgdir/usr/bin" "$_pkgname-$pkgver.gem"
  rm "$_gemdir/cache/$_pkgname-$pkgver.gem"

  # Loosen version-specific dependencies
  sed -i '/dependency(%q<eventmachine>/{s/".*"/"~> 1"/}' $_gemspec
  sed -i '/dependency(%q<thin>/{s/".*"/"~> 1"/}' $_gemspec

  # Install systemd units
  for file in "$_pkgname"{.service,{-http,-smtp}{@.service,.socket}}; do
    install -Dm644 "$file" "$pkgdir/usr/lib/systemd/system/$file"
  done
}
