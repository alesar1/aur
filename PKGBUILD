# Maintainer: lsf

pkgname='envizon-git'
_pkgname='envizon'
pkgver=37.24d86d4
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

package() {
  cd "$srcdir"

  mkdir -p "$pkgdir/usr/lib/sysusers.d/" \
                   "$pkgdir/usr/bin" \
                   "$pkgdir/usr/share"

  install -m644 "${_pkgname}.sysusers.conf"\
    "$pkgdir/usr/lib/sysusers.d/${_pkgname}.conf"

  cp -ar "${_pkgname}" "$pkgdir/usr/share/${_pkgname}"
  cp db_setup.sh "$pkgdir/usr/share/${_pkgname}/"
  chmod +x "$pkgdir/usr/share/${_pkgname}/"

  rm -rf "$pkgdir/usr/share/${_pkgname}/docker"
  rm -rf "$pkgdir/usr/share/${_pkgname}/.github"

  cat > "$pkgdir/usr/bin/${_pkgname}" << EOF
#!/bin/sh
cd /usr/share/${_pkgname}
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

