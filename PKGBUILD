# Maintainer: Doug Newgard <scimmia at archlinux dot info>
# Contributor: Sergio Correia <sergio@correia.cc>
# Contributor: Nicolas Vivet <nizzox@gmail.com>
# Contributor: Kenneth Endfinger <kaendfinger@gmail.com>

_pkgname=arcanist
pkgname="${_pkgname}-git"

pkgver() {
  cd "$_pkgname"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

pkgver=r2066.cc850163
pkgrel=1
pkgdesc='The command line interface for Phabricator'
arch=('any')
url="https://www.phacility.com/phabricator/"
license=('Apache')
depends=('libphutil' 'php' 'python')
optdepends=('git: Git VCS support'
            'subversion: Subversion VCS support'
            'mercurial: Mercurial VCS support')
makedepends=('git')
provides=("$_pkgname=$pkgver")
conflicts=("$_pkgname")
source=("git+https://github.com/phacility/arcanist.git")
sha256sums=('SKIP')

package() {
  install -d "$pkgdir/usr/share/php/$_pkgname/" "$pkgdir/usr/bin/"
  cp -a $_pkgname/* "$pkgdir/usr/share/php/$_pkgname/"
  install -Dm644 "$_pkgname/resources/shell/bash-completion" "$pkgdir/usr/share/bash-completion/completions/arc"
  ln -s "../share/php/$_pkgname/bin/arc" "$pkgdir/usr/bin/arc"
}
