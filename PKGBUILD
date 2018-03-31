# Maintainer: lsf

pkgname='envizon-git'
_pkgname='envizon'
pkgver=38.810f89c
pkgrel=1
pkgdesc='network visualization tool with focus on red / blue team requirements'
url='https://evait-security.github.io/envizon/'
license=('MIT')
depends=('ruby' 'ruby-bundler' 'git' 'postgresql'
         'openssl' 'libxml2' 'libxslt' 'xz' 'x11-ssh-askpass')
makedepends=('git')
arch=('any')
source=("git+https://github.com/evait-security/${_pkgname}.git"
        "${_pkgname}.sysusers.conf"
        "db_setup.sh")
install="${_pkgname}.install"
sha1sums=('SKIP'
          '59f638f39ebf1f4e05928071e5dd0fbbb9bffc92'
          '53199f7d1210e1a85a7045426a8b7949c324a475')
options=('!strip')

pkgver() {
  cd "$srcdir/${_pkgname}"

  echo $(git rev-list --count HEAD).$(git rev-parse --short HEAD)
}

build() {
  cd "$srcdir/${_pkgname}"
  bundle config --local build.nokogiri --use-system-libraries
  bundle install --path vendor/bundle --without development test -j"$(nproc)" --no-cache
  mkdir -p .ssl
}

package() {
  mkdir -p "$pkgdir/usr/lib/sysusers.d/" \
                   "$pkgdir/usr/bin" \
                   "$pkgdir/opt"

  install -m644 "${_pkgname}.sysusers.conf"\
    "$pkgdir/usr/lib/sysusers.d/${_pkgname}.conf"

  cp -ar "${_pkgname}" "$pkgdir/opt/${_pkgname}"
  cp db_setup.sh "$pkgdir/opt/${_pkgname}/"
  chmod +x "$pkgdir/opt/${_pkgname}/"

  rm -rf "$pkgdir/opt/${_pkgname}/docker"
  rm -rf "$pkgdir/opt/${_pkgname}/.github"

  chmod -R g+w "$pkgdir/opt/${_pkgname}"

  cat > "$pkgdir/usr/bin/${_pkgname}" << EOF
#!/bin/sh
cd /opt/${_pkgname}
export SECRET_KEY_BASE=\$(cat config/secret)
RAILS_ENV=production
export RAILS_ENV
bundle exec rails db:migrate
bundle exec rails db:seed
bundle exec rails assets:precompile
RAILS_FORCE_SSL=true RAILS_SERVE_STATIC_FILES=true exec bundle exec rails s
EOF

  chmod +x "$pkgdir/usr/bin/${_pkgname}"
}

