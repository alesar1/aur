# Maintainer: Vlad M. <vlad@archlinux.net>
# Contributor: pisuka <tekmon@gmail.com>

pkgname=heroku-toolbelt
pkgver=3.41.5
pkgrel=1
pkgdesc="Everything you need to get started using Heroku (including foreman)"
arch=('any')
url="https://toolbelt.heroku.com"
license=('MIT' 'APACHE' 'RUBY' 'PerlArtistic' 'GPL' 'custom')
depends=("ruby>=1.9")
makedepends=("ruby-bundler")
optdepends=('git')
conflicts=('ruby-heroku' 'ruby-foreman' 'heroku-client')
source=('Gemfile' 'Gemfile.lock')
sha256sums=('3bec78d1c2ccc16324e806b8cbb60726911a459f42af1b15821606079dc04e37'
            '93b2a0eff2d04b84b52346a8407dc31408957f36b2e7185b10d6cc32eda48327')

package() {
  cd "$pkgdir"
  mkdir -p "usr/lib/ruby/vendor_ruby/$pkgname" "usr/bin" "usr/share/man/man1"
  cd "usr/lib/ruby/vendor_ruby/$pkgname"

  cp -L "$srcdir"/Gemfile* .

  bundle install --standalone --deployment --binstubs="$pkgdir/usr/bin"

  cd "$pkgdir"

  find "usr/bin" -type f ! -name heroku ! -name foreman -execdir rm "{}" +

  find "usr/lib/ruby/vendor_ruby/heroku-toolbelt/vendor/bundle/ruby" -path "*/gems/*/man/*" -exec ln -st "usr/share/man/man1/" "/{}" \;
}
